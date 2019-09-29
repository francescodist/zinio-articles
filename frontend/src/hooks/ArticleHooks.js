import {useState, useEffect} from 'react';
import {fetchArticles} from "../actions";

export function useArticles() {
    const [articles, setArticles] = useState(null);
    const [selectedIndex] = useArticleIndex();

    useEffect(() => console.log(selectedIndex), [selectedIndex]);

    useEffect(() => {
        fetchArticles().then(articles => setArticles(articles));
    }, []);

    return articles;
}

export function useSelectedArticle(index = null) {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const articles = useArticles();

    useEffect(() => {
        if(articles) {
            setSelectedArticle(articles[index]);
            console.log(selectedArticle);
        }
    }, [articles, index]);

    return selectedArticle;
}

export function useArticleIndex() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return [selectedIndex, setSelectedIndex];
}
