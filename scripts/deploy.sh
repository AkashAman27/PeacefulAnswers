#!/bin/bash

# PeacefulAnswers Deployment Script
# Usage: ./scripts/deploy.sh [staging|production]

set -e  # Exit on any error

ENVIRONMENT=${1:-staging}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Validation
validate_environment() {
    if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
        log_error "Invalid environment: $ENVIRONMENT. Use 'staging' or 'production'"
        exit 1
    fi
}

# Pre-deployment checks
pre_deployment_checks() {
    log_info "Running pre-deployment checks..."
    
    # Check if Docker is running
    if ! docker info >/dev/null 2>&1; then
        log_error "Docker is not running. Please start Docker first."
        exit 1
    fi
    
    # Check if required files exist
    local required_files=(
        "Dockerfile"
        "docker-compose.prod.yml"
        ".env.docker"
    )
    
    for file in "${required_files[@]}"; do
        if [[ ! -f "$PROJECT_DIR/$file" ]]; then
            log_error "Required file not found: $file"
            exit 1
        fi
    done
    
    # Check if we're on the correct branch
    local current_branch=$(git branch --show-current)
    if [[ "$ENVIRONMENT" == "production" && "$current_branch" != "main" ]]; then
        log_error "Production deployments must be from 'main' branch. Current: $current_branch"
        exit 1
    elif [[ "$ENVIRONMENT" == "staging" && "$current_branch" != "develop" ]]; then
        log_warning "Staging deployments should typically be from 'develop' branch. Current: $current_branch"
        read -p "Continue? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
    
    log_success "Pre-deployment checks passed"
}

# Build Docker image
build_image() {
    log_info "Building Docker image for $ENVIRONMENT..."
    
    local image_tag="peacefulanswers:$ENVIRONMENT-$(date +%s)"
    
    cd "$PROJECT_DIR"
    
    # Build the image
    docker build -t "peacefulanswers:latest" -t "$image_tag" .
    
    if [[ $? -eq 0 ]]; then
        log_success "Docker image built successfully: $image_tag"
        echo "$image_tag" > ".last-build-tag"
    else
        log_error "Docker image build failed"
        exit 1
    fi
}

# Deploy to environment
deploy() {
    log_info "Deploying to $ENVIRONMENT..."
    
    cd "$PROJECT_DIR"
    
    # Set environment variables
    export COMPOSE_PROJECT_NAME="peacefulanswers-$ENVIRONMENT"
    
    # Use appropriate docker-compose file
    local compose_file="docker-compose.prod.yml"
    local env_file=".env.docker"
    
    # Pull latest images if needed
    log_info "Pulling latest images..."
    docker-compose -f "$compose_file" --env-file "$env_file" pull
    
    # Stop existing containers gracefully
    log_info "Stopping existing containers..."
    docker-compose -f "$compose_file" --env-file "$env_file" down --timeout 30
    
    # Start new containers
    log_info "Starting new containers..."
    docker-compose -f "$compose_file" --env-file "$env_file" up -d --remove-orphans
    
    # Wait for containers to be healthy
    log_info "Waiting for containers to be ready..."
    sleep 30
    
    # Health check
    local health_url="http://localhost:3000/api/health"
    if [[ "$ENVIRONMENT" == "production" ]]; then
        health_url="https://peacefulanswers.com/api/health"
    fi
    
    if curl -f "$health_url" >/dev/null 2>&1; then
        log_success "Application is healthy and running"
    else
        log_error "Health check failed"
        # Show logs for debugging
        log_info "Showing recent logs..."
        docker-compose -f "$compose_file" --env-file "$env_file" logs --tail=50
        exit 1
    fi
    
    log_success "Deployment to $ENVIRONMENT completed successfully"
}

# Cleanup old images and containers
cleanup() {
    log_info "Cleaning up old Docker images and containers..."
    
    # Remove dangling images
    docker image prune -f
    
    # Remove unused volumes
    docker volume prune -f
    
    # Remove stopped containers
    docker container prune -f
    
    log_success "Cleanup completed"
}

# Main deployment process
main() {
    log_info "Starting deployment process for $ENVIRONMENT environment"
    
    validate_environment
    pre_deployment_checks
    build_image
    deploy
    cleanup
    
    log_success "🎉 Deployment completed successfully!"
    log_info "Application is now running at:"
    
    if [[ "$ENVIRONMENT" == "production" ]]; then
        log_info "🌐 Production: https://peacefulanswers.com"
    else
        log_info "🔧 Staging: http://localhost:3000"
    fi
}

# Run main function
main "$@"