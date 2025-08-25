const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  sourceDirs: [
    'src/components',
    'src/pages',
    'src'
  ],
  imageDirs: {
    team: 'images/team',
    vehicles: 'images/vehicles',
    sponsors: 'images/sponsors',
    assets: 'images/assets'
  },
  fileTypes: ['.tsx', '.jsx', '.js', '.ts']
};

// Process files in directory
function processDirectory(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      processDirectory(fullPath);
    } else if (config.fileTypes.some(ext => file.name.endsWith(ext))) {
      updateFilePaths(fullPath);
    }
  }
}

// Update file paths in a file
function updateFilePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Update team images
  content = content.replace(
    /(src|image|logo)=\s*["']\/?(?:photos\/)?([^/"']+\.(?:png|jpg|jpeg|gif|webp))["']/gi,
    (match, attr, filename) => {
      updated = true;
      return `${attr}="/${config.imageDirs.team}/${filename}"`;
    }
  );

  // Update vehicle images
  content = content.replace(
    /(src|image|logo)=\s*["'](?:photos\/)?([^/"']+\.(?:png|jpg|jpeg|gif|webp))["']/gi,
    (match, attr, filename) => {
      updated = true;
      return `${attr}="/${config.imageDirs.vehicles}/${filename}"`;
    }
  );

  // Update sponsor images
  content = content.replace(
    /(src|image|logo)=\s*["']\/(?:ALTIN|SILVER|BRONZ|SUPPORTER)\/([^/"']+\.(?:png|jpg|jpeg|gif|webp))["']/gi,
    (match, attr, filename) => {
      updated = true;
      const tier = match.includes('ALTIN') ? 'gold' : 
                   match.includes('SILVER') ? 'silver' : 
                   match.includes('BRONZ') ? 'bronze' : 'supporter';
      return `${attr}="/${config.imageDirs.sponsors}/${tier}/${filename}"`;
    }
  );

  // Save file if updated
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated paths in ${path.relative(process.cwd(), filePath)}`);
  }
}

// Create necessary directories
function createDirectories() {
  const baseDir = path.join(process.cwd(), 'public');
  
  // Create image directories
  Object.values(config.imageDirs).forEach(dir => {
    const fullPath = path.join(baseDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
  
  // Create sponsor subdirectories
  ['gold', 'silver', 'bronze', 'supporter'].forEach(tier => {
    const sponsorDir = path.join(baseDir, config.imageDirs.sponsors, tier);
    if (!fs.existsSync(sponsorDir)) {
      fs.mkdirSync(sponsorDir, { recursive: true });
    }
  });
}

// Main function
function main() {
  console.log('🚀 Starting path updates...');
  
  // Create necessary directories
  createDirectories();
  
  // Process all source files
  config.sourceDirs.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
      processDirectory(fullPath);
    }
  });
  
  console.log('✨ Path updates completed!');
}

// Run the script
main();
