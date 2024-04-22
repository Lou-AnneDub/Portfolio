     
document.addEventListener("DOMContentLoaded", function () {

  // Animations
  gsap.from("#presentation", { y: 200, duration: 1, opacity: 0, ease: "power2.out" });
  gsap.from('.iconOrdi', { rotation: 360, duration: 1, opacity: 0, ease: "power2.out" });  
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

  }
    

  });
      
