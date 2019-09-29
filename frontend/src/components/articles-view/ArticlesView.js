import React, {useEffect} from 'react';
import {
    ArticleSearchButton, ArticleSearchInput, ArticleSearchResult, ArticleSearchResults,
    ArticlesViewBody,
    ArticlesViewContainer,
    ArticlesViewFooter,
    ArticlesViewHeader,
    ArticleTitle, FooterContainer, FooterNavigationButtons, FooterPageIndex, NavigationButton
} from "./ArticlesViewStyles";
import {useArticleId, useArticleIndex, useArticles, useSearch, useSelectedArticle} from "../../hooks";

function ArticlesView() {

    const articles = useArticles();
    const [search, setSearch, searchResults] = useSearch(articles);
    const [selectedId, setSelectedId] = useArticleId();
    const [selectedIndex, setSelectedIndex] = useArticleIndex();
    const selectedArticle = useSelectedArticle(articles, selectedIndex, selectedId);

    const bodyRef = React.createRef();

    useEffect(() => {
        bodyRef.current.scrollTop = 0;
    }, [bodyRef, selectedArticle]);

    return (
        <ArticlesViewContainer>
            <ArticlesViewHeader>
                {search === null ?
                    <ArticleTitle>{selectedArticle ? selectedArticle.title : 'Articles'}</ArticleTitle>
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
                {selectedArticle ?
                    <FooterContainer>
                        <FooterPageIndex>
                            {selectedArticle.index + 1} of {articles.length}
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
        setSelectedIndex(selectedArticle.index - 1)
    }

    function nextPage() {
        setSelectedIndex(selectedArticle.index + 1)
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
            setSelectedId(id);
            setSearch(null);
        }
    }
}

export default ArticlesView;
