

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('nav ul');

    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // slider 
    const slides = document.querySelector('.slides');
    let translateValue = 0;
    let slideWidth = 21;

      //La largeur de l'écran
      const largeurEcran = window.innerWidth;

      //Modifier la valeur de la variable en fonction de la largeur de l'écran
      if (largeurEcran < 600) {
        slideWidth = 21;
      } else {
        slideWidth = 13;
      }

    const slideCount = document.querySelectorAll('.slide').length;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function slide() {
      if (translateValue <= -(slideWidth * (slideCount - 1))) {
        translateValue = 0;
      } else {
        translateValue -= slideWidth;
      }
      slides.style.transform = `translateX(${translateValue}%)`;
    }

    function prevSlide() {
      if (translateValue === 0) {
        translateValue = -(slideWidth * (slideCount - 1));
      } else {
        translateValue += slideWidth;
      }
      slides.style.transform = `translateX(${translateValue}%)`;
    }

    function nextSlide() {
      if (translateValue <= -(slideWidth * (slideCount - 1))) {
        translateValue = 0;
      } else {
        translateValue -= slideWidth;
      }
      slides.style.transform = `translateX(${translateValue}%)`;
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    setInterval(slide, 5000);

});