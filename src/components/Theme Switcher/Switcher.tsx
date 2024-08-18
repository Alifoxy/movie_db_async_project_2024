// import React, {useContext} from "react";
// import Switch from "@mui/material/Switch";
// import {ThemeContext} from "../../hoc/ContextProvider";
// import {ThemeProvider} from "../../hoc/ContextProvider";
// import {darkTheme, lightTheme} from "./themes/themes";
//import {useThemeSwitcher} from "react-css-theme-switcher";


const Switcher = () => {
    // const { switcher, themes, currentTheme, status } = useThemeSwitcher();
    // const [isDarkMode, setIsDarkMode] = React.useState(false);
    // // const { theme, toggleTheme, isDark} = useContext(ThemeContext);
    // // const IsDark = ((previous: any) => {
    // //     switcher({ theme: previous ? themes.light : themes.dark });
    // //     return !previous;
    // // });
    // // const {currentTheme, status, switcher, themes} = useThemeSwitcher();
    // //
    //
    // if (status === 'loading') {
    //     return <div>Loading styles...</div>;
    // }
    //
    // const toggleDarkMode = () => {
    //     setIsDarkMode(previous => {
    //         switcher({ theme: isDarkMode ? themes.light : themes.dark });
    //         return !previous;
    //     });
    // };

    // const setTheme = () => {
    //     (theme === 'light'? 'dark' : 'light')
    //     const SetIsDark = (isDark => {
    //         switcher({ theme: isDark? theme.light : theme.dark });
    //         return !isDark;
    //     });
    //     console.log('IT WORKED')
    // };

        // const toggleTheme = () => {
        //     // if the theme is not light, then set it to dark
        //     if (theme === 'light') {
        //         setTheme('dark');
        //
        //     } else {
        //         setTheme('light');
        //     }
        // }
        //
        // const theme = {
        //     light: lightTheme,
        //     dark: darkTheme,
        //     // dark: '.public/dark.module.css',
        // };


    // return (
    //         // <ThemeProvider  {...theme === 'dark'? lightTheme: darkTheme} >
    //             <div className={'switcher_div'}>
    //                 <h5>Current theme: {currentTheme}</h5>
    //                 <Switch onChange={toggleDarkMode} checked={!currentTheme} className={'switch'}/>
    //             </div>
    //
    //         // </ThemeProvider>
    //     );
    };
export {Switcher}