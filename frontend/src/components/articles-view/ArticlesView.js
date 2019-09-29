import React from 'react';
import {
    ArticlesViewBody,
    ArticlesViewContainer,
    ArticlesViewFooter,
    ArticlesViewHeader,
    ArticleTitle
} from "./ArticlesViewStyles";

function ArticlesView() {
    return (
        <ArticlesViewContainer>
            <ArticlesViewHeader>
                <ArticleTitle>Title</ArticleTitle>
            </ArticlesViewHeader>
            <ArticlesViewBody/>
            <ArticlesViewFooter>

            </ArticlesViewFooter>
        </ArticlesViewContainer>
    );
}

export default ArticlesView;
