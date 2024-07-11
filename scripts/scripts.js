// Script para mover a página para a seção desejada ao clicar em um link do menu
document.addEventListener("DOMContentLoaded", function() {
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            var offsetTop = section.offsetTop;
            var screenHeight = window.innerHeight;
            var scrollToPosition = offsetTop - (screenHeight / 5);

            if (sectionId === 'projects') {
                var scrollToPosition = offsetTop - (screenHeight / 35);
            }

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    }

    var navLinks = document.querySelectorAll('.navlist a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Script para mover a página para a seção HOME ao carregar a página
document.addEventListener("DOMContentLoaded", function() {

    if (window.location.hash) {
        var targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            var offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    }
});

// Script para animar o header ao carregar a página - Junto com o CSS animation_header.css
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');

    header.classList.add('header-slide-down');
});

// Script para animar a seção ABOUT ME ao carregar a página - Junto com o CSS animation_aboutme.css
document.addEventListener("DOMContentLoaded", function() {
    var aboutMeElement = document.querySelector('.aboutme');

    aboutMeElement.classList.add('aboutme-animate');
});

// Script para animar a seção PROJECTS/Boxs ao carregar a página - Junto com o CSS animation_projects.css
function showHiddenContent(box) {
    var hiddenContent = box.querySelector('.content');
    // Exemplo: modificar ou interagir com o conteúdo oculto
}