     
document.addEventListener("DOMContentLoaded", function () {


        // Burger menu
        const burgerMenu = document.querySelector('.burger-menu');
        const navList = document.querySelector('nav ul');

        burgerMenu.addEventListener('click', function () {
            navList.classList.toggle('show');
        });

        const slidesContainer = d3.select(".slides");
      
        // afficher les projets depuis le fichier json
        d3.json('data.json')
          .then(function (data) {
            // Crée les éléments li pour chaque projet
            const slides = slidesContainer.selectAll('.slide')
              .data(data)
              .enter()
              .append('li')
              .attr('class', 'slide');
      
            // Ajoute les liens et les images à chaque élément li
            slides.append('a')
              .attr('class', 'image')
              .attr('href', '' )
              .append('img')
              .attr('src', function (d) { return 'img/mockup/' + d.Mockup1; })
              .attr('alt', function (d) { return 'Voir la page de ' + d.Title; });
    
      
        // Navigation Slider
        let translateValue = 0;
        let slideWidth = 23.5; 

        //La largeur de l'écran
        const largeurEcran = window.innerWidth;

        //Modifier la valeur de la variable en fonction de la largeur de l'écran
        if (largeurEcran < 700) {
            slideWidth = 23.5;
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
      

      /*{
    "Index": 5,
    "Title": "CV Video",
    "Date": "",
    "Lien1": "",
    "Lien2": "",
    "Description": "EN COURS",
    "Text": "",
    "Techno": ["Photoshop"],
    "Context": ["BUT MMI", "2ème année", "solo"],
    "Create": ["Me !"],
    "Img1": "",
    "Img2": "",
    "Img3": "",
    "Mockup1": "",
    "Mockup2": "",
    "Mockup3": ""
  }*/