#!/bin/bash

# PeacefulAnswers Setup Script
# This script sets up the development environment

set -e  # Exit on any error

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

# Check system requirements
check_requirements() {
    log_info "Checking system requirements..."
    
    # Check Node.js
    if command -v node >/dev/null 2>&1; then
        local node_version=$(node --version)
        log_success "Node.js found: $node_version"
    else
        log_error "Node.js not found. Please install Node.js 18 or later."
        exit 1
    fi
    
    # Check npm
    if command -v npm >/dev/null 2>&1; then
        local npm_version=$(npm --version)
        log_success "npm found: $npm_version"
    else
        log_error "npm not found. Please install npm."
        exit 1
    fi
    
    # Check Docker
    if command -v docker >/dev/null 2>&1; then
        local docker_version=$(docker --version)
        log_success "Docker found: $docker_version"
    else
        log_warning "Docker not found. Docker is required for containerized deployment."
    fi
    
    # Check Docker Compose
    if command -v docker-compose >/dev/null 2>&1; then
        local compose_version=$(docker-compose --version)
        log_success "Docker Compose found: $compose_version"
    else
        log_warning "Docker Compose not found. It's required for multi-container setup."
    fi
    
    # Check Git
    if command -v git >/dev/null 2>&1; then
        local git_version=$(git --version)
        log_success "Git found: $git_version"
    else
        log_error "Git not found. Please install Git."
        exit 1
    fi
}

# Setup environment files
setup_environment() {
    log_info "Setting up environment files..."
    
    cd "$PROJECT_DIR"
    
    # Copy .env.example to .env if it doesn't exist
    if [[ ! -f ".env" ]]; then
        if [[ -f ".env.example" ]]; then
            cp ".env.example" ".env"
            log_success "Created .env from .env.example"
            log_warning "Please review and update .env with your actual configuration"
        else
            log_error ".env.example not found. Cannot create .env file."
            exit 1
        fi
    else
        log_info ".env file already exists"
    fi
    
    # Validate environment variables
    local required_vars=(
        "NEXT_PUBLIC_SUPABASE_URL"
        "NEXT_PUBLIC_SUPABASE_ANON_KEY"
        "SUPABASE_SERVICE_ROLE_KEY"
    )
    
    for var in "${required_vars[@]}"; do
        if grep -q "^${var}=" ".env" && ! grep -q "^${var}=$\|^${var}=your_.*_here" ".env"; then
            log_success "Environment variable $var is configured"
        else
            log_warning "Environment variable $var needs to be configured in .env"
        fi
    done
}

# Install dependencies
install_dependencies() {
    log_info "Installing dependencies..."
    
    cd "$PROJECT_DIR"
    
    # Install npm dependencies
    npm ci
    
    if [[ $? -eq 0 ]]; then
        log_success "Dependencies installed successfully"
    else
        log_error "Failed to install dependencies"
        exit 1
    fi
}

# Setup pre-commit hooks
setup_git_hooks() {
    log_info "Setting up Git hooks..."
    
    cd "$PROJECT_DIR"
    
    # Create pre-commit hook
    mkdir -p .git/hooks
    
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
# Pre-commit hook for PeacefulAnswers

echo "Running pre-commit checks..."

# Run linter
echo "Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting failed. Please fix the errors before committing."
    exit 1
fi

# Run tests
echo "Running tests..."
npm run test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Please fix the failing tests before committing."
    exit 1
fi

# Build check
echo "Running build check..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the build errors before committing."
    exit 1
fi

echo "✅ All pre-commit checks passed!"
EOF
    
    chmod +x .git/hooks/pre-commit
    log_success "Git pre-commit hook installed"
}

# Create necessary directories
create_directories() {
    log_info "Creating necessary directories..."
    
    cd "$PROJECT_DIR"
    
    local directories=(
        "logs"
        "uploads"
        "tmp"
    )
    
    for dir in "${directories[@]}"; do
        if [[ ! -d "$dir" ]]; then
            mkdir -p "$dir"
            log_success "Created directory: $dir"
        else
            log_info "Directory already exists: $dir"
        fi
    done
}

# Setup development database (if needed)
setup_database() {
    log_info "Database setup (Supabase is managed externally)"
    log_info "Please ensure your Supabase project is configured with the correct schema"
    log_info "Database credentials should be set in your .env file"
}

# Final setup checks
final_checks() {
    log_info "Running final setup checks..."
    
    cd "$PROJECT_DIR"
    
    # Try to build the project
    log_info "Testing build process..."
    npm run build
    
    if [[ $? -eq 0 ]]; then
        log_success "Build test successful"
    else
        log_error "Build test failed. Please check your configuration."
        exit 1
    fi
    
    # Clean up build artifacts
    rm -rf .next
}

# Display next steps
show_next_steps() {
    log_success "🎉 Setup completed successfully!"
    echo ""
    log_info "Next steps:"
    echo "  1. Review and update .env file with your actual configuration"
    echo "  2. Start development server: npm run dev"
    echo "  3. Open http://localhost:3000 in your browser"
    echo ""
    log_info "Docker commands:"
    echo "  • Development: docker-compose up"
    echo "  • Production build: docker build -t peacefulanswers ."
    echo "  • Deploy staging: ./scripts/deploy.sh staging"
    echo "  • Deploy production: ./scripts/deploy.sh production"
    echo ""
    log_info "Useful npm scripts:"
    echo "  • npm run dev - Start development server"
    echo "  • npm run build - Build for production"
    echo "  • npm run start - Start production server"
    echo "  • npm run lint - Run linter"
    echo "  • npm run test - Run tests"
}

# Main setup process
main() {
    log_info "🚀 Starting PeacefulAnswers setup..."
    
    check_requirements
    setup_environment
    install_dependencies
    create_directories
    setup_git_hooks
    setup_database
    final_checks
    show_next_steps
}

# Run main function
main "$@"