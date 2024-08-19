import styled from 'styled-components';
import theme from 'styled-theming';
import dark from "./images/background.png"
import light from "./images/background-light.png"

export const backgroundImage = theme("theme", {
    dark:  dark,
    light: light,
});

export const backgroundDetails = theme("theme", {
    dark: "#939393" ,
    light: "lightgray",
});

export const backgroundInfo = theme("theme", {
    dark: "lightgray" ,
    light: "whitesmoke",
});

export const borderDetails = theme("theme", {
    dark: "#47ff3b" ,
    light: "#b1ffac",
});

export const DetailsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1280px;
    background-size: cover;
    padding: 10px;
    border-radius: 20px;
    font-family: "Trebuchet MS", sans-serif;
    color: #252525;
    background-image:url(${backgroundImage});
`

export const DetailsInnerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 1000px;
    padding: 10px;
    margin:10px;
    border-radius: 20px;
    background: ${backgroundDetails};
    border: 5px dashed;
    border-color:${borderDetails} ;
`
export const InfoDiv = styled.div`
    width: 940px;
    box-sizing: border-box;
    background-color: ${backgroundInfo};
    border-radius: 20px;
    padding: 20px;
    font-size: 18px;
    margin: 0 10px 10px 10px;
`
export const DescDiv = styled.div`
    width: 480px;
    margin: 0 10px 0 10px;
    box-sizing: border-box;
    background-color: ${backgroundInfo};
    border-radius: 20px;
    padding: 20px;
    font-size: 18px;
`

