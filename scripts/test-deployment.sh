#!/bin/bash

# Test script for PeacefulAnswers Docker deployment
# Usage: ./scripts/test-deployment.sh [local|staging|production]

set -e

ENVIRONMENT=${1:-local}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[✓]${NC} $1"; }
log_error() { echo -e "${RED}[✗]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[!]${NC} $1"; }

# Set base URL based on environment
case $ENVIRONMENT in
    "local")
        BASE_URL="http://localhost:3000"
        ;;
    "staging")
        BASE_URL="http://staging.peacefulanswers.com"
        ;;
    "production")
        BASE_URL="https://peacefulanswers.com"
        ;;
    *)
        log_error "Invalid environment: $ENVIRONMENT"
        exit 1
        ;;
esac

log_info "Testing PeacefulAnswers deployment - Environment: $ENVIRONMENT"
log_info "Base URL: $BASE_URL"
echo

# Test 1: Container Status (local only)
if [[ "$ENVIRONMENT" == "local" ]]; then
    log_info "1. Checking Docker containers..."
    
    if docker ps | grep -q "peacefulanswers-app"; then
        log_success "App container is running"
    else
        log_error "App container is not running"
        echo "Run: docker-compose up -d"
        exit 1
    fi
    
    if docker ps | grep -q "peacefulanswers-redis"; then
        log_success "Redis container is running"
    else
        log_warning "Redis container is not running (optional)"
    fi
    echo
fi

# Test 2: Health Check Endpoint
log_info "2. Testing health check endpoint..."
HEALTH_RESPONSE=$(curl -s -w "%{http_code}" -o /tmp/health_response.json "$BASE_URL/api/health" || echo "000")

if [[ "$HEALTH_RESPONSE" == "200" ]]; then
    log_success "Health check passed (HTTP 200)"
    
    # Parse health check response
    if command -v jq >/dev/null 2>&1; then
        STATUS=$(jq -r '.status' /tmp/health_response.json 2>/dev/null || echo "unknown")
        UPTIME=$(jq -r '.uptime' /tmp/health_response.json 2>/dev/null || echo "unknown")
        ENV=$(jq -r '.environment' /tmp/health_response.json 2>/dev/null || echo "unknown")
        
        log_info "  Status: $STATUS"
        log_info "  Environment: $ENV"
        log_info "  Uptime: ${UPTIME}s"
    fi
else
    log_error "Health check failed (HTTP $HEALTH_RESPONSE)"
    if [[ -f /tmp/health_response.json ]]; then
        log_info "Response: $(cat /tmp/health_response.json)"
    fi
fi
echo

# Test 3: Homepage Load
log_info "3. Testing homepage..."
HOME_RESPONSE=$(curl -s -w "%{http_code}" -o /tmp/home_response.html "$BASE_URL/" || echo "000")

if [[ "$HOME_RESPONSE" == "200" ]]; then
    log_success "Homepage loaded successfully (HTTP 200)"
    
    # Check for key elements
    if grep -q "PeacefulAnswers" /tmp/home_response.html; then
        log_success "  Found site title"
    else
        log_warning "  Site title not found in response"
    fi
    
    if grep -q "Festival" /tmp/home_response.html; then
        log_success "  Found festival content"
    else
        log_warning "  Festival content not found"
    fi
else
    log_error "Homepage failed to load (HTTP $HOME_RESPONSE)"
fi
echo

# Test 4: API Endpoints
log_info "4. Testing API endpoints..."

# Test festival announcements API
API_RESPONSE=$(curl -s -w "%{http_code}" -o /tmp/api_response.json "$BASE_URL/api/festival-announcements" || echo "000")

if [[ "$API_RESPONSE" == "200" ]]; then
    log_success "Festival announcements API working (HTTP 200)"
    
    if command -v jq >/dev/null 2>&1; then
        COUNT=$(jq '. | length' /tmp/api_response.json 2>/dev/null || echo "0")
        log_info "  Found $COUNT festival announcements"
    fi
else
    log_error "Festival announcements API failed (HTTP $API_RESPONSE)"
fi
echo

# Test 5: Static Assets
log_info "5. Testing static assets..."

