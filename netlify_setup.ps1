# Create directories if they don't exist
$directories = @(
    "public\images\vehicles",
    "public\images\sponsors\gold",
    "public\images\sponsors\silver",
    "public\images\sponsors\bronze",
    "public\images\sponsors\supporter",
    "public\images\team"
)

foreach ($dir in $directories) {
    if (-not (Test-Path -Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Created directory: $dir"
    }
}

# Function to copy files with error handling
function Copy-ImageFiles {
    param (
        [string]$sourceDir,
        [string]$destDir,
        [string]$filter = "*.*"
    )
    
    if (Test-Path -Path $sourceDir) {
        $files = Get-ChildItem -Path $sourceDir -Filter $filter -File
        foreach ($file in $files) {
            $destPath = Join-Path -Path $destDir -ChildPath $file.Name
            Copy-Item -Path $file.FullName -Destination $destPath -Force
            Write-Host "Copied: $($file.Name) to $destPath"
        }
    } else {
        Write-Host "Warning: Source directory not found: $sourceDir"
    }
}

# Copy vehicle images
Copy-ImageFiles -sourceDir "photos" -destDir "public\images\vehicles" -filter "*.{jpg,jpeg,png,webp}"

# Copy sponsor images
Copy-ImageFiles -sourceDir "ALTIN" -destDir "public\images\sponsors\gold"
Copy-ImageFiles -sourceDir "SILVER" -destDir "public\images\sponsors\silver"
Copy-ImageFiles -sourceDir "BRONZ" -destDir "public\images\sponsors\bronze"
Copy-ImageFiles -sourceDir "SUPPORTER" -destDir "public\images\sponsors\supporter"

# Copy team member images
Copy-ImageFiles -sourceDir "photos" -destDir "public\images\team" -filter "*.{png,jpg,jpeg}"

# Create _redirects file for SPA routing
$redirectsContent = @"
/*    /index.html   200
"@

# Create a script to update image paths in components
$updateScript = @'
// Update this script to fix image paths in your components
// Run this in your project directory

const fs = require('fs');
const path = require('path');

// Update Vehicles.tsx
const vehiclesPath = path.join(__dirname, 'src', 'components', 'Vehicles.tsx');
if (fs.existsSync(vehiclesPath)) {
    let content = fs.readFileSync(vehiclesPath, 'utf8');
    content = content
        .replace(/image: "photos\/([^"]+)"/g, 'image: "/images/vehicles/$1"');
    fs.writeFileSync(vehiclesPath, content, 'utf8');
    console.log('Updated image paths in Vehicles.tsx');
}

// Update Team.tsx
const teamPath = path.join(__dirname, 'src', 'components', 'Team.tsx');
if (fs.existsSync(teamPath)) {
    let content = fs.readFileSync(teamPath, 'utf8');
    content = content
        .replace(/image: "\/([^\/"]+\.(?:png|jpg|jpeg|gif|webp))"/g, 'image: "/images/team/$1"')
        .replace(/image: "([^\/"][^\"]+\.(?:png|jpg|jpeg|gif|webp))"/g, 'image: "/images/team/$1"');
    fs.writeFileSync(teamPath, content, 'utf8');
    console.log('Updated image paths in Team.tsx');
}

console.log('Path updates complete! Run "npm run dev" to test your application.');
'@

Set-Content -Path "update_image_paths.js" -Value $updateScript

Set-Content -Path "public\_redirects" -Value $redirectsContent
Write-Host "Created _redirects file for SPA routing"

Write-Host "`nSetup complete! Next steps:"
Write-Host "1. Run 'node update_image_paths.js' to update the paths in your components"
Write-Host "2. Test your application locally with 'npm run dev'"
Write-Host "3. Deploy to Netlify by pushing to your repository"
