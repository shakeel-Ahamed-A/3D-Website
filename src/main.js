import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { validateRegistration } from './validation.js';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion) document.documentElement.classList.add('no-motion');

function initNexusScene() {
  const canvas = document.querySelector('#hero-canvas');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch {
    document.documentElement.classList.add('webgl-fallback');
    canvas.setAttribute('aria-label', 'Decorative Nexus core background. WebGL is unavailable in this browser.');
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  camera.position.z = 9;
  const coreGroup = new THREE.Group();
  coreGroup.position.set(0, 0.2, 0);
  scene.add(coreGroup);

  const solidMaterial = new THREE.MeshPhysicalMaterial({ color: 0x712cff, emissive: 0x16082e, roughness: 0.18, metalness: 0.32, transmission: 0.12, transparent: true, opacity: 0.64, flatShading: true });
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(2.15, 2), solidMaterial);
  coreGroup.add(core);

  const wireMaterial = new THREE.MeshBasicMaterial({ color: 0x67efff, wireframe: true, transparent: true, opacity: 0.58 });
  const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(2.31, 1), wireMaterial);
  coreGroup.add(wire);

  const innerMaterial = new THREE.MeshBasicMaterial({ color: 0xff2ee6, wireframe: true, transparent: true, opacity: 0.9 });
  const inner = new THREE.Mesh(new THREE.OctahedronGeometry(1.03, 0), innerMaterial);
  coreGroup.add(inner);

  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffd52e, transparent: true, opacity: 0.68 });
  [2.95, 3.45].forEach((radius, index) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012, 8, 150), index ? wireMaterial : ringMaterial);
    ring.rotation.x = Math.PI / 2 + index * 0.38;
    ring.rotation.y = index * 0.45;
    coreGroup.add(ring);
  });

  const particleCount = reducedMotion ? 180 : 560;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i += 1) {
    const radius = 5 + Math.random() * 13;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi) - 4;
  }
  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.03, transparent: true, opacity: 0.62 }));
  scene.add(particles);
  scene.add(new THREE.AmbientLight(0xffffff, 1.6));
  const cyanLight = new THREE.PointLight(0x2ee6ff, 35, 20); cyanLight.position.set(-4, 3, 5); scene.add(cyanLight);
  const pinkLight = new THREE.PointLight(0xff2ee6, 28, 20); pinkLight.position.set(4, -2, 4); scene.add(pinkLight);

  const rotation = { x: 0.18, y: 0.28 };
  const velocity = { x: 0, y: 0.002 };
  const pointer = { x: 0, y: 0 };
  let dragging = false;
  let previous = { x: 0, y: 0 };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width); const height = Math.max(1, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height, false);
    camera.aspect = width / height; camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  canvas.addEventListener('pointerdown', (event) => { dragging = true; previous = { x: event.clientX, y: event.clientY }; canvas.setPointerCapture(event.pointerId); });
  canvas.addEventListener('pointermove', (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    if (!dragging) return;
    velocity.y = (event.clientX - previous.x) * 0.003;
    velocity.x = (event.clientY - previous.y) * 0.003;
    previous = { x: event.clientX, y: event.clientY };
  });
  const stopDragging = () => { dragging = false; };
  canvas.addEventListener('pointerup', stopDragging); canvas.addEventListener('pointercancel', stopDragging);
  canvas.addEventListener('keydown', (event) => {
    const keys = { ArrowLeft: -0.16, ArrowRight: 0.16, ArrowUp: -0.16, ArrowDown: 0.16 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') rotation.y += keys[event.key]; else rotation.x += keys[event.key];
  });

  let frameId; let inViewport = true;
  const observer = new IntersectionObserver(([entry]) => { inViewport = entry.isIntersecting; if (inViewport && !frameId) render(); }, { threshold: 0 });
  observer.observe(canvas);
  function render() {
    frameId = undefined;
    if (!inViewport || document.hidden) return;
    if (!reducedMotion) {
      if (!dragging) { velocity.y += (0.002 - velocity.y) * 0.025; velocity.x *= 0.94; }
      rotation.y += velocity.y; rotation.x = THREE.MathUtils.clamp(rotation.x + velocity.x, -1, 1);
      particles.rotation.y += 0.0003;
    }
    coreGroup.rotation.set(rotation.x, rotation.y, 0);
    inner.rotation.set(-rotation.x * 1.6, -rotation.y * 1.4, rotation.y * 0.4);
    const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
    coreGroup.position.y = progress * -1.4;
    const viewportScale = window.innerWidth < 600 ? 0.72 : window.innerWidth < 900 ? 0.85 : 1;
    coreGroup.scale.setScalar(viewportScale * (1 - progress * 0.28));
    camera.position.x += (pointer.x * 0.55 - camera.position.x) * 0.035;
    camera.position.y += (-pointer.y * 0.35 - camera.position.y) * 0.035;
    camera.position.z = 9 + progress * 3;
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(render);
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden && inViewport && !frameId) render(); });
  render();
}

