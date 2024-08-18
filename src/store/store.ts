import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer, postersReducer} from "./slices";
import {themeReducer} from "./slices/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        movies: moviesReducer,
        genres: genresReducer,
        posters: postersReducer
    }
})

export {
    store
}