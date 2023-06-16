function loadArticles() {
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            // Boucle sur chaque article dans le fichier JSON
            data.reverse();
            for (let article of data) {
                // Création de la div .blog-article-block avec la même mise en forme
                let articleBlock = document.createElement('div');
                articleBlock.classList.add('p-4', 'pb-0', 'blog-article-block');

                // Création de la balise a avec le lien correspondant à l'article
                let articleLink = document.createElement('a');
                articleLink.classList.add('text-decoration-none');
                articleLink.href = article.link;

                // Création du conteneur d'article avec une image et le titre
                let articleContainer = document.createElement('div');
                articleContainer.classList.add('container', 'overflow-ellipsis', 'blog-article-container');
                let articleRow = document.createElement('div');
                articleRow.classList.add('row');
                let articleImage = document.createElement('img');
                articleImage.classList.add('col-12', 'col-lg-4', 'p-0', 'blog-article-image');
                articleImage.src = `./articles/articlesPictures/${article.image}`;
                let articleContent = document.createElement('div');
                articleContent.classList.add('d-flex', 'flex-column', 'col-12', 'col-lg-8');
                let articleTitle = document.createElement('h4');
                articleTitle.classList.add('title', 'text-jonquil', 'text-center', 'pt-2', 'm-0');
                articleTitle.textContent = article.title;
                let articleIntro = document.createElement('p');
                articleIntro.classList.add('paragraph', 'text-white', 'p-1');
                articleIntro.textContent = article.introduction;
                const articleDate = document.createElement('div');
                articleDate.classList.add('text-white', 'sub-title', 'p-2', 'text-center', 'fs-6', 'text-underline')
                articleDate.innerHTML = "Publié le : "
                articleDate.innerHTML += article.date;

                

                // Ajout des éléments dans le DOM

                articleContent.appendChild(articleTitle);
                articleContent.appendChild(articleDate);
                articleContent.appendChild(articleIntro);
                articleRow.appendChild(articleImage);
                articleRow.appendChild(articleContent);
                articleContainer.appendChild(articleRow);
                articleLink.appendChild(articleContainer);
                articleBlock.appendChild(articleLink);
                document.getElementById('articles-global').appendChild(articleBlock);
            }
        });
}

window.addEventListener('DOMContentLoaded', loadArticles);