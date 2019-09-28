import styled, {css} from "styled-components";

const defaultBar = css`
  height: 64px;
  width: 100%;
  background-color: #1091bd;
  display: flex;
`;

export const MagazinesViewContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MagazinesViewHeader = styled.header`
  ${defaultBar};
  font-size: 30px;
  color: #ffffff;
`;

export const MagazineTitle = styled.div`
  margin: auto;
`;

export const MagazinesViewFooter = styled.footer`
  ${defaultBar};
  margin: auto auto 0;
`;