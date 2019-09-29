export async function fetchArticles() {
    const res = await fetch('http://localhost:3001/articles');
    let {data} = await res.json();
    data.map(article => {
        article.body = article.body.replace(/(<img[^>]+src=")/g, '$1https://cdn2.audiencemedia.com');
        return article;
    });
    return data;
}

export function searchArticles(articles, search) {
    const searchRegex = new RegExp(search, 'ig');
    return articles
        .filter(article =>
            searchRegex.test(article.title) ||
            searchRegex.test(article.body) ||
            (article.authors && article.authors.find(author => searchRegex.test(author))));
}

export function selectArticleById(id, articles) {
    return articles.findIndex(article => article.id === id);
}