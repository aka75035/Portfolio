// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Scroll Animations ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// --- Three.js Dynamic Background ---
let scene, camera, renderer, stars, starGeo;
let mouseX = 0, mouseY = 0;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("bg-canvas"),
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    starGeo = new THREE.BufferGeometry();
    const starCount = 6000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 600;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    let sprite = new THREE.TextureLoader().load('https://placehold.co/16x16/ffffff/ffffff.png?text=+');
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite,
        transparent: true
    });

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
    // Animate particles
    starGeo.attributes.position.array.forEach((_, i) => {
        if (i % 3 === 2) { // z-coordinate
            starGeo.attributes.position.array[i] -= 0.2;
            if (starGeo.attributes.position.array[i] < -200) {
                starGeo.attributes.position.array[i] = 200;
            }
        }
    });
    starGeo.attributes.position.needsUpdate = true;
    stars.rotation.z += 0.0005;

    // Animate camera based on mouse
    camera.position.x += (mouseX * 0.00005 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.00005 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);


    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();
