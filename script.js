// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });
}

// Highlight active nav item
const page = document.body.getAttribute('data-page');
if (page) {
  const link = document.querySelector(`.nav a[href$="${page}.html"]`) || document.querySelector('.nav a[href="index.html"]');
  if (link) link.classList.add('active');
}
