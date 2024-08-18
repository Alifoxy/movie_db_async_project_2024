// import { createSlice } from '@reduxjs/toolkit'
// import {darkTheme} from "../../components/Theme Switcher/themes/themes";
// import {createReducer} from "@reduxjs/toolkit";

export const initialState = {};

export const TOGGLE_DARKTHEME = "TOGGLE_DARKTHEME";

const toggleDarkTheme = () => ({
    type: TOGGLE_DARKTHEME,
});

export const themeReducer = (state = { darkThemeEnabled: true }, action: { type: any; }) => {
    switch (action.type) {
        case TOGGLE_DARKTHEME:
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled};

        default:
            return state;
    }
};

// export const themeReducer = (state:any, action:any) => {
//     switch (action.type) {
//         case 'dark':
//             return {darkThemeEnabled:true};
//         case 'light':
//             return {darkThemeEnabled:false};
//         default:
//             return state;
//     }
// };

// пытаемся получить тему из локального хранилища браузера
// если там ничего нет, то пробуем получить тему из настроек системы
// если и настроек нет, то используем темную тему
// const getTheme = () => {
//     // const theme = `${window?.localStorage?.getItem('theme')}`
//     // if ([ 'light', 'dark' ].includes(theme)) return theme
//     //
//     // const userMedia = window.matchMedia('(prefers-color-scheme: light)')
//     // if (userMedia.matches) return 'light'
//     //
//     // return 'dark'
// }

// const initialState = getTheme()

// export const themeSlice = createSlice({
//     name: 'theme',
//     initialState,
//     reducers: {
//         set: (state, action) => action.payload,
//     },
// })

// export const { set } = themeSlice.actions
//