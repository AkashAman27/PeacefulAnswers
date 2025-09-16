#!/bin/bash

# PeacefulAnswers Docker Package Creator
# This script creates a complete Docker package for distribution

set -e

PACKAGE_DIR="peacefulanswers-docker-package"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }

log_info "Creating Docker package for team distribution..."

# Create package directory
rm -rf "$PACKAGE_DIR"
mkdir -p "$PACKAGE_DIR"

log_info "Building production Docker image..."

# Build the production image with all environment variables
docker build \
  --build-arg NEXT_PUBLIC_SUPABASE_URL="https://wxprzwoylqjzozhezttc.supabase.co" \
  --build-arg NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cHJ6d295bHFqem96aGV6dHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDgzMDEsImV4cCI6MjA2OTEyNDMwMX0.v_aa6ZNkKCH06aJeSCmPiqXpZzCTaLD1tbKW-KatTeQ" \
  --build-arg SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cHJ6d285bHFqem96aGV6dHRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzU0ODMwMSwiZXhwIjoyMDY5MTI0MzAxfQ.vbdRdx2j7y4VasLAczmZIgEy78j02Ag8wfqMtniiyTM" \
  -t peacefulanswers:team-package .

log_success "Docker image built successfully!"

# Save the image to a tar file
log_info "Exporting Docker image..."
docker save peacefulanswers:team-package -o "$PACKAGE_DIR/peacefulanswers-app.tar"

# Create a simplified docker-compose for the team
cat > "$PACKAGE_DIR/docker-compose.yml" << 'EOF'
version: '3.8'

services:
  # PeacefulAnswers Application
  app:
    image: peacefulanswers:team-package
    container_name: peacefulanswers-app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    depends_on:
      - redis
    networks:
      - app-network

  # Redis Cache
  redis:
    image: redis:7-alpine
    container_name: peacefulanswers-redis
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
    restart: unless-stopped
    networks:
      - app-network
    command: redis-server --appendonly yes --maxmemory 256mb --maxmemory-policy allkeys-lru

volumes:
  redis-data:

networks:
  app-network:
    driver: bridge
EOF

# Create startup script for the team
cat > "$PACKAGE_DIR/start.sh" << 'EOF'
#!/bin/bash

# PeacefulAnswers Startup Script
# Run this script to start the application

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }

echo "
🕉️  PeacefulAnswers Docker Setup
==============================
"

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    log_warning "Docker is not running. Please start Docker first."
    echo "On Mac: Open Docker Desktop"
    echo "On Linux: sudo systemctl start docker"
    exit 1
fi

log_info "Loading PeacefulAnswers Docker image..."

# Load the Docker image
if [ -f "peacefulanswers-app.tar" ]; then
    docker load -i peacefulanswers-app.tar
    log_success "Docker image loaded successfully!"
else
    log_warning "peacefulanswers-app.tar not found. Please ensure all files are present."
    exit 1
fi

log_info "Starting PeacefulAnswers application..."

# Start the application
docker-compose up -d

# Wait for services to be ready
log_info "Waiting for services to start..."
sleep 15

# Check if services are running
if docker-compose ps | grep -q "Up"; then
    log_success "🎉 PeacefulAnswers is now running!"
    echo ""
    echo "🌐 Application URL: http://localhost:3000"
    echo "🏥 Health Check: http://localhost:3000/api/health"
    echo "🔧 Redis: localhost:6379"
    echo ""
    echo "📊 To view logs: docker-compose logs -f"
    echo "🛑 To stop: docker-compose down"
    echo ""
    log_info "The application includes:"
    echo "  • Next.js 15 with PeacefulAnswers website"
    echo "  • Redis caching for better performance"
    echo "  • Supabase integration pre-configured"
    echo "  • Festival ticker with Durga Puja announcement"
else
    log_warning "Something went wrong. Check logs with: docker-compose logs"
    exit 1
fi
EOF

chmod +x "$PACKAGE_DIR/start.sh"

# Create README for the team
cat > "$PACKAGE_DIR/README.md" << 'EOF'
# PeacefulAnswers Docker Package 🕉️

