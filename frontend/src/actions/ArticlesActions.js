export async function fetchArticles() {
    const res = await fetch('http://localhost:3001/articles');
    let {data} = await res.json();
    data.map(article => {
        article.body = article.body.replace(/(<img[^>]+src=")/g, '$1https://cdn2.audiencemedia.com');
        return article;
    });
    return data;
}