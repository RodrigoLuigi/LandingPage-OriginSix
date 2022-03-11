/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER(ABRIR) e X(FECHA) */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show');
  })
}

/*QUANDO CLICAR EM UM ITEM DO MENU , ESCONDER O MENU*/
const links = document.querySelectorAll('nav ul li a');
console.log(links)

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  })
}

/* mudar o header da página adicionando box-shadow quando der scroll*/

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll');
  }else{
    header.classList.remove('scroll');

  }
})