function initNavigation() {
  const header = document.querySelector('#site-header'); const menu = document.querySelector('#menu-toggle'); const nav = document.querySelector('#primary-nav');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); } });
  document.addEventListener('click', (event) => { if (!header.contains(event.target)) { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); } });
}

function initOrbit() {
  const label = document.querySelector('#orbit-label');
  document.querySelectorAll('.orbit-node').forEach((node) => node.addEventListener('click', () => {
    document.querySelectorAll('.orbit-node').forEach((item) => item.classList.remove('is-active'));
    node.classList.add('is-active'); label.textContent = node.dataset.track;
    if (!reducedMotion) gsap.fromTo('.orbit-core', { scale: 0.82, rotate: -8 }, { scale: 1, rotate: 0, duration: 0.55, ease: 'back.out(1.8)' });
  }));
}

function initCards() {
  if (!window.matchMedia('(hover: hover)').matches || reducedMotion) return;
  document.querySelectorAll('.track-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top;
      card.style.setProperty('--mx', `${(x / rect.width) * 100}%`); card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(850px) rotateX(${-(y / rect.height - 0.5) * 7}deg) rotateY(${(x / rect.width - 0.5) * 9}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

function activateSchedule(day, focus = false) {
  const tabs = [...document.querySelectorAll('.day-tab')]; const panels = [...document.querySelectorAll('.day-panel')];
  tabs.forEach((tab) => { const active = tab.dataset.day === day; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; if (active && focus) tab.focus(); });
  panels.forEach((panel) => { const active = panel.dataset.day === day; panel.classList.toggle('active', active); panel.hidden = !active; if (active && !reducedMotion) gsap.fromTo(panel.querySelectorAll('article'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.42, stagger: 0.07, ease: 'power2.out' }); });
}

function initSchedule() {
  const tabs = [...document.querySelectorAll('.day-tab')];
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateSchedule(tab.dataset.day));
    tab.addEventListener('keydown', (event) => { if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); let next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length; activateSchedule(tabs[next].dataset.day, true); });
  });
}

function storageAvailable() {
  try { const key = '__nexus_test__'; localStorage.setItem(key, key); localStorage.removeItem(key); return true; } catch { return false; }
}

function initRegistration() {
  const dialog = document.querySelector('#registration-dialog'); const form = document.querySelector('#registration-form'); const close = dialog.querySelector('.dialog-close'); const canStore = storageAvailable();
  const open = () => { if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', ''); form.elements.teamName.focus(); };
  const dismiss = () => { if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open'); };
  document.querySelectorAll('[data-open-registration]').forEach((button) => button.addEventListener('click', open)); close.addEventListener('click', dismiss);
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dismiss(); });
  form.addEventListener('input', (event) => { const field = event.target.closest('input,select'); if (!field) return; field.removeAttribute('aria-invalid'); const error = field.closest('label')?.querySelector('.field-error'); if (error) error.textContent = ''; form.querySelector('.form-status').textContent = ''; });
  form.addEventListener('submit', (event) => {
    event.preventDefault(); const values = Object.fromEntries(new FormData(form)); values.consent = form.elements.consent.checked;
    const result = validateRegistration(values); form.querySelectorAll('.field-error').forEach((error) => { error.textContent = ''; }); form.querySelectorAll('[aria-invalid]').forEach((field) => field.removeAttribute('aria-invalid'));
    if (!result.isValid) {
      Object.entries(result.errors).forEach(([name, message]) => { const field = form.elements[name]; field?.setAttribute('aria-invalid', 'true'); const target = name === 'consent' ? form.querySelector('.consent-error') : field?.closest('label')?.querySelector('.field-error'); if (target) target.textContent = message; });
      form.elements[Object.keys(result.errors)[0]]?.focus(); return;
    }
    if (canStore) localStorage.setItem('nexusRegistration', JSON.stringify({ ...result.data, savedAt: new Date().toISOString() }));
    form.querySelector('.form-status').textContent = canStore ? 'Registration saved on this device. You can safely close this window.' : 'Registration validated. Browser storage is unavailable, so the draft was not saved.';
    form.querySelector('.submit-button').textContent = 'Saved'; form.querySelector('.submit-button').disabled = true;
    window.setTimeout(() => { form.querySelector('.submit-button').textContent = 'Update registration'; form.querySelector('.submit-button').disabled = false; }, 1200);
  });
  if (canStore) {
    try { const saved = JSON.parse(localStorage.getItem('nexusRegistration')); if (saved && typeof saved === 'object') Object.entries(saved).forEach(([name, value]) => { if (form.elements[name] && name !== 'consent') form.elements[name].value = value; }); } catch { localStorage.removeItem('nexusRegistration'); }
  }
}

function initMotion() {
  if (reducedMotion) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.reveal').forEach((element) => gsap.to(element, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } }));
  gsap.to('.hero-inner', { yPercent: 18, opacity: 0.12, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.cta-orb', { rotate: 28, scale: 1.15, ease: 'none', scrollTrigger: { trigger: '.final-cta', start: 'top bottom', end: 'bottom top', scrub: true } });
}

initNavigation(); initNexusScene(); initOrbit(); initCards(); initSchedule(); initRegistration(); initMotion();
