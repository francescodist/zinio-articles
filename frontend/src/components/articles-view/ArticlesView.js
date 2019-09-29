import React, {useState, useEffect} from 'react';
import {
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

    return (
        <ArticlesViewContainer>
            <ArticlesViewHeader>
                <ArticleTitle>{articles ? articles[selectedIndex].title : 'Articles'}</ArticleTitle>
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
