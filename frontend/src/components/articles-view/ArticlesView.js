import React, {useState, useEffect} from 'react';
import {
    ArticleSearchButton, ArticleSearchInput, ArticleSearchResult, ArticleSearchResults,
    ArticlesViewBody,
    ArticlesViewContainer,
    ArticlesViewFooter,
    ArticlesViewHeader,
    ArticleTitle, FooterContainer, FooterNavigationButtons, FooterPageIndex, NavigationButton
} from "./ArticlesViewStyles";
import {fetchArticles} from "../../actions";

function ArticlesView() {

    const [articles, setArticles] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        fetchArticles().then(articles => {
            setSelectedIndex(0);
            setArticles(articles);
        });
    }, []);

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

    function selectSearchResult() {
        setSearch(null);
    }

    return (
        <ArticlesViewContainer>
            <ArticlesViewHeader>
                {search === null ?
                    <ArticleTitle>{articles ? articles[selectedIndex].title : 'Articles'}</ArticleTitle>
                    : <ArticleSearchInput onChange={searchInput} value={search}/>}
                <ArticleSearchButton isSearching={search !== null} onClick={toggleSearch}/>
                {search && search.length > 0 ?
                    <ArticleSearchResults>
                        <ArticleSearchResult onClick={selectSearchResult}>
                            Result 1
                        </ArticleSearchResult>
                        <ArticleSearchResult onClick={selectSearchResult}>
                            Result 2
                        </ArticleSearchResult>
                        <ArticleSearchResult onClick={selectSearchResult}>
                            Result 3
                        </ArticleSearchResult>
                    </ArticleSearchResults> : ''}
            </ArticlesViewHeader>
            <ArticlesViewBody dangerouslySetInnerHTML={{__html: articles ? articles[selectedIndex].body : ''}}/>
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
}

export default ArticlesView;
