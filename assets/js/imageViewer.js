const modalImageSlider = document.getElementById("modalImageSlider");

document.querySelectorAll('img[data-toggle="modal"]').forEach((img)=>{
    img.addEventListener("click", function() {
        $("#imageModal").modal("show");

        //get the img slider
        let currentImgSlider = img.parentElement.parentElement;
        //the currentSlideIndex will be used to show the current image in the modal
        let currentSlideIndex = currentImgSlider.dataset.slideIndex;

        //get all the image titles in order
        let imageTitles = [];
        let allImgs = currentImgSlider.querySelectorAll("img");
        allImgs.forEach((img)=>{
            imageTitles.push(img.dataset.title);
        })

        //paste the current slider to the modal slider
        modalImageSlider.innerHTML = currentImgSlider.innerHTML;
        addImageSliderEventsToModal(modalImageSlider,currentSlideIndex,imageTitles);
    });
});