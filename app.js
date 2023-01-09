function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
  }
  

  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });


  window.addEventListener('scroll', reveal);

  function reveal () {
      var reveals = document.querySelectorAll('.reveal');
  
      for (var i = 0; i < reveals.length; i++) {
  
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;
  
          if (revealtop < windowheight - revealpoint) {
              reveals[i].classList.add('active');
          }
          else {
              reveals[i].classList.remove('active');
          }
      }
  }