(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  document.getElementById('year').textContent = new Date().getFullYear();

  // Respect a saved preference when available; default to the reference's light look.
  try {
    const savedTheme = localStorage.getItem('ms-portfolio-theme');
    if (savedTheme === 'dark') root.dataset.theme = 'dark';
  } catch (_) {}

  function updateThemeButton() {
    const isDark = root.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  }
  updateThemeButton();

  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    if (next === 'dark') root.dataset.theme = 'dark';
    else delete root.dataset.theme;
    try { localStorage.setItem('ms-portfolio-theme', next); } catch (_) {}
    updateThemeButton();
  });

  function closeMenu() {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact']
    .map(id => document.getElementById(id)).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id === 'skills' ? 'skills' : entry.target.id;
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${targetId}`));
          if (entry.target.id === 'skills') entry.target.classList.add('visible');
        }
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  } else {
    document.querySelector('.skills-panel').classList.add('visible');
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = `Hello Muhammad Shahzad,%0A%0A${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}`;
    const url = `https://wa.me/923116269796?text=${body}`;
    formNote.textContent = 'Opening WhatsApp with your prepared message. Review it there before sending.';
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();