// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll reveal with delay
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const trigger = window.innerHeight - 120;
  reveals.forEach((section, index) => {
    if (section.getBoundingClientRect().top < trigger) {
      section.style.transitionDelay = `${index * 0.15}s`;
      section.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Dark/Bright mode toggle
const toggle = document.getElementById('toggleMode');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
});
