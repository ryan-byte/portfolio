const allSliders = document.querySelectorAll(".slider");
const imageModalLabel = document.getElementById("imageModalLabel");

//add an events for all the current sliders
allSliders.forEach(slider => {
  //setup the slider variables
  const slides = slider.querySelector('.slides');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');
  const imageCaption = slider.querySelector(".imageCaption");

  //get all the images title in order, they will be used to change the caption
  let imageTitles = [];
  let allImgs = slider.querySelectorAll("img");
  allImgs.forEach((img)=>{
      imageTitles.push(img.dataset.title);
  })

  //set the image index
  let slideIndex = 0;
  slider.dataset.slideIndex = 0;

  //set the image caption which will be the image title
  imageCaption.innerText = imageTitles[0];
  
  function goToSlide(n) {
    slides.style.transform = `translateX(-${n * 100}%)`;
    slideIndex = n;
    //change the slider index to the current image
    slider.dataset.slideIndex = n;
    //change the image caption
    imageCaption.innerText = imageTitles[slideIndex];
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


/**
 * 
 * @param {Element} modalImageSlider slider inside the modal
 * @param {Int} currentSlideIndex this must be an int and it will keep tracking the current image index
 * @param {Array<string>} imageTitles this contains the images title in order it will be used to change the title on the top of the slider modal
 */
function addImageSliderEventsToModal(modalImageSlider,currentSlideIndex,imageTitles){
  //setup slider variables
  const slides = modalImageSlider.querySelector('.slides');
  const prevBtn = modalImageSlider.querySelector('.prev-btn');
  const nextBtn = modalImageSlider.querySelector('.next-btn');
  const imageCaption = modalImageSlider.querySelector('.imageCaption');
  let slideIndex = parseInt(currentSlideIndex) ? parseInt(currentSlideIndex) : 0;
  modalImageSlider.dataset.slideIndex = slideIndex;
  
  //setup current image label
  imageCaption.innerText = imageTitles[slideIndex];


  
  
  function goToSlide(n) {
    slides.style.transform = `translateX(-${n * 100}%)`;
    slideIndex = n;
    modalImageSlider.dataset.slideIndex = n;
    //change the modal title
    imageCaption.innerText = imageTitles[slideIndex];
    //css animation
    slides.style.transition = "all 0.5s ease-in-out";
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

}