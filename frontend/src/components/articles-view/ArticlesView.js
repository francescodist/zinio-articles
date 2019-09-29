import React, {useState, useEffect} from 'react';
import {
    ArticleSearchButton, ArticleSearchInput, ArticleSearchResult, ArticleSearchResults,
    ArticlesViewBody,
    ArticlesViewContainer,
    ArticlesViewFooter,
    ArticlesViewHeader,
    ArticleTitle, FooterContainer, FooterNavigationButtons, FooterPageIndex, NavigationButton
} from "./ArticlesViewStyles";
import {searchArticles, selectArticleById} from "../../actions";
import {useArticleIndex, useArticles, useSelectedArticle} from "../../hooks";

function ArticlesView() {

    const articles = useArticles();
    const [selectedIndex, setSelectedIndex] = useArticleIndex();
    const selectedArticle = useSelectedArticle(selectedIndex);
    const [search, setSearch] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const bodyRef = React.createRef();

    useEffect(() => {
        if (search && search.length > 0) {
            setSearchResults(searchArticles(articles, search));
        }
    }, [articles, search]);

    useEffect(() => {
        bodyRef.current.scrollTop = 0;
    }, [bodyRef, selectedIndex]);

    return (
        <ArticlesViewContainer>
            <ArticlesViewHeader>
                {search === null ?
                    <ArticleTitle>{articles ? articles[selectedIndex].title : 'Articles'}</ArticleTitle>
                    : <ArticleSearchInput onChange={searchInput} value={search}/>}
                <ArticleSearchButton isSearching={search !== null} onClick={toggleSearch}/>
                {search && search.length > 0 ?
                    <ArticleSearchResults>
                        {searchResults.map(searchResult =>
                            <ArticleSearchResult key={searchResult.id} onClick={selectSearchResult(searchResult.id)}>
                                {searchResult.title}
                            </ArticleSearchResult>)}
                    </ArticleSearchResults> : ''}
            </ArticlesViewHeader>
            <ArticlesViewBody ref={bodyRef} dangerouslySetInnerHTML={{__html: selectedArticle ? selectedArticle.body : ''}}/>
            <ArticlesViewFooter>
                {articles ?
                    <FooterContainer>
                        <FooterPageIndex>
                            {selectedIndex + 1} of {articles.length}
                        </FooterPageIndex>
                        <FooterNavigationButtons>
                            {selectedIndex > 0 ?
                                <NavigationButton onClick={previousPage}>Previous</NavigationButton> : ''}
                            {selectedIndex < articles.length - 1 ?
                                <NavigationButton onClick={nextPage}>Next</NavigationButton> : ''}
                        </FooterNavigationButtons>
                    </FooterContainer> : ''}
            </ArticlesViewFooter>
        </ArticlesViewContainer>
    );

    function previousPage() {
        setSelectedIndex(selectedIndex - 1)
    }

    function nextPage() {
        setSelectedIndex(selectedIndex + 1)
    }

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
            const index = selectArticleById(id, articles);
            setSelectedIndex(index);
            setSearch(null);
        }
    }
}

export default ArticlesView;
