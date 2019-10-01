import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesView from "../../components/articles-view";
import {articlesSetup} from "./ArticlesSetup";
import {act} from "react-dom/test-utils";
import * as hooks from "../../hooks/ArticleHooks";
import {FooterPageIndex} from "../../components/articles-view/ArticlesViewStyles";

const container = document.createElement('div');
let articles;

beforeEach(() => {
    articles = articlesSetup().map((article, index) => {
        article.index = index;
        return article;
    });
    jest.spyOn(hooks, 'useArticles').mockImplementation(() => articles);
    jest.spyOn(hooks, 'useSelectedArticle').mockImplementation(() => articles[0]);
});

afterEach(() => {
    hooks.useArticles.mockClear();
    hooks.useSelectedArticle.mockClear();
    ReactDOM.unmountComponentAtNode(container);
});

describe('Articles View ', () => {

    it('renders without crashing', () => {
        ReactDOM.render(<ArticlesView/>, container);
    });

    it('loads articles on mount', async () => {
        await act(async () => {
            ReactDOM.render(<ArticlesView/>, container);
        });
        expect(hooks.useArticles).toHaveBeenCalledTimes(1);
    });

    it('shows the selected article', async () => {
        await act(async () => {
            ReactDOM.render(<ArticlesView/>, container);
        });
        const divBody = container.querySelector('#test1');
        expect(divBody).not.toBeNull();
    });

    it('hides the "previous" button when first article is selected', async () => {
        await act(async () => {
            ReactDOM.render(<ArticlesView/>, container);
        });
        const footer = container.querySelector('footer');
        const buttons = footer.querySelectorAll('button');
        expect(buttons).toHaveLength(1);
        expect(buttons.item(0).textContent).toBe('Next');
    });

    it('hides the "next" button when last article is selected', async () => {
        hooks.useSelectedArticle.mockClear();
        jest.spyOn(hooks, 'useSelectedArticle').mockImplementation(() => articles[articles.length - 1]);
        await act(async () => {
            ReactDOM.render(<ArticlesView/>, container);
        });
        const footer = container.querySelector('footer');
        const buttons = footer.querySelectorAll('button');
        expect(buttons).toHaveLength(1);
        expect(buttons.item(0).textContent).toBe('Previous');
    });

    it('shows the index of the current page', async() => {
        await act(async () => {
            ReactDOM.render(<ArticlesView/>, container);
        });
        const footer = container.querySelector('footer');
        const index = footer.querySelector(`.${FooterPageIndex.styledComponentId}`);
        expect(index.textContent).toBe('1 of 2');
    })
});

