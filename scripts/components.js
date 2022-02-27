const pageLocation = document.location.pathname;
const pageNavigationLinks = document.querySelectorAll('nav a');

pageNavigationLinks.forEach(links => {
  if(links.href.includes(`${pageLocation}`)) {
    links.classList.add('activeLink');
    links.style.textDecoration = "none";
  }
});