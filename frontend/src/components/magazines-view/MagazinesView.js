import React from 'react';
import {MagazinesViewContainer, MagazinesViewFooter, MagazinesViewHeader, MagazineTitle} from "./MagazinesViewStyles";

function MagazinesView() {
    return (
        <MagazinesViewContainer>
            <MagazinesViewHeader>
                <MagazineTitle>Title</MagazineTitle>
            </MagazinesViewHeader>
            <MagazinesViewFooter>

            </MagazinesViewFooter>
        </MagazinesViewContainer>
    );
}

export default MagazinesView;
