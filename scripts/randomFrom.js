// Charger les données JSON
function eraseDescription() {
    const description = document.querySelector('#description');
    const descriptionContents = description.querySelectorAll('.description-content');
    descriptionContents.forEach(content => content.remove());
}

function loadFromageData() {
    fetch('fromages.json')
    .then(response => response.json())
    .then(data => {
        // Choisir un objet aléatoire dans le tableau
        const randomIndex = Math.floor(Math.random() * data.length);
        const fromage = data[randomIndex];

        // Remplir les éléments du DOM avec les données JSON
        const fromVideo = document.getElementById('from-video');
        fromVideo.src = `fromagePictures/${fromage.image}`;

        const descriptionTitle = document.getElementById('description-title');
        descriptionTitle.innerText = fromage.name;

        const descriptionRegion = document.getElementById('description-region');
        descriptionRegion.innerText = fromage.region;

        const descriptionContainer = document.getElementById('description');
        const descriptionContent = fromage.description;
        for (const key in descriptionContent) {
            if (Object.hasOwnProperty.call(descriptionContent, key)) {
                const contentObj = descriptionContent[key];
                const contentDiv = document.createElement('div');
                contentDiv.classList.add('p-2', 'description-content');
                const contentTitle = document.createElement('h3');
                contentTitle.classList.add('sub-title', 'text-center', 'pb-3', 'text-jonquil', 'content-title');
                contentTitle.innerText = contentObj['sub-title'];
                const contentParagraph = document.createElement('p');
                contentParagraph.classList.add('paragraph', 'content-paragraph');
                contentParagraph.innerText = contentObj['paragraph'];
                contentDiv.appendChild(contentTitle);
                contentDiv.appendChild(contentParagraph);
                descriptionContainer.appendChild(contentDiv);
            }
        }
    })
    .catch(error => console.error(error));
}

// Appeler la fonction au chargement de la page
window.addEventListener('DOMContentLoaded', loadFromageData);

// Appeler la fonction lors du clic sur le bouton #random-button
const randomButton = document.getElementById('random-button');

randomButton.addEventListener("click", function () {
    eraseDescription();
    loadFromageData()
});

