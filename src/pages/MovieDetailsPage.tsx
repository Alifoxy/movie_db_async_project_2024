import {GetMovieDetails} from "../components";
import {CustomBody} from "../components/Style/MainStyledComponents";
// import {OuterDiv} from "../components/Style/MainStyledComponents";

const MovieDetailsPage = () => {
    return (
        <CustomBody>
            <div>
                <hr/>
                <GetMovieDetails/>
                <hr/>
            </div>
        </CustomBody>


    );
};

export {MovieDetailsPage};