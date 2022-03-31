const btnMobile = document.querySelector('.btn_mobile');
console.log(btnMobile)

function abrirMenu(){
   const nav = document.querySelector('.header_nav');
   nav.classList.toggle('active')
}

btnMobile.addEventListener('click', abrirMenu);

