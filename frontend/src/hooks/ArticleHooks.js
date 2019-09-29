import {useState, useEffect} from 'react';
import {fetchArticles, searchArticles} from "../actions";

export function useArticles() {
    const [articles, setArticles] = useState(null);

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
        }
    }, [articles, index]);

    return selectedArticle;
}

export function useArticleIndex() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return [selectedIndex, setSelectedIndex];
}

export function useSearch() {
    const [search, setSearch] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const articles = useArticles();

    useEffect(() => {
        if (search && search.length > 0) {
            setSearchResults(searchArticles(articles, search));
        }
    }, [articles, search]);

    return [search, setSearch, searchResults];
}
