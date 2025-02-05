
function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