# Test favicon
FAVICON_RESPONSE=$(curl -s -w "%{http_code}" -o /dev/null "$BASE_URL/favicon.ico" || echo "000")

if [[ "$FAVICON_RESPONSE" == "200" ]]; then
    log_success "Favicon loaded (HTTP 200)"
else
    log_warning "Favicon not found (HTTP $FAVICON_RESPONSE)"
fi

# Test Next.js static files (if any exist)
STATIC_RESPONSE=$(curl -s -w "%{http_code}" -o /dev/null "$BASE_URL/_next/static/" || echo "000")

if [[ "$STATIC_RESPONSE" == "404" || "$STATIC_RESPONSE" == "403" ]]; then
    log_success "Static files directory protected (expected)"
else
    log_info "Static files response: HTTP $STATIC_RESPONSE"
fi
echo

# Test 6: Performance Check
log_info "6. Performance check..."

START_TIME=$(date +%s.%N)
curl -s -o /dev/null "$BASE_URL/"
END_TIME=$(date +%s.%N)
LOAD_TIME=$(echo "$END_TIME - $START_TIME" | bc 2>/dev/null || echo "unknown")

if [[ "$LOAD_TIME" != "unknown" ]]; then
    LOAD_TIME_MS=$(echo "$LOAD_TIME * 1000" | bc | cut -d. -f1)
    
    if [[ $LOAD_TIME_MS -lt 2000 ]]; then
        log_success "Page load time: ${LOAD_TIME_MS}ms (excellent)"
    elif [[ $LOAD_TIME_MS -lt 5000 ]]; then
        log_warning "Page load time: ${LOAD_TIME_MS}ms (acceptable)"
    else
        log_error "Page load time: ${LOAD_TIME_MS}ms (slow)"
    fi
else
    log_info "Could not measure load time (bc not available)"
fi
echo

# Test 7: Database Connection (via API)
log_info "7. Testing database connection..."

# This tests if Supabase connection is working
DB_TEST_RESPONSE=$(curl -s -w "%{http_code}" -o /tmp/db_test.json "$BASE_URL/api/festival-announcements" || echo "000")

if [[ "$DB_TEST_RESPONSE" == "200" ]]; then
    log_success "Database connection working"
else
    log_error "Database connection issue (HTTP $DB_TEST_RESPONSE)"
fi
echo

# Test 8: Security Headers
log_info "8. Checking security headers..."

HEADERS=$(curl -s -I "$BASE_URL/" || echo "")

if echo "$HEADERS" | grep -q "X-Frame-Options"; then
    log_success "X-Frame-Options header present"
else
    log_warning "X-Frame-Options header missing"
fi

if echo "$HEADERS" | grep -q "X-Content-Type-Options"; then
    log_success "X-Content-Type-Options header present"
else
    log_warning "X-Content-Type-Options header missing"
fi

if [[ "$ENVIRONMENT" == "production" ]]; then
    if echo "$HEADERS" | grep -q "Strict-Transport-Security"; then
        log_success "HSTS header present"
    else
        log_warning "HSTS header missing (production should have this)"
    fi
fi
echo

# Summary
log_info "=== Test Summary ==="

FAILED_TESTS=0

# Count failures (this is a simple check - in real scenario you'd track this properly)
if [[ "$HEALTH_RESPONSE" != "200" ]]; then ((FAILED_TESTS++)); fi
if [[ "$HOME_RESPONSE" != "200" ]]; then ((FAILED_TESTS++)); fi
if [[ "$API_RESPONSE" != "200" ]]; then ((FAILED_TESTS++)); fi
if [[ "$DB_TEST_RESPONSE" != "200" ]]; then ((FAILED_TESTS++)); fi

if [[ $FAILED_TESTS -eq 0 ]]; then
    log_success "All critical tests passed! ✨"
    log_success "Your PeacefulAnswers deployment is working correctly."
else
    log_error "$FAILED_TESTS critical test(s) failed."
    log_error "Please check the issues above and fix them."
    exit 1
fi

# Cleanup temp files
rm -f /tmp/health_response.json /tmp/home_response.html /tmp/api_response.json /tmp/db_test.json

echo
log_info "Access your application at: $BASE_URL"
log_info "Health check: $BASE_URL/api/health"