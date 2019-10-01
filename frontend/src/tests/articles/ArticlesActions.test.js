import {fetchArticles, searchArticles, selectArticleById} from "../../actions";
import {articlesSetup} from "./ArticlesSetup";

let articles;
let mockFetchPromise;

beforeEach(function () {
    articles = articlesSetup();
    mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve({data: articles}),
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
});

afterEach(() => {
    global.fetch.mockClear();
});

describe('fetchArticles', () => {
    it('returns fetched articles', async () => {
        const res = await fetchArticles();
        expect(res).toStrictEqual(articles);
    });

    it('prefixes images src with "https://cdn2.audiencemedia.com"', async () => {
        articles[0].body = '<img src="/test"/>';
        const res = await fetchArticles();
        expect(res[0].body).toBe('<img src="https://cdn2.audiencemedia.com/test"/>');
    })
});

describe('searchArticles', () => {
    it('returns only the articles searched', () => {
        //search by title
        let res = searchArticles(articles, 'Title 2');
        expect(res.length).toBe(1);
        expect(res[0]).toStrictEqual(articles[1]);
        //search by author
        res = searchArticles(articles, 'auth2');
        expect(res[0]).toStrictEqual(articles[0]);
        //search by body content
        res = searchArticles(articles, 'Body');
        expect(res).toStrictEqual(articles);
    });
});

describe('selectArticleById', () => {
    it('selects the right article by id', () => {
        const res = selectArticleById(articles, 1);
        expect(res).toStrictEqual(articles[0]);
    })
});
