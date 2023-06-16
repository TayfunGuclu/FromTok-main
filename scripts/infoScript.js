const infoButton = document.getElementById('info-button')
const closeButton = document.getElementById('close-button')
const infoContainer = document.getElementById('info-container')

infoButton.addEventListener("click", function() {
    infoContainer.classList.toggle("active");
});

closeButton.addEventListener("click", function() {
    infoContainer.classList.remove("active")
})