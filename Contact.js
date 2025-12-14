// NEON BLACK CONTACT PAGE - JAVASCRIPT
document.addEventListener('DOMContentLoaded', function() {
    
    // Create floating matrix particles
    createParticles();
    
    // Form submission handler
    handleFormSubmission();
    
    // Add hover glitch effects
    addGlitchEffects();
});

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesContainer.appendChild(particle);
    }
}

function openChat() {
    alert('🔥 LIVE CHAT OPENED!\n\nWelcome to Neon Support Matrix\nType your message below...\n\n(Integrate Tidio/Intercom here for production)');
}

function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.send-btn');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const method = document.getElementById('method').value;
        
        // Animate transmission
        submitBtn.innerHTML = 'TRANSMITTING...';
        submitBtn.style.background = 'linear-gradient(45deg, #ff00ff, #ff6600)';
        submitBtn.style.boxShadow = '0 0 50px #ff00ff';
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.innerHTML = '✓ SIGNAL SENT SUCCESS';
            submitBtn.style.background = 'linear-gradient(45deg, #00ff88, #00ccff)';
            submitBtn.style.boxShadow = '0 0 60px #00ff88';
            
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = 'TRANSMIT DATA';
                submitBtn.style.background = 'linear-gradient(45deg, #ff00ff, #00ff88)';
                submitBtn.style.boxShadow = '0 0 40px #ff00ff';
            }, 2500);
        }, 1500);
        
        console.log('Form submitted via:', method);
    });
}

function addGlitchEffects() {
    const glitchElements = document.querySelectorAll('.info-item, .btn, .neon-title');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch-anim 0.2s infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
}

// Method selector interaction
document.getElementById('method').addEventListener('change', function() {
    const method = this.value;
    document.querySelectorAll('.info-item').forEach(item => {
        item.style.boxShadow = '';
    });
    
    // Highlight selected method
    const selectedItem = document.querySelector(`.info-item:has(a[href*="${method}"]), .info-item:has([onclick*="Chat"])`);
    if(selectedItem) {
        selectedItem.style.boxShadow = '0 0 60px #00ff88, 0 0 100px #00ff88';
    }
});
