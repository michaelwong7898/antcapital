// ==================== SVG Placeholder Generator ====================
// Generates themed placeholder images for each project card
// Replace these with real AI-generated images when available

function generateProjectImages() {
  const images = {
    'hero': createHeroSVG(),
    'battery': createBatterySVG(),
    'robot': createRobotSVG(),
    'genomics': createGenomicsSVG(),
    'smartcity': createSmartCitySVG()
  };
  
  return images;
}

function createHeroSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
    <defs>
      <linearGradient id="sky" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0a0a2e;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#1a1a3e;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0d0d1a;stop-opacity:1" />
      </linearGradient>
      <radialGradient id="glow1" cx="30%" cy="60%" r="40%">
        <stop offset="0%" style="stop-color:#C9A84C;stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:#C9A84C;stop-opacity:0" />
      </radialGradient>
      <radialGradient id="glow2" cx="75%" cy="50%" r="35%">
        <stop offset="0%" style="stop-color:#C9A84C;stop-opacity:0.2" />
        <stop offset="100%" style="stop-color:#C9A84C;stop-opacity:0" />
      </radialGradient>
      <linearGradient id="bridge" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" style="stop-color:#C9A84C;stop-opacity:0.6" />
        <stop offset="50%" style="stop-color:#E8D48B;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#C9A84C;stop-opacity:0.4" />
      </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <rect width="1920" height="1080" fill="url(#glow1)"/>
    <rect width="1920" height="1080" fill="url(#glow2)"/>
    <!-- Dubai skyline silhouette (left) -->
    <g opacity="0.4" fill="#1a1a3e">
      <rect x="80" y="520" width="60" height="460" rx="2"/>
      <rect x="160" y="380" width="45" height="600" rx="2"/>
      <rect x="220" y="450" width="70" height="530" rx="2"/>
      <rect x="310" y="300" width="35" height="680" rx="2"/>
      <rect x="360" y="260" width="50" height="720" rx="2"/>
      <rect x="430" y="340" width="55" height="640" rx="2"/>
      <rect x="500" y="420" width="40" height="560" rx="2"/>
      <rect x="560" y="480" width="65" height="500" rx="2"/>
    </g>
    <!-- Chinese skyline silhouette (right) -->
    <g opacity="0.4" fill="#1a1a3e">
      <rect x="1300" y="480" width="55" height="500" rx="2"/>
      <rect x="1370" y="360" width="40" height="620" rx="2"/>
      <rect x="1430" y="420" width="65" height="560" rx="2"/>
      <rect x="1510" y="290" width="50" height="690" rx="2"/>
      <rect x="1580" y="340" width="45" height="640" rx="2"/>
      <rect x="1640" y="400" width="70" height="580" rx="2"/>
      <rect x="1730" y="460" width="55" height="520" rx="2"/>
      <rect x="1800" y="380" width="40" height="600" rx="2"/>
    </g>
    <!-- Golden connection bridge -->
    <path d="M 620 600 Q 960 350 1300 580" stroke="url(#bridge)" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M 620 600 Q 960 320 1300 560" stroke="url(#bridge)" stroke-width="1" fill="none" opacity="0.3"/>
    <path d="M 620 600 Q 960 380 1300 600" stroke="url(#bridge)" stroke-width="1" fill="none" opacity="0.3"/>
    <!-- Dots on bridge -->
    <circle cx="700" cy="555" r="3" fill="#C9A84C" opacity="0.8"/>
    <circle cx="820" cy="460" r="3" fill="#C9A84C" opacity="0.8"/>
    <circle cx="960" cy="380" r="4" fill="#E8D48B" opacity="1"/>
    <circle cx="1100" cy="440" r="3" fill="#C9A84C" opacity="0.8"/>
    <circle cx="1220" cy="520" r="3" fill="#C9A84C" opacity="0.8"/>
    <!-- Stars -->
    <circle cx="200" cy="100" r="1" fill="#fff" opacity="0.6"/>
    <circle cx="500" cy="150" r="1" fill="#fff" opacity="0.4"/>
    <circle cx="800" cy="80" r="1.5" fill="#fff" opacity="0.5"/>
    <circle cx="1100" cy="120" r="1" fill="#fff" opacity="0.6"/>
    <circle cx="1400" cy="90" r="1" fill="#fff" opacity="0.3"/>
    <circle cx="1700" cy="130" r="1.5" fill="#fff" opacity="0.5"/>
    <circle cx="300" cy="200" r="0.8" fill="#fff" opacity="0.4"/>
    <circle cx="1600" cy="200" r="0.8" fill="#fff" opacity="0.3"/>
    <!-- Grid lines -->
    <line x1="0" y1="700" x2="1920" y2="700" stroke="#C9A84C" stroke-width="0.5" opacity="0.08"/>
    <line x1="0" y1="800" x2="1920" y2="800" stroke="#C9A84C" stroke-width="0.5" opacity="0.05"/>
    <line x1="0" y1="900" x2="1920" y2="900" stroke="#C9A84C" stroke-width="0.5" opacity="0.03"/>
  </svg>`;
}

function createBatterySVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <radialGradient id="bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" style="stop-color:#0f1a0f;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
      </radialGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="40%">
        <stop offset="0%" style="stop-color:#22C55E;stop-opacity:0.15" />
        <stop offset="100%" style="stop-color:#22C55E;stop-opacity:0" />
      </radialGradient>
      <linearGradient id="cell" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#1a2a1a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0d1a0d;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#bg)"/>
    <rect width="800" height="500" fill="url(#glow)"/>
    <!-- Battery body -->
    <rect x="260" y="120" width="280" height="180" rx="12" fill="url(#cell)" stroke="#22C55E" stroke-width="1.5" opacity="0.8"/>
    <rect x="540" y="185" width="30" height="50" rx="6" fill="#1a2a1a" stroke="#22C55E" stroke-width="1" opacity="0.6"/>
    <!-- Energy layers -->
    <rect x="275" y="135" width="250" height="30" rx="4" fill="#22C55E" opacity="0.15"/>
    <rect x="275" y="170" width="250" height="30" rx="4" fill="#22C55E" opacity="0.12"/>
    <rect x="275" y="205" width="250" height="30" rx="4" fill="#22C55E" opacity="0.09"/>
    <rect x="275" y="240" width="250" height="30" rx="4" fill="#22C55E" opacity="0.06"/>
    <!-- Glow energy particles -->
    <circle cx="320" cy="160" r="2" fill="#22C55E" opacity="0.8"/>
    <circle cx="380" cy="190" r="3" fill="#4ADE80" opacity="0.6"/>
    <circle cx="450" cy="150" r="2" fill="#22C55E" opacity="0.7"/>
    <circle cx="420" cy="230" r="2.5" fill="#4ADE80" opacity="0.5"/>
    <circle cx="350" cy="250" r="1.5" fill="#22C55E" opacity="0.6"/>
    <circle cx="480" cy="210" r="2" fill="#22C55E" opacity="0.7"/>
    <!-- Circuit lines -->
    <line x1="100" y1="350" x2="700" y2="350" stroke="#22C55E" stroke-width="0.5" opacity="0.15"/>
    <line x1="100" y1="370" x2="700" y2="370" stroke="#22C55E" stroke-width="0.3" opacity="0.1"/>
    <circle cx="200" cy="350" r="3" fill="#22C55E" opacity="0.3"/>
    <circle cx="400" cy="350" r="3" fill="#22C55E" opacity="0.3"/>
    <circle cx="600" cy="350" r="3" fill="#22C55E" opacity="0.3"/>
    <!-- Data text overlay -->
    <text x="100" y="420" fill="#22C55E" opacity="0.2" font-family="monospace" font-size="11">EV Charging Network // 50+ Stations Planned // Government Partnerships Secured</text>
    <text x="100" y="440" fill="#22C55E" opacity="0.15" font-family="monospace" font-size="10">Revenue Model: Charging + Ads // Tier 2-3 Expansion // ¥800万 Series A</text>
  </svg>`;
}

function createRobotSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <radialGradient id="bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" style="stop-color:#0f0f2a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
      </radialGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="45%">
        <stop offset="0%" style="stop-color:#818CF8;stop-opacity:0.12" />
        <stop offset="100%" style="stop-color:#818CF8;stop-opacity:0" />
      </radialGradient>
    </defs>
    <rect width="800" height="500" fill="url(#bg)"/>
    <rect width="800" height="500" fill="url(#glow)"/>
    <!-- Robot arm -->
    <g transform="translate(250, 100)" opacity="0.7">
      <rect x="200" y="50" width="40" height="120" rx="8" fill="#1a1a3e" stroke="#818CF8" stroke-width="1"/>
      <rect x="180" y="170" width="80" height="30" rx="6" fill="#1a1a3e" stroke="#818CF8" stroke-width="1"/>
      <rect x="160" y="200" width="40" height="100" rx="8" fill="#1a1a3e" stroke="#818CF8" stroke-width="1" transform="rotate(-15, 180, 200)"/>
      <circle cx="180" cy="170" r="15" fill="#1a1a3e" stroke="#818CF8" stroke-width="1"/>
    </g>
    <!-- AI neural network lines -->
    <g opacity="0.2" stroke="#818CF8" stroke-width="0.5">
      <line x1="100" y1="80" x2="250" y2="150"/>
      <line x1="250" y1="150" x2="400" y2="100"/>
      <line x1="400" y1="100" x2="550" y2="180"/>
      <line x1="550" y1="180" x2="700" y2="120"/>
      <line x1="150" y1="200" x2="350" y2="250"/>
      <line x1="350" y1="250" x2="500" y2="200"/>
      <line x1="500" y1="200" x2="650" y2="280"/>
    </g>
    <!-- Network nodes -->
    <circle cx="100" cy="80" r="4" fill="#818CF8" opacity="0.5"/>
    <circle cx="250" cy="150" r="5" fill="#818CF8" opacity="0.6"/>
    <circle cx="400" cy="100" r="4" fill="#A5B4FC" opacity="0.5"/>
    <circle cx="550" cy="180" r="5" fill="#818CF8" opacity="0.6"/>
    <circle cx="700" cy="120" r="4" fill="#818CF8" opacity="0.4"/>
    <circle cx="150" cy="200" r="3" fill="#818CF8" opacity="0.4"/>
    <circle cx="350" cy="250" r="4" fill="#A5B4FC" opacity="0.5"/>
    <circle cx="500" cy="200" r="3" fill="#818CF8" opacity="0.4"/>
    <circle cx="650" cy="280" r="4" fill="#818CF8" opacity="0.5"/>
    <!-- Scan lines -->
    <g opacity="0.08">
      <line x1="50" y1="350" x2="750" y2="350" stroke="#818CF8" stroke-width="0.5"/>
      <line x1="50" y1="370" x2="750" y2="370" stroke="#818CF8" stroke-width="0.3"/>
      <line x1="50" y1="390" x2="750" y2="390" stroke="#818CF8" stroke-width="0.5"/>
    </g>
    <!-- Data overlay -->
    <text x="80" y="420" fill="#818CF8" opacity="0.2" font-family="monospace" font-size="11">AI Supply Chain SaaS // 80+ Customers // 150% YoY Growth</text>
    <text x="80" y="440" fill="#818CF8" opacity="0.15" font-family="monospace" font-size="10">Demand Forecasting // Inventory Optimization // ¥1,500万 Series A</text>
  </svg>`;
}

function createGenomicsSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <radialGradient id="bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" style="stop-color:#1a0a1a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
      </radialGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="40%">
        <stop offset="0%" style="stop-color:#EC4899;stop-opacity:0.1" />
        <stop offset="100%" style="stop-color:#EC4899;stop-opacity:0" />
      </radialGradient>
    </defs>
    <rect width="800" height="500" fill="url(#bg)"/>
    <rect width="800" height="500" fill="url(#glow)"/>
    <!-- DNA Double Helix -->
    <g opacity="0.5">
      <path d="M 300 50 Q 500 125 300 200 Q 100 275 300 350 Q 500 425 300 500" stroke="#EC4899" stroke-width="2" fill="none"/>
      <path d="M 500 50 Q 300 125 500 200 Q 700 275 500 350 Q 300 425 500 500" stroke="#C9A84C" stroke-width="2" fill="none"/>
      <!-- Cross bars -->
      <line x1="335" y1="75" x2="465" y2="75" stroke="#EC4899" stroke-width="1" opacity="0.3"/>
      <line x1="365" y1="125" x2="435" y2="125" stroke="#C9A84C" stroke-width="1" opacity="0.3"/>
      <line x1="385" y1="175" x2="415" y2="175" stroke="#EC4899" stroke-width="1" opacity="0.3"/>
      <line x1="335" y1="225" x2="465" y2="225" stroke="#C9A84C" stroke-width="1" opacity="0.3"/>
      <line x1="300" y1="275" x2="500" y2="275" stroke="#EC4899" stroke-width="1" opacity="0.3"/>
      <line x1="335" y1="325" x2="465" y2="325" stroke="#C9A84C" stroke-width="1" opacity="0.3"/>
      <line x1="385" y1="375" x2="415" y2="375" stroke="#EC4899" stroke-width="1" opacity="0.3"/>
      <line x1="335" y1="425" x2="465" y2="425" stroke="#C9A84C" stroke-width="1" opacity="0.3"/>
    </g>
    <!-- Floating particles -->
    <circle cx="150" cy="120" r="3" fill="#EC4899" opacity="0.4"/>
    <circle cx="650" cy="150" r="2" fill="#C9A84C" opacity="0.5"/>
    <circle cx="100" cy="300" r="2.5" fill="#EC4899" opacity="0.3"/>
    <circle cx="700" cy="280" r="3" fill="#C9A84C" opacity="0.4"/>
    <circle cx="180" cy="400" r="2" fill="#EC4899" opacity="0.3"/>
    <circle cx="620" cy="380" r="2.5" fill="#C9A84C" opacity="0.3"/>
    <!-- Molecular bonds -->
    <g opacity="0.15" stroke="#EC4899" stroke-width="0.5">
      <line x1="80" y1="180" x2="180" y2="160"/>
      <line x1="620" y1="200" x2="720" y2="220"/>
      <line x1="100" y1="350" x2="200" y2="330"/>
      <line x1="600" y1="330" x2="700" y2="350"/>
    </g>
    <!-- Data overlay -->
    <text x="60" y="470" fill="#EC4899" opacity="0.2" font-family="monospace" font-size="11">Community Healthcare Chain // 12 Clinics // Chronic Disease Focus</text>
    <text x="60" y="490" fill="#EC4899" opacity="0.15" font-family="monospace" font-size="10">Revenue: ¥2,000万/year // Profitable Since Y2 // ¥1,200万 Growth Round</text>
  </svg>`;
}

function createSmartCitySVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <radialGradient id="bg" cx="50%" cy="60%" r="65%">
        <stop offset="0%" style="stop-color:#1a150a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
      </radialGradient>
      <radialGradient id="glow" cx="50%" cy="70%" r="50%">
        <stop offset="0%" style="stop-color:#FB923C;stop-opacity:0.12" />
        <stop offset="100%" style="stop-color:#FB923C;stop-opacity:0" />
      </radialGradient>
    </defs>
    <rect width="800" height="500" fill="url(#bg)"/>
    <rect width="800" height="500" fill="url(#glow)"/>
    <!-- City buildings -->
    <g opacity="0.35" fill="#1a150a">
      <rect x="100" y="280" width="50" height="180"/>
      <rect x="170" y="220" width="40" height="240"/>
      <rect x="230" y="300" width="60" height="160"/>
      <rect x="310" y="180" width="45" height="280"/>
      <rect x="375" y="250" width="55" height="210"/>
      <rect x="450" y="200" width="40" height="260"/>
      <rect x="510" y="270" width="50" height="190"/>
      <rect x="580" y="230" width="45" height="230"/>
      <rect x="645" y="290" width="55" height="170"/>
    </g>
    <!-- Window lights -->
    <g fill="#FB923C" opacity="0.3">
      <rect x="315" y="200" width="4" height="4" rx="1"/>
      <rect x="325" y="220" width="4" height="4" rx="1"/>
      <rect x="335" y="200" width="4" height="4" rx="1"/>
      <rect x="315" y="260" width="4" height="4" rx="1"/>
      <rect x="455" y="220" width="4" height="4" rx="1"/>
      <rect x="465" y="250" width="4" height="4" rx="1"/>
      <rect x="175" y="240" width="4" height="4" rx="1"/>
      <rect x="185" y="260" width="4" height="4" rx="1"/>
      <rect x="585" y="250" width="4" height="4" rx="1"/>
      <rect x="595" y="270" width="4" height="4" rx="1"/>
    </g>
    <!-- IoT connection network -->
    <g opacity="0.25" stroke="#FB923C" stroke-width="0.8">
      <line x1="200" y1="350" x2="400" y2="320"/>
      <line x1="400" y1="320" x2="600" y2="340"/>
      <line x1="400" y1="320" x2="350" y2="200"/>
      <line x1="400" y1="320" x2="460" y2="220"/>
      <line x1="200" y1="350" x2="150" y2="250"/>
      <line x1="600" y1="340" x2="650" y2="260"/>
      <line x1="350" y1="200" x2="250" y2="150"/>
      <line x1="460" y1="220" x2="550" y2="170"/>
    </g>
    <!-- Network nodes -->
    <circle cx="200" cy="350" r="5" fill="#FB923C" opacity="0.5"/>
    <circle cx="400" cy="320" r="6" fill="#E8D48B" opacity="0.7"/>
    <circle cx="600" cy="340" r="5" fill="#FB923C" opacity="0.5"/>
    <circle cx="350" cy="200" r="4" fill="#FB923C" opacity="0.4"/>
    <circle cx="460" cy="220" r="4" fill="#FB923C" opacity="0.4"/>
    <circle cx="150" cy="250" r="3" fill="#FB923C" opacity="0.3"/>
    <circle cx="650" cy="260" r="3" fill="#FB923C" opacity="0.3"/>
    <circle cx="250" cy="150" r="3" fill="#FB923C" opacity="0.3"/>
    <circle cx="550" cy="170" r="3" fill="#FB923C" opacity="0.3"/>
    <!-- Data overlay -->
    <text x="60" y="440" fill="#FB923C" opacity="0.2" font-family="monospace" font-size="11">Smart Agriculture IoT // 50+ Farm Deployments // Greenhouse Analytics</text>
    <text x="60" y="460" fill="#FB923C" opacity="0.15" font-family="monospace" font-size="10">Sensors + AI Platform // Gov Subsidies Eligible // ¥500万 Series A</text>
  </svg>`;
}

// ==================== Apply Images to DOM ====================
document.addEventListener('DOMContentLoaded', () => {
  // Generate hero background
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const heroBg = document.createElement('div');
    heroBg.className = 'hero-svg-bg';
    heroBg.innerHTML = createHeroSVG();
    heroBg.querySelector('svg').style.width = '100%';
    heroBg.querySelector('svg').style.height = '100%';
    heroBg.querySelector('svg').style.objectFit = 'cover';
    heroBg.style.position = 'absolute';
    heroBg.style.top = '0';
    heroBg.style.left = '0';
    heroBg.style.width = '100%';
    heroBg.style.height = '100%';
    heroBg.style.opacity = '0.4';
    heroBg.style.zIndex = '0';
    heroSection.insertBefore(heroBg, heroSection.firstChild);
  }
  
  // Generate project card images
  const projectCards = document.querySelectorAll('.project-card');
  const svgGenerators = [createBatterySVG, createRobotSVG, createGenomicsSVG, createSmartCitySVG];
  
  projectCards.forEach((card, index) => {
    if (svgGenerators[index]) {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'project-img';
      imgContainer.innerHTML = svgGenerators[index]();
      const svg = imgContainer.querySelector('svg');
      svg.style.width = '100%';
      svg.style.height = '100%';
      svg.style.objectFit = 'cover';
      svg.style.display = 'block';
      
      // Insert after header, before name
      const header = card.querySelector('.project-header');
      if (header && header.nextSibling) {
        card.insertBefore(imgContainer, header.nextSibling);
      }
    }
  });
});
