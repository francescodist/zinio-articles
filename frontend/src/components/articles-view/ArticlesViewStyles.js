import styled, {css} from "styled-components";

export const defaultBar = css`
  height: 64px;
  flex-shrink: 0;
  width: 100vw;
  background-color: #1091bd;
  display: flex;
`;

export const defaultButton = css`
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