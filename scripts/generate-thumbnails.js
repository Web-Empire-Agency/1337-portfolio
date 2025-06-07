import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import https from 'https';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the directories exist
const publicDir = path.join(process.cwd(), 'public');
const videosDir = path.join(publicDir, 'videos');
const thumbnailsDir = path.join(publicDir, 'thumbnails');

[publicDir, videosDir, thumbnailsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Function to download video from URL
async function downloadVideo(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
}

// Function to generate thumbnail from video
async function generateThumbnail(videoPath, outputPath) {
  try {
    // Extract first frame from video
    await execAsync(`ffmpeg -i "${videoPath}" -ss 00:30:00 -vframes 1 "${outputPath}"`);
    console.log(`Generated thumbnail for ${videoPath}`);
  } catch (error) {
    console.error(`Error generating thumbnail for ${videoPath}:`, error);
  }
}

// Main function to process videos from testimonial data
async function processVideos() {
  try {
    // Read the testimonial data
    const contentPath = path.join(process.cwd(), 'lib', 'content.ts');
    const content = fs.readFileSync(contentPath, 'utf8');
    
    // Extract video URLs using regex
    const videoUrlRegex = /videoUrl:\s*["']([^"']+)["']/g;
    const videoUrls = [...content.matchAll(videoUrlRegex)].map(match => match[1]);
    
    console.log('Found video URLs:', videoUrls);

    // Process each video URL
    for (const videoUrl of videoUrls) {
      try {
        // Generate a filename from the URL
        const videoName = path.basename(videoUrl);
        const videoPath = path.join(videosDir, videoName);
        const thumbnailName = `${path.parse(videoName).name}-thumb.jpg`;
        const thumbnailPath = path.join(thumbnailsDir, thumbnailName);

        // Download the video if it doesn't exist
        if (!fs.existsSync(videoPath)) {
          console.log(`Downloading video: ${videoUrl}`);
          await downloadVideo(videoUrl, videoPath);
        }

        // Generate thumbnail
        await generateThumbnail(videoPath, thumbnailPath);
      } catch (error) {
        console.error(`Error processing video ${videoUrl}:`, error);
      }
    }
  } catch (error) {
    console.error('Error reading testimonial data:', error);
  }
}

// Run the script
processVideos().catch(console.error); 