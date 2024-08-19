import React, {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../../interfaces";
import {SetRating, useAppSelector} from "../../hooks";
import {MiniBlock, MiniBorder, MiniInnerBlock} from "../Style/MainStyledComponents";


interface IProps extends PropsWithChildren {
    Movie:IMovie
}
const Movie: FC<IProps> = ({Movie}) => {
    const {current_page} = useAppSelector(state => state.movies);
    const {title, vote_average, poster_path} = Movie;

    const toDetails = () => {
        const mov_id = Movie.id;
        navigate(`${current_page}/details/${mov_id}`)
    };

    const navigate = useNavigate()

    return (
        <MiniBlock>
            <MiniBorder>
                <MiniInnerBlock>
                    <div className={'mini_movie_title'}>{title}</div>
                    <div>
                        <img className={'main_poster'} src={`https://image.tmdb.org/t/p/original${poster_path}`}
                             alt={'poster'}/>
                    </div>
                    <SetRating rating={vote_average}/>
                    <div>
                        <button onClick={toDetails} className={'det_button'}>Details...</button>
                    </div>
                </MiniInnerBlock>
            </MiniBorder>
        </MiniBlock>
    );
};

export {Movie};