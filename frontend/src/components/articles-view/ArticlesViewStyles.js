import styled, {css} from "styled-components";

const defaultBar = css`
  height: 64px;
  flex-shrink: 0;
  width: 100vw;
  background-color: #1091bd;
  display: flex;
`;

const defaultButton = css`
  background: none;
  color: white;
  font-size: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s linear 0s;
  
  &:hover {
    background-color: rgba(255,255,255,0.2);
  }
  
  &:active {
    background-color: rgba(195,195,195,0.2);
    transition: none;
  }
`;

export const ArticlesViewContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ArticlesViewHeader = styled.header`
  ${defaultBar};
  font-size: 30px;
  color: #ffffff;
  position: relative;
  
  @media(max-width: 600px) {
    & {
      font-size: 18px;
    }
  }
`;

export const ArticleTitle = styled.div`
  margin: auto;
  padding: 0 64px 0 10px;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArticleSearchInput = styled.input`
  margin: auto 64px;
  padding: 0 10px;
  font-size: 30px;
  color: white;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  max-width: 100%;
  width: 100%;
  
  @media(max-width: 600px) {
    & {
      margin-left: 10px;
    }
  }
`;


export const ArticleSearchButton = styled.button`
  ${defaultButton};
  height: 40px;
  width: 40px;
  position: absolute;
  right: 15px;
  top: 12px;
  border-radius: 50%;
  background-image: ${props => props.isSearching ? 'url("/icons/close.svg")' : 'url("/icons/search.svg")'}; ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
`;

export const ArticleSearchResults = styled.div`
  position: absolute;
  width: 100%;
  top: 64px;
  background-color: white;
`;

export const ArticleSearchResult = styled.div`
  max-width: 100vw;
  font-size: 20px;
  padding: 10px 10px;
  text-align: center;
  color: black;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.2s linear 0s;
  
  &:hover {
    background-color: #f0f8ff;
  }
  
  &:active {
    background-color: #e2eaf1;
  }
`;

export const ArticlesViewBody = styled.div`
  max-height: 100%;
  overflow: auto;
  width: 100%;
`;

export const ArticlesViewFooter = styled.footer`
  ${defaultBar};
  margin: auto auto 0;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const FooterPageIndex = styled.div`
  margin: auto auto auto 15px;
  font-size: 18px;
  color: white;
`;

export const FooterNavigationButtons = styled.div`
  margin: auto 0 auto auto;
`;

export const NavigationButton = styled.button`
  margin: auto 15px auto 0;
  ${defaultButton};
  padding: 5px 10px;
  border-radius: 5px;
`;