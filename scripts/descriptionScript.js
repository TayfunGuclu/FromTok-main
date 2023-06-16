const descriptionContainer = document.getElementById('description-container');
const arrowUpIcon = document.getElementById('arrow-up-icon');
const descriptionPopButton = document.getElementById('description-pop-button');

let isDescriptionContainerCollapsed = false; // Variable pour stocker l'état actuel de la div

descriptionPopButton.addEventListener('click', function() {
  if (isDescriptionContainerCollapsed) {
    descriptionContainer.classList.remove('position-absolute')
    arrowUpIcon.classList.remove('fa-chevron-down');
    arrowUpIcon.classList.add('fa-chevron-up');
  } else {
    descriptionContainer.classList.add('position-absolute')
    arrowUpIcon.classList.remove('fa-chevron-up');
    arrowUpIcon.classList.add('fa-chevron-down');
    descriptionContainer.style.maxHeight = '100vh'
    descriptionContainer.style.height = '100vh'
  }
  isDescriptionContainerCollapsed = !isDescriptionContainerCollapsed; // Inverser l'état de la div
});
