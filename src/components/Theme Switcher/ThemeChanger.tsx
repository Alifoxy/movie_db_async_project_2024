import React, {FC, PropsWithChildren, useReducer} from "react";
import { ThemeProvider } from "styled-components";
import {useAppSelector} from "../../hooks";

interface IProps extends PropsWithChildren {
}

const MyThemeProvider : FC<IProps> = ({ children }) => {
    const {darkThemeEnabled} = useAppSelector(state => state.theme);

    return (
        <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
            {children}
        </ThemeProvider>
    );
};

export default MyThemeProvider;

