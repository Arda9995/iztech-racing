// This script will help restart the TypeScript server to apply type definition changes
const { exec } = require('child_process');
const path = require('path');

console.log('🔄 Restarting TypeScript server...');

// Command to restart the TypeScript server
exec('npx tsc --build --clean && npx tsc --build', 
  { cwd: __dirname },
  (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error restarting TypeScript server:');
      console.error(stderr);
      return;
    }
    console.log('✅ TypeScript server restarted successfully!');
    console.log('💡 If you still see red squiggles, try:');
    console.log('1. Closing and reopening your editor');
    console.log('2. Running "Reload Window" from the command palette');
  }
);
