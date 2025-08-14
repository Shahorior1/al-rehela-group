// Image Update Helper Script for Al Rehela Group Website
// Run this script in browser console after adding your custom images

const imageReplacements = {
    // General Images
    'hero-collage': 'images/general/hero-collage.jpg',
    'construction-banner': 'images/general/construction-banner.jpg',
    'construction-worker': 'images/general/construction-worker.png',
    'location-map': 'images/general/map.jpg',
    
    // Service Images
    'manpower-supply': 'images/services/manpower-supply.jpg',
    'gypsum-installation': 'images/services/gypsum-installation.jpg',
    'interior-design': 'images/services/interior-design.jpg',
    'electrical-works': 'images/services/electrical-works.jpg',
    'civil-works': 'images/services/civil-works.jpg',
    'aluminum-works': 'images/services/aluminum-works.jpg',
    'painting-works': 'images/services/painting-works.jpg',
    'materials-supply': 'images/services/materials-supply.jpg',
    'tiles-marble-fixing': 'images/services/tiles-marble-fixing.jpg',
    'steel-works': 'images/services/steel-works.jpg',
    'plastering': 'images/services/plastering.jpg',
    'cleaning': 'images/services/cleaning.jpg',
    
    // Project Images
    'project1': 'images/projects/project1.jpg',
    'project2': 'images/projects/project2.jpg',
    'project3': 'images/projects/project3.jpg',
    'project4': 'images/projects/project4.jpg',
    'project5': 'images/projects/project5.jpg',
    'project6': 'images/projects/project6.jpg',
    
    // Team Images
    'ahmed-hamoud': 'images/team/ahmed-hamoud.jpg',
    'md-hossain': 'images/team/md-hossain.jpg',
    'md-abdul-azim': 'images/team/md-abdul-azim.jpg',
    'md-hassan': 'images/team/md-hassan.jpg',
    'fayh-uddin': 'images/team/fayh-uddin.jpg',
    'mfian-ahmed': 'images/team/mfian-ahmed.jpg'
};

// Function to replace SVG placeholders with actual images
function replaceWithCustomImages() {
    const images = document.querySelectorAll('img');
    let replacedCount = 0;
    
    images.forEach(img => {
        // Check if this is an SVG placeholder
        if (img.src.includes('data:image/svg+xml')) {
            const alt = img.alt.toLowerCase();
            
            // Try to match alt text with our image mappings
            for (const [key, path] of Object.entries(imageReplacements)) {
                if (alt.includes(key.replace('-', ' ')) || 
                    alt.includes(key.replace('-', '')) ||
                    img.className.includes(key)) {
                    
                    // Check if the image file exists before replacing
                    const testImg = new Image();
                    testImg.onload = function() {
                        img.src = path;
                        img.style.opacity = '1';
                        console.log(`✅ Replaced: ${alt} -> ${path}`);
                        replacedCount++;
                    };
                    testImg.onerror = function() {
                        console.log(`❌ Image not found: ${path}`);
                    };
                    testImg.src = path;
                    break;
                }
            }
        }
    });
    
    setTimeout(() => {
        console.log(`🎉 Total images replaced: ${replacedCount}`);
    }, 2000);
}

// Auto-replace images when script loads
if (typeof window !== 'undefined') {
    console.log('🖼️ Al Rehela Group Image Replacer Ready!');
    console.log('📋 Add your images to the folders and run: replaceWithCustomImages()');
}

// Manual replacement function
window.replaceWithCustomImages = replaceWithCustomImages;

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { imageReplacements, replaceWithCustomImages };
}
