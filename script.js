/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER(ABRIR) e X(FECHA) */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  })
}

/*QUANDO CLICAR EM UM ITEM DO MENU , ESCONDER O MENU*/
const links = document.querySelectorAll('nav ul li a');
console.log(links)

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}

/* Função adicionando box-shadow no header quando der scroll*/
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

/* Testimonials carousel swiper (slider)*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }

});

/* Scroll Reveal , mostrar conteúdo ao rolar a pagina(scroll)*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1100,
  reset: true
})
ScrollReveal().reveal(
  `#home .image, #home .button, #home .text,
  #about .image, #about .text ,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text,#contact .button, #contact .links,
  footer .brand, footer .social
   `, {
    interval: 100
  });

/* Função voltar para o Topo*/
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visivel na página */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd){
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }
}

/* When scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
})