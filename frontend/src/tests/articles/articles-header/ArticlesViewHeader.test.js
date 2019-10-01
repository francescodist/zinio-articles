import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesViewHeader from "../../../components/articles-view/articles-header/ArticlesViewHeader";
import {articlesSetup} from "../ArticlesSetup";
import {
    ArticleSearchInput, ArticleSearchResult,
    ArticleTitle
} from "../../../components/articles-view/articles-header/ArticlesViewHeaderStyles";
import * as hooks from "../../../hooks/ArticleHooks";


const container = document.createElement('div');
let articles;
let selectedArticle;

beforeEach(() => {
    articles = articlesSetup();
    selectedArticle = articles[0];
    jest.spyOn(hooks,'useSearch').mockImplementation(() => [null, ()=>{}, []])
});

afterEach(() => {
    hooks.useSearch.mockClear();
    ReactDOM.unmountComponentAtNode(container);
});

describe('Articles View Header', () => {
   it('renders without crashing', () => {
       ReactDOM.render(<ArticlesViewHeader/>, container);
   });

    it('shows the selected article title', () => {
        ReactDOM.render(<ArticlesViewHeader selectedArticle={selectedArticle}/>, container);
        const title = container.querySelector(`.${ArticleTitle.styledComponentId}`);
        expect(title.textContent).toBe(selectedArticle.title)
    });

    it('shows input search when searh string is not null', async () => {
        hooks.useSearch.mockClear();
        jest.spyOn(hooks,'useSearch').mockImplementation(() => ['', ()=>{}, []]);
        ReactDOM.render(<ArticlesViewHeader selectedArticle={selectedArticle}/>, container);
        let searchInput = container.querySelector(`.${ArticleSearchInput.styledComponentId}`);
        expect(searchInput).not.toBeNull();
    });

    it('shows a list search results', async () => {
        hooks.useSearch.mockClear();
        jest.spyOn(hooks,'useSearch').mockImplementation(() => ['R', ()=>{}, articles]);
        ReactDOM.render(<ArticlesViewHeader selectedArticle={selectedArticle}/>, container);
        let searchResults = container.querySelectorAll(`.${ArticleSearchResult.styledComponentId}`);
        expect(searchResults).toHaveLength(articles.length);
        expect(searchResults.item(0).textContent).toBe(articles[0].title);
        expect(searchResults.item(1).textContent).toBe(articles[1].title);
    });
});