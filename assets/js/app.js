const header = document.getElementById('site-header');

function updateHeader() {
  if (!header) return;
  header.dataset.scrolled = window.scrollY > 12 ? 'true' : 'false';
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Smooth internal anchors only if not reduced motion
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  });
});

// Highlight nav based on scroll
const sections = ['apps', 'principles', 'descargas', 'github'].map(id => document.getElementById(id)).filter(Boolean);
function updateNav() {
  const y = window.scrollY + 120;
  let active = null;
  for (const s of sections) {
    if (y >= s.offsetTop) active = s.id;
  }
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === `#${active}`);
  });
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
