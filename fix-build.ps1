# Fix Build Script for IZTECH Racing

# Show progress
Write-Host "🚀 Starting build fix process..." -ForegroundColor Cyan

# Step 1: Check Node.js and npm versions
Write-Host "`n🔍 Checking Node.js and npm versions..." -ForegroundColor Yellow
$nodeVersion = node -v
$npmVersion = npm -v
Write-Host "✅ Node.js version: $nodeVersion"
Write-Host "✅ npm version: $npmVersion"

# Step 2: Clean up
Write-Host "`n🧹 Cleaning up..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force node_modules
    Write-Host "✅ Removed node_modules"
}
if (Test-Path "package-lock.json") {
    Remove-Item package-lock.json
    Write-Host "✅ Removed package-lock.json"
}
if (Test-Path "dist") {
    Remove-Item -Recurse -Force dist
    Write-Host "✅ Removed dist directory"
}

# Step 3: Clear npm cache
Write-Host "`n🧼 Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force
Write-Host "✅ npm cache cleared"

# Step 4: Install dependencies
Write-Host "`n📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Step 5: Install required global packages if needed
Write-Host "`n🌍 Checking for required global packages..." -ForegroundColor Yellow
$globalPackages = @("vite", "typescript")
foreach ($pkg in $globalPackages) {
    $installed = npm list -g $pkg --depth=0 2>$null
    if (-not $installed) {
        Write-Host "Installing $pkg globally..."
        npm install -g $pkg
    }
}

# Step 6: Check TypeScript configuration
Write-Host "`n🔧 Checking TypeScript configuration..." -ForegroundColor Yellow
if (-not (Test-Path "tsconfig.json")) {
    Write-Host "⚠️  tsconfig.json not found. Creating a default one..."
    npx tsc --init
}

# Step 7: Run build
Write-Host "`n🏗️  Running build..." -ForegroundColor Yellow
npm run build

# Step 8: Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Build completed successfully!" -ForegroundColor Green
    
    # Step 9: Start development server
    Write-Host "`n🚀 Starting development server..." -ForegroundColor Cyan
    Start-Process "http://localhost:3030"
    npm run dev -- --port 3030
} else {
    Write-Host "`n❌ Build failed. Please check the error messages above." -ForegroundColor Red
    
    # Try to run Vite directly for more detailed error
    Write-Host "`n🔍 Running Vite with debug..." -ForegroundColor Yellow
    npx vite build --debug
}

Write-Host "`n✨ Process completed!" -ForegroundColor Cyan

# Keep the window open
Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
