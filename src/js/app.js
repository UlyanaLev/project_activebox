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
