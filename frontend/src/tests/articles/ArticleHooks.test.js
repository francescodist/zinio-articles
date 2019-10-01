import * as actions from "../../actions/ArticlesActions";
import {useArticleId, useArticles, useSearch, useSelectedArticle} from "../../hooks";
import {renderHook} from "@testing-library/react-hooks";
import {act} from "react-test-renderer";
import {articlesSetup} from "./ArticlesSetup";

let articles;

beforeEach(() => {
    articles = articlesSetup();
    jest.spyOn(actions, 'fetchArticles').mockImplementation(() => Promise.resolve(articles));
});

afterEach(() => {
    actions.fetchArticles.mockClear();
});

describe('articles hook', () => {
    it('adds indexes to fetched articles', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useArticles());
        await waitForNextUpdate();
        expect(result.current[0].index).toBe(0);
        expect(result.current[1].index).toBe(1);
    });
});

describe('selected article hook', () => {
    it('selects an article by index', () => {
        const index = 1;
        const {result} = renderHook(() => useSelectedArticle(articles, index, null));
        expect(result.current).toStrictEqual(articles[1])
    });

    it('selects an article by id', () => {
        const id = 1;
        const {result} = renderHook(() => useSelectedArticle(articles, null, id));
        expect(result.current).toStrictEqual(articles.find(article => article.id === id));
    });
});

describe('search article hook', () => {
    it('sets a list of articles found', async () => {
        const index = 1;
        const stringToSearch = articles[index].title;
        const {result} = renderHook(() => useSearch(articles));
        const [, setSearch] = result.current;
        await act(async () => {
            setSearch(stringToSearch);
        });
        const searchResults = result.current[2];
        expect(searchResults).toStrictEqual([articles[index]])
    });
});

describe('article id hook', () => {
    it('resets id after setting it to a value', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useArticleId(articles));
        let [id, setId] = result.current;
        expect(id).toBe(null);
        await act(async () => {
            setId(1);
            await waitForNextUpdate();
            id = result.current[0];
            expect(id).toBe(1);
        });
        id = result.current[0];
        expect(id).toBe(null);
    });
});