
const swiper = new Swiper('.swiper', {
  enabled: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
  },
});

addEventListener ('load', function() {
  const width = document.documentElement.clientWidth;
  if (width < 768) {
    swiper.enable()
  }
  else {
    swiper.disable()
  }

});
window.addEventListener ('resize', function() {
    const width = document.documentElement.clientWidth;
    if (width < 768) {
      swiper.enable()
    }
    else {
      const transform = document.querySelector('.brands__content');
      transform.style.transform = 'none';
      swiper.disable()
    }

});

const button = document.querySelectorAll('.main__more-btn, .main__hidden-btn, .brands__more-btn, .brands__hidden-btn');
console.log(button)
for (let i = 0; i < button.length; i++){
  button[i].onclick = function(){
    if (button[i] == document.querySelector('.main__more-btn')) {
      button[i].classList.add('btn-hidden');
      document.querySelector('.main__hidden-btn').classList.remove('btn-hidden');
      document.querySelector('.main__descr').classList.add('main__descr--full');
    }else if (button[i] == document.querySelector('.main__hidden-btn')){
      button[i].classList.add('btn-hidden')
      document.querySelector('.main__more-btn').classList.remove('btn-hidden');
      document.querySelector('.main__descr').classList.remove('main__descr--full');
    }else if (button[i] == document.querySelector('.brands__more-btn')){
      button[i].classList.add('btn-hidden')
      document.querySelector('.brands__hidden-btn').classList.remove('btn-hidden');
      document.querySelector('.brands__content').classList.add('brands__content--full');
    }else if (button[i] == document.querySelector('.brands__hidden-btn')){
      button[i].classList.add('btn-hidden')
      document.querySelector('.brands__more-btn').classList.remove('btn-hidden');
      document.querySelector('.brands__content').classList.remove('brands__content--full');
    }
    console.log(button[i])
  };
}


function closeMenu() {
  document.querySelector('.menu').classList.remove('menu--active')
  document.querySelector('.menu__background').classList.remove('menu__background--active')
}function openMenu() {
  document.querySelector('.menu').classList.add('menu--active')
  document.querySelector('.menu__background').classList.add('menu__background--active')
}
document.getElementById('background-close').addEventListener("click", closeMenu);
document.getElementById('button-close').addEventListener("click", closeMenu);
document.querySelector('.header__menu').addEventListener("click", openMenu);

/* document.querySelector('.menu__header--close').onclick = function() {
  const menu = document.querySelector('.menu');
  const menuActive = document.querySelector('.menu--active')
  if (menuActive){
    menu.remove('menu--active')
  }
};
document.querySelector('.header__menu').onclick = function() {
  const menu = document.querySelector('.menu');
  const menuActive = document.querySelector('.menu--active')
  if (menuActive){
    menu.remove('menu--active')
  }
}; */