const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    responsive: {
      576: {
        touch: true,
        nav: true
      },
      768: {
        nav: false
      },
      992: {
        nav: false
      },
      1200: {
        nav: false
      },
    }
  });

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
