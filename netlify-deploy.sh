#!/bin/bash

# Exit on error
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting Netlify deployment preparation...${NC}"

# Install dependencies
echo -e "\n${GREEN}Installing dependencies...${NC}"
npm install

# Build the project
echo -e "\n${GREEN}Building the project...${NC}"
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo -e "\n${RED}❌ Build failed. Please check the build errors above.${NC}"
    exit 1
fi

# Create _redirects file if it doesn't exist
if [ ! -f "dist/_redirects" ]; then
    echo -e "\n${GREEN}Creating _redirects file...${NC}"
    echo -e "# SPA fallback for client-side routing\n/*    /index.html   200" > dist/_redirects
fi

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo -e "\n${YELLOW}Netlify CLI not found. Installing...${NC}"
    npm install -g netlify-cli
fi

# Deploy to Netlify
echo -e "\n${GREEN}Deploying to Netlify...${NC}"
netlify deploy --prod --dir=dist

echo -e "\n${GREEN}✨ Deployment preparation complete!${NC}"
echo -e "${YELLOW}Please check the output above for the deployment URL.${NC}"
