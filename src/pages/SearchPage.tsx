import {GetGenres} from "../components";
import {Outlet} from "react-router-dom";
import {MoviesForm} from "../components";
// import {OuterDiv} from "../components/Style/MainStyledComponents";
import React from "react";
import {CustomBody} from "../components/Style/MainStyledComponents";

const SearchPage = () => {
    return (
        // <CustomBody></CustomBody>
            <div className={'outer_div'}>
                <GetGenres/>
                <MoviesForm/>
                <Outlet/>
            </div>


    );
};

export {SearchPage};