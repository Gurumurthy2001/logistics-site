function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');

  if (navLinks.classList.contains('show')) {
    document.addEventListener('click', outsideClickListener);
  } else {
    document.removeEventListener('click', outsideClickListener);
  }
}

function outsideClickListener(event) {
  const navLinks = document.getElementById('nav-links');
  const toggleButton = document.querySelector('.menu-toggle'); // or use an ID if you prefer

  if (!navLinks.contains(event.target) && !toggleButton.contains(event.target)) {
    navLinks.classList.remove('show');
    document.removeEventListener('click', outsideClickListener);
  }
}



function showContent(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.add('hidden'));

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.remove('hidden');
  }
}

// Auto-load based on URL parameter
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const section = params.get('section');
  if (section) {
    showContent(section);
  }
};