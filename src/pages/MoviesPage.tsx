import {GetGenres, Movies, MoviesForm} from "../components";
import {Outlet} from "react-router-dom";
import React from "react";
import {CustomBody} from "../components/Style/MainStyledComponents";
import {OuterDiv} from "../components/Style/MainStyledComponents";

const MoviesPage = () => {
    return (
        <CustomBody>
            <div className={'outer_div'}>
                <Movies/>
            </div>
        </CustomBody>

        // {/*<OuterDiv></OuterDiv>*/}
    );
};

export {MoviesPage};