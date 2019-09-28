import React from 'react';
import {
    MagazinesViewBody,
    MagazinesViewContainer,
    MagazinesViewFooter,
    MagazinesViewHeader,
    MagazineTitle
} from "./MagazinesViewStyles";

function MagazinesView() {
    return (
        <MagazinesViewContainer>
            <MagazinesViewHeader>
                <MagazineTitle>Title</MagazineTitle>
            </MagazinesViewHeader>
            <MagazinesViewBody/>
            <MagazinesViewFooter>

            </MagazinesViewFooter>
        </MagazinesViewContainer>
    );
}

export default MagazinesView;
