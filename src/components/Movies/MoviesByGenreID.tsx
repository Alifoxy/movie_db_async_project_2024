import React, {FC, PropsWithChildren, useEffect} from "react";
import {useParams} from "react-router-dom";
import {MovieByParams} from "./MovieByParams";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import {MoviesDiv} from "../Style/MainStyledComponents";

interface IProps extends PropsWithChildren {
}

const GetMoviesByGenre: FC<IProps> = () => {
    const {moviesByGenre} = useAppSelector(state => state.movies)
    const {genre_id} = useParams()
    const dispatch = useAppDispatch()

    
    const with_genres = genre_id


    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenreId({with_genres}))
    }, [dispatch, with_genres])

    return (
        <MoviesDiv>
            <div className={'movies_block'}>
                {moviesByGenre.map(movie => <MovieByParams key={movie.id} Movie={movie}/>)}
            </div>
        </MoviesDiv>
    );
};

export {GetMoviesByGenre};