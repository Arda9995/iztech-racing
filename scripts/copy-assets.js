const fs = require('fs-extra');
const path = require('path');

// Configuration
const config = {
  // Source directories and their target locations in the public folder
  assetDirs: [
    { 
      src: 'photos', 
      dest: 'public/images/team',
      filter: (src) => !/node_modules/.test(src) && /\.(png|jpg|jpeg|gif|webp)$/i.test(src)
    },
    { 
      src: 'ALTIN', 
      dest: 'public/images/sponsors/gold',
      filter: (src) => !/node_modules/.test(src) && /\.(png|jpg|jpeg|gif|webp)$/i.test(src)
    },
    { 
      src: 'SILVER', 
      dest: 'public/images/sponsors/silver',
      filter: (src) => !/node_modules/.test(src) && /\.(png|jpg|jpeg|gif|webp)$/i.test(src)
    },
    { 
      src: 'BRONZ', 
      dest: 'public/images/sponsors/bronze',
      filter: (src) => !/node_modules/.test(src) && /\.(png|jpg|jpeg|gif|webp)$/i.test(src)
    },
    { 
      src: 'SUPPORTER', 
      dest: 'public/images/sponsors/supporter',
      filter: (src) => !/node_modules/.test(src) && /\.(png|jpg|jpeg|gif|webp)$/i.test(src)
    },
    { 
      src: 'racingaleri', 
      dest: 'public/images/gallery',
      filter: (src) => !/node_modules/.test(src) && /\.(png|jpg|jpeg|gif|webp)$/i.test(src)
    }
  ],
  // Files to copy directly to public folder
  filesToCopy: [
    { src: 'public/_redirects', dest: 'dist/_redirects' },
    { src: 'public/robots.txt', dest: 'dist/robots.txt' },
    { src: 'public/sitemap.xml', dest: 'dist/sitemap.xml' }
  ]
};

// Create directories if they don't exist
function ensureDirectories() {
  const dirs = new Set();
  
  // Add all destination directories
  config.assetDirs.forEach(dir => {
    dirs.add(path.join(process.cwd(), dir.dest));
  });
  
  // Add parent directories for files
  config.filesToCopy.forEach(file => {
    dirs.add(path.dirname(file.dest));
  });
  
  // Create directories
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created directory: ${path.relative(process.cwd(), dir)}`);
    }
  });
}

// Copy assets from source to destination
async function copyAssets() {
  console.log('🚀 Starting asset copy...');
  
  // Ensure all directories exist
  ensureDirectories();
  
  // Copy asset directories
  for (const dir of config.assetDirs) {
    const srcPath = path.join(process.cwd(), dir.src);
    const destPath = path.join(process.cwd(), dir.dest);
    
    if (fs.existsSync(srcPath)) {
      try {
        await fs.copy(srcPath, destPath, { 
          filter: dir.filter,
          overwrite: true,
          errorOnExist: false,
          preserveTimestamps: true
        });
        console.log(`✅ Copied ${dir.src} to ${dir.dest}`);
      } catch (error) {
        console.error(`❌ Error copying ${dir.src}:`, error.message);
      }
    } else {
      console.warn(`⚠️ Source directory not found: ${dir.src}`);
    }
  }
  
  // Copy individual files
  for (const file of config.filesToCopy) {
    const srcPath = path.join(process.cwd(), file.src);
    const destPath = path.join(process.cwd(), file.dest);
    
    if (fs.existsSync(srcPath)) {
      try {
        await fs.copyFile(srcPath, destPath);
        console.log(`✅ Copied ${file.src} to ${file.dest}`);
      } catch (error) {
        console.error(`❌ Error copying ${file.src}:`, error.message);
      }
    } else if (!file.optional) {
      console.warn(`⚠️ Source file not found: ${file.src}`);
    }
  }
  
  console.log('✨ Asset copy completed!');
}

// Create a basic _redirects file if it doesn't exist
function ensureRedirectsFile() {
  const redirectsPath = path.join(process.cwd(), 'public', '_redirects');
  if (!fs.existsSync(redirectsPath)) {
    fs.writeFileSync(
      redirectsPath,
      '# SPA fallback for client-side routing
/*    /index.html   200'
    );
    console.log('✅ Created _redirects file');
  }
}

// Main function
async function main() {
  try {
    ensureRedirectsFile();
    await copyAssets();
  } catch (error) {
    console.error('❌ Error in asset preparation:', error);
    process.exit(1);
  }
}

// Run the script
main();
