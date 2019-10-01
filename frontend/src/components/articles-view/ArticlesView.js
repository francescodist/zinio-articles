import React, {useEffect} from 'react';
import {
    ArticlesViewBody,
    ArticlesViewContainer,
    ArticlesViewFooter,
    FooterContainer,
    FooterNavigationButtons,
    FooterPageIndex,
    NavigationButton
} from "./ArticlesViewStyles";
import {useArticleId, useArticleIndex, useArticles, useSelectedArticle} from "../../hooks";
import ArticlesViewHeader from "./articles-header/ArticlesViewHeader";

function ArticlesView() {

    const articles = useArticles();
    const [selectedId, setSelectedId] = useArticleId();
    const [selectedIndex, setSelectedIndex] = useArticleIndex();
    const selectedArticle = useSelectedArticle(articles, selectedIndex, selectedId);

    const bodyRef = React.createRef();

    useEffect(() => {
        bodyRef.current.scrollTop = 0;
    }, [bodyRef, selectedArticle]);

    return (
        <ArticlesViewContainer>
            <ArticlesViewHeader articles={articles} selectedArticle={selectedArticle}
                                selectArticleById={setSelectedId}/>
            <ArticlesViewBody ref={bodyRef}
                              dangerouslySetInnerHTML={{__html: selectedArticle ? selectedArticle.body : ''}}/>
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

}

export default ArticlesView;
