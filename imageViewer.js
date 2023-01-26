document.querySelectorAll('img[data-toggle="modal"]').forEach((img)=>{
    img.addEventListener("click", function() {
        $("#imageModal").modal("show");
        let modalImg = document.querySelector(".modal-img");
        let modalTitle = document.querySelector("#imageModalLabel");
        console.log(img.parentElement);
        modalImg.src = this.getAttribute("src");
        modalTitle.innerText = this.getAttribute("alt");
    });
});