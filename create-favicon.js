const sharp = require('sharp');
const fs = require('fs');

async function createFavicon() {
  try {
    // Read the source image
    const image = sharp('public/favicon-source.png');
    
    // Get metadata to find the face/center
    const metadata = await image.metadata();
    console.log('Image dimensions:', metadata.width, 'x', metadata.height);
    
    // Create a 512x512 favicon (we'll let the browser scale it down)
    await image
      .resize(512, 512, {
        fit: 'cover',
        position: 'center'
      })
      .toFile('public/favicon.png');
    
    console.log('✅ Created favicon.png (512x512)');
    
    // Also create a 32x32 version for .ico
    await sharp('public/favicon.png')
      .resize(32, 32)
      .toFile('public/favicon.ico');
    
    console.log('✅ Created favicon.ico (32x32)');
    
    // Create apple-touch-icon
    await sharp('public/favicon.png')
      .resize(180, 180)
      .toFile('public/apple-touch-icon.png');
    
    console.log('✅ Created apple-touch-icon.png (180x180)');
    
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();
