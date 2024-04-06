console.log("Alloha! Bro");

//header
window.addEventListener('scroll', () => {
    var scrollDistance = window.scrollY;
    var headerStyle = document.querySelector('.header');

    if (scrollDistance >= 1) {
        headerStyle.classList.add('header-scroll');
    } else {
        headerStyle.classList.remove('header-scroll');
    }

    // console.log('scroll distance: ' + scrollDistance);
});

//burger
document.querySelector('.burger').addEventListener('click', () => {
    var headerWrap = document.querySelector('.header-wrap');
    var burgerBtn = document.querySelector('.burger');
    var bodyScroll = document.querySelector('body');
    
    headerWrap.classList.toggle('menu-wrap');
    burgerBtn.classList.toggle('active');
    bodyScroll.classList.toggle('body_hidden');

    document.querySelector('.logo').addEventListener('click', () => {
        headerWrap.classList.remove('menu-wrap');
        burgerBtn.classList.remove('active');
        bodyScroll.classList.remove('body_hidden');
    });

    document.querySelector('.navigation-list').addEventListener('click', () => {
        headerWrap.classList.remove('menu-wrap');
        burgerBtn.classList.remove('active');
        bodyScroll.classList.remove('body_hidden');
    });
});

//swiper-slides
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
