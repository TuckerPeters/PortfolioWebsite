import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to copy a file
function copyFile(source, target) {
    // Ensure the target directory exists
    const targetDir = path.dirname(target);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Copy the file
    fs.copyFileSync(source, target);
    console.log(`Copied: ${source} -> ${target}`);
}

// Function to copy all files in a directory
function copyDir(sourceDir, targetDir) {
    // Create the target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Read the directory contents
    const files = fs.readdirSync(sourceDir);
    
    // Copy each file
    files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);
        
        const stats = fs.statSync(sourcePath);
        
        if (stats.isDirectory()) {
            // Recursively copy subdirectories
            copyDir(sourcePath, targetPath);
        } else {
            // Copy the file
            copyFile(sourcePath, targetPath);
        }
    });
}

// Main execution
console.log('Copying photos to public directory...');
copyDir(path.resolve(__dirname, 'photos'), path.resolve(__dirname, 'public/photos'));
console.log('Done!');