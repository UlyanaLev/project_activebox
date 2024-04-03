console.log("Alloha! Bro");

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

document.querySelector('.burger').addEventListener('click', () => {
    var headerWrap = document.querySelector('.header-wrap');
    var burgerBtn = document.querySelector('.burger');
    
    headerWrap.classList.toggle('menu-wrap');
    burgerBtn.classList.toggle('active');

    document.querySelector('.logo').addEventListener('click', () => {
        headerWrap.classList.remove('menu-wrap');
        burgerBtn.classList.remove('active');
    });

    document.querySelector('.navigation-list').addEventListener('click', () => {
        headerWrap.classList.remove('menu-wrap');
        burgerBtn.classList.remove('active');
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
