const allSliders = document.querySelectorAll(".slider");


allSliders.forEach(slider => {
  const slides = slider.querySelector('.slides');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');
  let slideIndex = 0;
  
  function goToSlide(n) {
    slides.style.transform = `translateX(-${n * 100}%)`;
    slideIndex = n;
  }
  
  function prevSlide() {
    if (slideIndex === 0) {
      goToSlide(slides.children.length - 1);
    } else {
      goToSlide(slideIndex - 1);
    }
  }
  
  function nextSlide() {
    if (slideIndex === slides.children.length - 1) {
      goToSlide(0);
    } else {
      goToSlide(slideIndex + 1);
    }
  }
  
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
});