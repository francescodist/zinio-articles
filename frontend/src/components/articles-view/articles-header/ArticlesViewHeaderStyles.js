import styled from "styled-components";
import {defaultBar, defaultButton} from "../ArticlesViewStyles";

export const ArticleHeader = styled.header`
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
  
  ::placeholder {
    color: rgba(255,255,255,0.5);
  }
  
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