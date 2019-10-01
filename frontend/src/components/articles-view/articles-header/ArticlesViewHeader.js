import React, {useEffect} from 'react';
import {
    ArticleHeader,
    ArticleSearchButton,
    ArticleSearchInput, ArticleSearchResult,
    ArticleSearchResults,
    ArticleTitle
} from "./ArticlesViewHeaderStyles";
import {useSearch} from "../../../hooks";

export default function ArticlesViewHeader(props) {

    const [search, setSearch, searchResults] = useSearch(props.articles);

    const inputSearchRef = React.createRef();

    useEffect(() => {
        const isFocused = inputSearchRef.current === document.activeElement;
        if(search !== null && !isFocused) {
            inputSearchRef.current.focus();
        }
    }, [search]);

    return (
        <ArticleHeader>
            {search === null ?
                <ArticleTitle>{props.selectedArticle ? props.selectedArticle.title : 'Articles'}</ArticleTitle>
                : <ArticleSearchInput ref={inputSearchRef} onChange={searchInput} value={search}/>}
            <ArticleSearchButton isSearching={search !== null} onClick={toggleSearch}/>
            {search && search.length > 0 ?
                <ArticleSearchResults>
                    {searchResults.map(searchResult =>
                        <ArticleSearchResult key={searchResult.id} onClick={selectSearchResult(searchResult.id)}>
                            {searchResult.title}
                        </ArticleSearchResult>)}
                </ArticleSearchResults> : ''}
        </ArticleHeader>
    );

    function toggleSearch() {
        if (search !== null) {
            setSearch(null);
        } else {
            setSearch('');
        }
    }

    function searchInput(event) {
        setSearch(event.target.value)
    }

    function selectSearchResult(id) {
        return () => {
            props.selectArticleById(id);
            setSearch(null);
        }
    }
}