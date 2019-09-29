import React, {useState, useEffect} from 'react';
import {
    ArticlesViewBody,
    ArticlesViewContainer,
    ArticlesViewFooter,
    ArticlesViewHeader,
    ArticleTitle
} from "./ArticlesViewStyles";
import {fetchArticles} from "../../actions/ArticlesActions";

function ArticlesView() {

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        fetchArticles().then(articles => setArticles(articles));
    }, []);

    return (
        <ArticlesViewContainer>
            <ArticlesViewHeader>
                <ArticleTitle>Title</ArticleTitle>
            </ArticlesViewHeader>
            <ArticlesViewBody dangerouslySetInnerHTML={{__html: articles ? articles[0].body : ''}}/>
            <ArticlesViewFooter>

            </ArticlesViewFooter>
        </ArticlesViewContainer>
    );
}

export default ArticlesView;
