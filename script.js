const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});

/* Smooth scroll for nav links */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navList.classList.remove('active');
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
