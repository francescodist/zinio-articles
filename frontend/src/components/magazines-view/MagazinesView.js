import React from 'react';
import styled from "styled-components";

function MagazinesView() {
    return (
        <MagazinesViewContainer>
            <MagazinesViewHeader>
                <MagazineTitle>Title</MagazineTitle>
            </MagazinesViewHeader>
        </MagazinesViewContainer>
    );
}

const MagazinesViewContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const MagazinesViewHeader = styled.header`
  height: 64px;
  width: 100%;
  background-color: #1091bd;
  display: flex;
  font-size: 30px;
  color: #ffffff;
`;

const MagazineTitle = styled.div`
  margin: auto;
`;

export default MagazinesView;
