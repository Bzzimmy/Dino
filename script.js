document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', generateDinosaur);
    
    // Generate a dinosaur when the page loads
    generateDinosaur();
});

function generateDinosaur() {
    // Reset previous dinosaur
    resetDinosaur();
    
    // Generate random properties
    const bodyColor = getRandomColor();
    const features = getRandomFeatures();
    const dinoName = generateDinoName();
    const dinoDescription = generateDescription(features, bodyColor);
    
    // Apply dinosaur properties
    applyColor(bodyColor);
    applyFeatures(features);
    
    // Update dinosaur info
    document.getElementById('dino-name').textContent = dinoName;
    document.getElementById('dino-description').textContent = dinoDescription;
}

function resetDinosaur() {
    // Reset color classes
    const dinoParts = document.querySelectorAll('.dino-head, .dino-body, .dino-leg, .dino-tail');
    const colorClasses = ['green', 'blue', 'purple', 'orange', 'red', 'yellow', 'cyan'];
    
    dinoParts.forEach(part => {
        colorClasses.forEach(color => {
            part.classList.remove(color);
        });
    });
    
    // Reset features
    const features = document.querySelectorAll('.dino-feature');
    features.forEach(feature => {
        feature.className = 'dino-feature';
        feature.style.opacity = 0;
        
        // Remove any spans created for features
        while (feature.firstChild) {
            feature.removeChild(feature.firstChild);
        }
    });
}

function getRandomColor() {
    const colors = ['green', 'blue', 'purple', 'orange', 'red', 'yellow', 'cyan'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function applyColor(color) {
    const dinoParts = document.querySelectorAll('.dino-head, .dino-body, .dino-leg, .dino-tail');
    dinoParts.forEach(part => {
        part.classList.add(color);
    });
}

function getRandomFeatures() {
    const allFeatures = ['spikes', 'horns', 'wings', 'armor', 'long-neck'];
    const numFeatures = Math.floor(Math.random() * 3) + 1; // 1-3 features
    const selectedFeatures = [];
    
    // Select random features
    while (selectedFeatures.length < numFeatures && allFeatures.length > 0) {
        const randomIndex = Math.floor(Math.random() * allFeatures.length);
        const feature = allFeatures.splice(randomIndex, 1)[0];
        selectedFeatures.push(feature);
    }
    
    return selectedFeatures;
}

function applyFeatures(features) {
    const feature1 = document.getElementById('feature1');
    const feature2 = document.getElementById('feature2');
    
    // Apply first feature
    if (features.length > 0) {
        feature1.classList.add(features[0]);
        
        // Add span for spikes or armor features
        if (features[0] === 'spikes' || features[0] === 'armor') {
            const span = document.createElement('span');
            feature1.appendChild(span);
        }
        
        feature1.style.opacity = 1;
    }
    
    // Apply second feature
    if (features.length > 1) {
        feature2.classList.add(features[1]);
        
        // Add span for spikes or armor features
        if (features[1] === 'spikes' || features[1] === 'armor') {
            const span = document.createElement('span');
            feature2.appendChild(span);
        }
        
        feature2.style.opacity = 1;
    }
}

function generateDinoName() {
    const prefixes = ['Mega', 'Ultra', 'Super', 'Giga', 'Hyper', 'Neo', 'Techno', 'Quantum', 'Cyber', 'Fusion'];
    const roots = ['rex', 'raptor', 'saur', 'dactyl', 'ceratops', 'titan', 'don', 'stego', 'pod', 'tops'];
    const suffixes = ['us', 'ius', 'or', 'ax', 'on', 'osaurus', 'otron', 'inator', 'atron', 'oid'];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const root = roots[Math.floor(Math.random() * roots.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    // 50% chance to include a prefix
    const usesPrefix = Math.random() > 0.5;
    
    return usesPrefix 
        ? prefix + root + suffix 
        : root.charAt(0).toUpperCase() + root.slice(1) + suffix;
}

function generateDescription(features, color) {
    const habitats = ['tropical forests', 'mountains', 'deserts', 'swamps', 'plains', 'tundra', 'volcanic regions', 'coastal areas'];
    const diets = ['herbivore', 'carnivore', 'omnivore', 'insectivore'];
    const behaviors = ['docile', 'aggressive', 'protective', 'territorial', 'social', 'solitary'];
    
    const habitat = habitats[Math.floor(Math.random() * habitats.length)];
    const diet = diets[Math.floor(Math.random() * diets.length)];
    const behavior = behaviors[Math.floor(Math.random() * behaviors.length)];
    
    let featureDesc = '';
    if (features.includes('spikes')) {
        featureDesc += ' Its spikes provide excellent defense against predators.';
    }
    if (features.includes('horns')) {
        featureDesc += ' The distinctive horns are used for display and combat.';
    }
    if (features.includes('wings')) {
        featureDesc += ' Though not capable of true flight, its wings help with balance and short glides.';
    }
    if (features.includes('armor')) {
        featureDesc += ' Heavily armored plates protect it from attacks.';
    }
    if (features.includes('long-neck')) {
        featureDesc += ' Its long neck allows it to reach vegetation high in trees.';
    }
    
    const colorTraits = {
        'green': 'excellent camouflage in vegetation',
        'blue': 'stunning appearance for attracting mates',
        'purple': 'warning coloration that signals its toxic skin',
        'orange': 'heat regulation in varying temperatures',
        'red': 'intimidation displays during confrontations',
        'yellow': 'bright visibility to warn predators',
        'cyan': 'unique bioluminescent properties'
    };
    
    const colorTrait = colorTraits[color];
    
    return `A ${behavior} ${diet} that inhabits ${habitat}.${featureDesc} Its ${color} coloration provides ${colorTrait}.`;
} 