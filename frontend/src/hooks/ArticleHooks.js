import {useState, useEffect} from 'react';
import {fetchArticles, searchArticles, selectArticleById} from "../actions";

export function useArticles() {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        fetchArticles().then(articles => {
            setArticles(articles.map((article, index) => {
                article.index = index;
                return article;
            }))
        });
    }, []);

    return articles;
}

export function useSelectedArticle(articles=[], index = null, id = null) {
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        if(articles) {
            setSelectedArticle(articles[index]);
        }
    }, [articles, index]);

    useEffect(() => {
        if(articles && id !== null) {
            setSelectedArticle(selectArticleById(id, articles));
        }
    }, [articles, id]);

    return selectedArticle;
}

export function useArticleIndex() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return [selectedIndex, setSelectedIndex];
}

export function useSearch(articles=[]) {
    const [search, setSearch] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (search && search.length > 0) {
            setSearchResults(searchArticles(articles, search));
        }
    }, [articles, search]);

    return [search, setSearch, searchResults];
}

export function useArticleId() {
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        if(selectedId !== null) {
            setSelectedId(null)
        }
    }, [selectedId]);

    return [selectedId, setSelectedId];
}
