function projetsAccueil() {
    d3.json('data.json')
        .then(function(data){
            

// Fonction pour créer le slider des projets
function ProjectsSlider(data) {
    const sliderContainer = d3.select(".slider");
  
    // Ajouter les images des projets au slider
    const slides = sliderContainer.selectAll("li")
      .data(data)
      .join("li")
      .attr("class", "slide")
      .html(d => `<a class="image" href="projet.html?Index=${d.Index}" target="_blank"><img src="./img/mockup/${d.Mockup1}" alt="Voir la page de ${d.Title}"></a>`);
  
    // Exemple de logique de slider simple
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.style("display", "none");
      slides.filter((d, i) => i === index).style("display", "block");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % data.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + data.length) % data.length;
      showSlide(currentIndex);
    }
  
    // Initialiser le slider en affichant le premier slide
    showSlide(currentIndex);
  
    // Ajouter des boutons ou d'autres éléments pour la navigation
    // Vous pouvez également ajouter une logique d'automatisation du slider si nécessaire
    d3.select(".slider").append("button").attr("class", "prev").html("<span class='arrow'></span><span class='sr-only'>Précédent</span>").on("click", prevSlide);
    d3.select(".slider").append("button").attr("class", "next").html("<span class='sr-only'>Suivant</span><span class='arrow'></span>").on("click", nextSlide);
  }
  

        })

    
}


document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('nav ul');

    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});