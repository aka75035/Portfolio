// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// --- Terminal Typing Animation ---
const commandEl = document.getElementById('command');
const commandCursor = document.getElementById('command-cursor');
const terminalOutput = document.getElementById('terminal-output');
const aboutTextEl = document.getElementById('about-text');
const textCursor = document.getElementById('text-cursor');

const commandToType = "./describe-akash.sh";
const textToType = `Hello! I'm Akash Yadav, a passionate developer with a love for building beautiful, functional, and dynamic web experiences.\n\nI specialize in modern JavaScript frameworks and enjoy bringing ideas to life in the browser. From crafting elegant UIs to architecting robust back-end systems, I'm always eager to learn and tackle new challenges.`;
let aboutAnimationStarted = false;

function typeWriter(text, element, speed, onComplete) {
    let i = 0;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (onComplete) {
            onComplete();
        }
    }
    type();
}

function startAboutAnimation() {
    if (aboutAnimationStarted) return;
    aboutAnimationStarted = true;

    typeWriter(commandToType, commandEl, 100, () => {
        commandCursor.style.display = 'none';
        terminalOutput.classList.add('visible');
        textCursor.classList.remove('hidden');

        typeWriter(textToType, aboutTextEl, 50, () => {
            textCursor.style.display = 'none';
        });
    });
}

// --- Scroll Animations ---
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const scrollAnimateEl = entry.target.querySelector('.scroll-animate');
            if (scrollAnimateEl) {
                scrollAnimateEl.classList.add('visible');
            }
            
            if (entry.target.id === 'about') {
                startAboutAnimation();
            }
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    sectionObserver.observe(section);
});


// --- Gemini API Integration ---
const getIdeasBtn = document.getElementById('getIdeasBtn');
const aiModal = document.getElementById('aiModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');

getIdeasBtn.addEventListener('click', async () => {
    aiModal.style.display = 'flex';
    modalBody.innerHTML = '<div class="text-center"><h2 class="text-3xl font-bold text-pink-400 mb-4">Generating Ideas...</h2><div class="loader"></div><p class="text-gray-400">The AI is thinking of some cool projects for you!</p></div>';
    getIdeasBtn.disabled = true;

    const prompt = `I am a creative developer named Akash Yadav. My skills include modern JavaScript frameworks (React, Vue.js), full-stack development (Node.js), data visualization (D3.js), and real-time technologies (WebSockets, Firebase). My portfolio already includes: 1. An E-Commerce Platform, 2. A Data Visualization Dashboard, 3. A Collaborative Task Manager. Based on this profile, suggest 3 new, innovative, and impressive project ideas for my portfolio. For each idea, provide a catchy title and a 2-3 sentence description explaining the concept and the technologies that could be used. Format the output clearly.`;
    const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
        const result = await response.json();
        if (result.candidates && result.candidates[0].content.parts[0].text) {
            let text = result.candidates[0].content.parts[0].text;
            text = text.replace(/\*\*(.*?)\*\*/g, '<h3 class="text-2xl font-bold text-pink-400 mt-6 mb-2">$1</h3>');
            text = text.replace(/\n/g, '<br>');
            modalBody.innerHTML = `<h2 class="text-3xl font-bold text-center mb-6">✨ AI Project Suggestions</h2>${text}`;
        } else {
            throw new Error("Invalid response structure from API.");
        }
    } catch (error) {
        console.error("Gemini API call failed:", error);
        modalBody.innerHTML = '<h2 class="text-2xl font-bold text-red-500">Error</h2><p>Sorry, something went wrong while generating ideas. Please try again later.</p>';
    } finally {
        getIdeasBtn.disabled = false;
    }
});

// --- Modal Control ---
function closeModal() { aiModal.style.display = 'none'; }
closeModalBtn.addEventListener('click', closeModal);
aiModal.addEventListener('click', (event) => { if (event.target === aiModal) closeModal(); });

// --- Three.js Dynamic Background ---
let scene, camera, renderer, stars, starGeo;
let mouseX = 0, mouseY = 0;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg-canvas"), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    starGeo = new THREE.BufferGeometry();
    const starCount = 6000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 600;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    let sprite = new THREE.TextureLoader().load('https://placehold.co/16x16/ffffff/ffffff.png?text=+');
    let starMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.7, map: sprite, transparent: true });
    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);
    window.addEventListener("resize", onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouseX = event.clientX - window.innerWidth / 2;
    mouseY = event.clientY - window.innerHeight / 2;
}

function animate() {
    starGeo.attributes.position.array.forEach((_, i) => {
        if (i % 3 === 2) { 
            starGeo.attributes.position.array[i] -= 0.2;
            if (starGeo.attributes.position.array[i] < -200) {
                starGeo.attributes.position.array[i] = 200;
            }
        }
    });
    starGeo.attributes.position.needsUpdate = true;
    stars.rotation.z += 0.0005;
    camera.position.x += (mouseX * 0.00005 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.00005 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();
