import React from 'react';

import styled from 'styled-components';
import theme from 'styled-theming';
import dark from "./images/background.png"
import light from "./images/background-light.png"

export const backgroundBody = theme("theme", {
    // light: `linear-gradient(0deg, rgba(43,255,115,1) 0%, rgba(113,247,255,1) 50%) no-repeat fixed`,
    // light:`linear-gradient(0deg, rgba(44,255,43,1) 0%, rgba(150,240,255,1) 50%) no-repeat fixed`,
    dark: `linear-gradient(0deg, rgba(44,255,43,1) 0%, rgba(0,0,0,1) 50%) no-repeat fixed`,
    light: `linear-gradient(0deg, rgba(44,255,43,1) 0%, rgba(255,253,185,1) 50%) no-repeat fixed`,
    // dark:`linear-gradient(0deg, rgba(43,255,115,1) 0%, rgba(0,0,0,1) 50%) no-repeat fixed`,
    // dark: `linear-gradient(0deg, rgba(255, 94, 0, 1) 0%, rgba(0, 0, 0, 1) 50%) no-repeat fixed`,
});

export const backgroundMini = theme("theme", {
    dark: "#939393" ,
    light: "lightgray",
});

export const borderMini = theme("theme", {
    dark: "lightgray" ,
    light: "whitesmoke",
});

export const backgroundImage = theme("theme", {
    dark:  dark,
    light: light,
});

export const CustomBody = styled.body`
    display: inline-flex;
    justify-content: center;
    background: ${backgroundBody};
    width: 100%;
    align-content: center;
    margin: 0;
    
`

export const MiniBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 300px;
    height: 560px;
    margin:10px;
    background: ${backgroundMini};
`

export const MiniInnerBlock = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 250px;
    height: 490px;
    margin: 10px 5px 20px 5px;
    padding: 10px;
    background-color: ${borderMini};
    border-radius: 20px;
`
export const MiniBorder = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 540px;
    /*border-right: 15px dashed #89ffcf;*/
    border-right: 15px dashed;
    /*border-right: 15px dashed #00ff9c;*/
    border-left: 15px dashed;
    border-color: ${borderMini};
`

export const MoviesDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 1280px;
    align-items: center;
    background-image: url(${backgroundImage});
    padding: 10px;
    border-radius: 20px;
    font-family: "Trebuchet MS", sans-serif;

`