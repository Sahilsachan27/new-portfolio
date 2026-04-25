const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk(dir, function(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Background replacement
    content = content.replace(/#F1F5F9/gi, '#F6F7F4'); 
    content = content.replace(/bg-\[#F1F5F9\]/g, 'bg-[#F6F7F4]');
    content = content.replace(/via-\[#F1F5F9\]/g, 'via-[#F6F7F4]');
    content = content.replace(/to-\[#F1F5F9\]/g, 'to-[#F6F7F4]');
    content = content.replace(/from-\[#F1F5F9\]/g, 'from-[#F6F7F4]');

    // Section BG 
    content = content.replace(/#E2E8F0/gi, '#E7E9E4');
    content = content.replace(/bg-\[#E2E8F0\]/g, 'bg-[#E7E9E4]');

    if (!filePath.endsWith('.css')) {
      // Update text color
      content = content.replace(/#0F172A/gi, '#1F2933'); 
      content = content.replace(/text-slate-900/g, 'text-[#1F2933]'); 
      
      // Update tailwind classes contextually
      // Actually, since I hardcoded some classes earlier, to avoid messing up remaining normal utility classes,
      // I'll swap violet/purple with green/emerald where they might still exist
      content = content.replace(/purple-/g, 'emerald-'); 
      content = content.replace(/violet-/g, 'green-'); 
    }

    // Hex values
    content = content.replace(/#6D28D9/gi, '#6B8E23'); // Primary
    content = content.replace(/#5b21b6/gi, '#556B2F'); // Primary dark 
    content = content.replace(/#8B5CF6/gi, '#84A98C'); // Accent
    content = content.replace(/#7c3aed/gi, '#52796F'); // Accent dark 
    content = content.replace(/#A78BFA/gi, '#CAD2C5'); // Highlight

    // rgb values
    content = content.replace(/rgba\(109, 40, 217/g, 'rgba(107, 142, 35');
    content = content.replace(/rgba\(109,40,217/g, 'rgba(107,142,35');
    content = content.replace(/rgba\(139, 92, 246/g, 'rgba(132, 169, 140');
    content = content.replace(/rgba\(139,92,246/g, 'rgba(132,169,140');
    
    // Glass BG to Section BG 
    content = content.replace(/rgba\(226, 232, 240/g, 'rgba(231, 233, 228');
    content = content.replace(/rgba\(226,232,240/g, 'rgba(231,233,228');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
