@echo off
echo Cleaning up...

REM Remove node_modules and package-lock.json
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

REM Clear npm cache
echo Clearing npm cache...
npm cache clean --force

REM Install dependencies
echo Installing dependencies...
npm install

echo.
echo Clean installation complete!
pause
