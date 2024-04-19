     
document.addEventListener("DOMContentLoaded", function () {

  // Animations
  gsap.from("#presentation", { y: 200, duration: 1, opacity: 0, ease: "power2.out" });
  gsap.from('.iconOrdi', { rotation: 360, duration: 1, opacity: 0, ease: "power2.out" });
  gsap.to('.scroll', { y: -10, duration: 2, repeat: -1, yoyo: true, ease: "elastic", repeatDelay: 0 });
  
  const scrollTimeline = gsap.timeline();
  
  function animateElements() {
    const elements = document.querySelectorAll(".elementAnime");
  
    elements.forEach((element, index) => {
      scrollTimeline.from(element, {
        y: 200,
        duration: 1,
        autoAlpha: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
      
        }
      }).to(element, { autoAlpha: 1 });
    });

    window.removeEventListener("scroll", animateElements);
  }
  
  // Attachez la fonction au scroll de la page
  window.addEventListener("scroll", animateElements);
  


        // Burger menu
        const burgerMenu = document.querySelector('.burger-menu');
        const navList = document.querySelector('nav ul');

        burgerMenu.addEventListener('click', function () {
            navList.classList.toggle('show');
        });

        //Slider
        const slidesContainer = d3.select(".slides");
      
        // afficher les projets depuis le fichier json
        d3.json('data.json')
          .then(function (data) {
            // Crée les éléments li pour chaque projet
            const slides = slidesContainer.selectAll('.slide')
              .data(data)
              .join('li')
              .attr('class', 'slide');
      
            // Ajoute les liens et les images à chaque élément li
            slides.append('a')
              .attr('class', 'image')
              .attr('href', function (d) { return 'projet.html?id=' + d.Index; } )
              .append('img')
              .attr('src', function (d) { return 'img/mockup/' + d.Mockup1; })
              .attr('alt', function (d) { return 'Voir la page du projet ' + d.Title; });
    
      
        // Navigation Slider
        let translateValue = 0;
        let slideWidth = 45; 

        //La largeur de l'écran
        const largeurEcran = window.innerWidth;

        //Modifier la valeur de la variable en fonction de la largeur de l'écran
        if (largeurEcran < 700) {
            slideWidth = 45;
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
          slidesContainer.style('transform', `translateX(${translateValue}%)`);
        }
      
        function prevSlide() {
          if (translateValue === 0) {
            translateValue = -(slideWidth * (slideCount - 1));
          } else {
            translateValue += slideWidth;
          }
          slidesContainer.style('transform', `translateX(${translateValue}%)`);
        }
      
        function nextSlide() {
          if (translateValue <= -(slideWidth * (slideCount - 1))) {
            translateValue = 0;
          } else {
            translateValue -= slideWidth;
          }
          slidesContainer.style('transform', `translateX(${translateValue}%)`);
        }
      
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
      
        setInterval(slide, 5000);
    })




  });
      