This is a complete Docker package for the PeacefulAnswers application. Everything is pre-configured and ready to run.

## Quick Start (1 Command!)

```bash
./start.sh
```

That's it! The application will be running at http://localhost:3000

## What's Included

- ✅ Next.js 15 application with all features
- ✅ Redis caching for performance
- ✅ Supabase integration (pre-configured)
- ✅ Festival announcements (Durga Puja active)
- ✅ Complete API endpoints
- ✅ Health monitoring

## Requirements

- Docker Desktop (Mac/Windows) or Docker Engine (Linux)
- 2GB free RAM
- Ports 3000 and 6379 available

## Manual Steps (Alternative)

If you prefer manual control:

```bash
# 1. Load the Docker image
docker load -i peacefulanswers-app.tar

# 2. Start services
docker-compose up -d

# 3. Check status
docker-compose ps

# 4. View logs
docker-compose logs -f app

# 5. Stop services
docker-compose down
```

## URLs

- **Main App**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health
- **API Base**: http://localhost:3000/api/

## Key Features

- 🏮 Festival ticker with Durga Puja announcement
- 📱 Responsive design for all devices
- ⚡ Redis caching for fast performance
- 🔒 Security headers configured
- 📊 Health monitoring endpoint

## Troubleshooting

### Port already in use
```bash
# Check what's using port 3000
lsof -i :3000

# Kill the process or modify docker-compose.yml to use different port
```

### Services won't start
```bash
# Check logs
docker-compose logs

# Restart services
docker-compose down
docker-compose up -d
```

### Reset everything
```bash
docker-compose down -v
docker system prune -f
./start.sh
```

## Development

This package is for running the application. For development:

1. Clone the source repository
2. Use the development setup with hot reload
3. Make changes and rebuild the package

## Support

Contact the development team for any issues or questions.

---

**Built with ❤️ for PeacefulAnswers.com**
EOF

# Create stop script
cat > "$PACKAGE_DIR/stop.sh" << 'EOF'
#!/bin/bash

# PeacefulAnswers Stop Script

echo "🛑 Stopping PeacefulAnswers..."

docker-compose down

echo "✅ PeacefulAnswers stopped successfully!"
echo ""
echo "To restart: ./start.sh"
echo "To completely remove: docker-compose down -v"
EOF

chmod +x "$PACKAGE_DIR/stop.sh"

# Create health check script
cat > "$PACKAGE_DIR/check-health.sh" << 'EOF'
#!/bin/bash

# Health Check Script

echo "🏥 Checking PeacefulAnswers Health..."
echo ""

# Check if containers are running
echo "📦 Container Status:"
docker-compose ps

echo ""

# Check application health
echo "🌐 Application Health:"
if curl -s http://localhost:3000/api/health | jq . 2>/dev/null; then
    echo "✅ Application is healthy!"
else
    echo "❌ Application health check failed"
    echo "Try: docker-compose logs app"
fi

echo ""

# Check Redis
echo "📊 Redis Status:"
if docker-compose exec redis redis-cli ping 2>/dev/null | grep -q PONG; then
    echo "✅ Redis is working!"
else
    echo "❌ Redis is not responding"
fi
EOF

chmod +x "$PACKAGE_DIR/check-health.sh"

log_success "Package created successfully!"

# Create a tar.gz of the entire package
log_info "Creating distribution archive..."
tar -czf "${PACKAGE_DIR}.tar.gz" "$PACKAGE_DIR"

log_success "🎉 Docker package ready for distribution!"

echo ""
echo "📦 Package location: ${PACKAGE_DIR}/"
echo "📁 Archive created: ${PACKAGE_DIR}.tar.gz"
echo ""
echo "📋 Share with your team:"
echo "1. Send them the ${PACKAGE_DIR}.tar.gz file"
echo "2. They extract it: tar -xzf ${PACKAGE_DIR}.tar.gz"
echo "3. They run: cd ${PACKAGE_DIR} && ./start.sh"
echo ""
echo "That's it! The application will be running on their machine! 🚀"
EOF