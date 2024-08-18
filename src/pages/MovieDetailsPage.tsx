import {GetMovieDetails} from "../components";
import {CustomBody} from "../components/Style/MainStyledComponents";
// import {OuterDiv} from "../components/Style/MainStyledComponents";

const MovieDetailsPage = () => {
    return (
        // <CustomBody></CustomBody>
        <div className={'outer_div'}>
            <hr/>
            <GetMovieDetails/>
            <hr/>
        </div>
    );
};

export {MovieDetailsPage};