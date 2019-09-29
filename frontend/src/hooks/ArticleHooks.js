import {useState, useEffect} from 'react';
import {fetchArticles} from "../actions";

export function useArticles() {
    const [articles, setArticles] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        fetchArticles().then(articles => setArticles(articles));
    },[]);

    useEffect(() => {
        if(articles) {
            setSelectedArticle(articles[selectedIndex]);
        }
    }, [articles, selectedIndex]);

    return [articles, selectedIndex, setSelectedIndex, selectedArticle];
}
