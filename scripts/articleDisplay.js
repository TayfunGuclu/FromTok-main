function displayArticle() {
    fetch('/articles.json')
        .then(response => response.json())
        .then(data => {
            const articleId = document.getElementById('article-id').getAttribute('value');
            const article = data.find(a => a.id === articleId);

            const articleTitle = document.getElementById('article-title');
            articleTitle.innerHTML = article.title;

            const articleImg = document.getElementById('article-img');
            articleImg.src = `articlesPictures/${article.image}`;
            
            const articleContent = document.getElementById('article');

            const articleIntroduction = document.createElement('p');
            articleIntroduction.classList.add('paragraph', 'text-white', 'p-4', 'pb-5', 'bottom-separator');
            articleIntroduction.innerHTML = article.introduction;
            articleContent.appendChild(articleIntroduction);

            for (const key in article.description) {
                const content = article.description[key];

                const articleSubTitle = document.createElement('h2');
                articleSubTitle.classList.add('sub-title', 'text-jonquil', 'fs-4', 'pb-5', 'article-sub-title');
                articleSubTitle.innerHTML = content['sub-title'];

                const articleParagraph = document.createElement('p');
                articleParagraph.classList.add('paragraph', 'text-white', 'article-paragraph');
                articleParagraph.innerHTML = content.paragraph;

                const articleContentDiv = document.createElement('div');
                articleContentDiv.classList.add('p-4', 'text-center', 'article-content');

                articleContentDiv.appendChild(articleSubTitle);
                articleContentDiv.appendChild(articleParagraph);
                articleContent.appendChild(articleContentDiv);
            }

            const articleAuthor = document.createElement('div');
            articleAuthor.classList.add('text-center', 'text-white', 'fs-5', 'sub-title', 'pt-5')
            articleAuthor.innerHTML = "<span class='text-jonquil'>Auteur : </span>"
            articleAuthor.innerHTML += article.author;
            articleContent.appendChild(articleAuthor);

            const articleDate = document.createElement('div');
            articleDate.classList.add('text-center', 'text-white', 'fs-5', 'sub-title', 'pb-5')
            articleDate.innerHTML = "Publié le : "
            articleDate.innerHTML += article.date;
            articleContent.appendChild(articleDate);
        })
        .catch(error => console.error(error));

}

window.addEventListener('DOMContentLoaded', displayArticle);