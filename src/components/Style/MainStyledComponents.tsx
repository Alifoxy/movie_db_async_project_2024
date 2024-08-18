import React from 'react';

import styled from 'styled-components';
import theme from 'styled-theming';


export const backgroundBody = theme("theme", {
    // light: `linear-gradient(0deg, rgba(43,255,115,1) 0%, rgba(113,247,255,1) 50%) no-repeat fixed`,
    // light:`linear-gradient(0deg, rgba(44,255,43,1) 0%, rgba(150,240,255,1) 50%) no-repeat fixed`,
    dark: `linear-gradient(0deg, rgba(44,255,43,1) 0%, rgba(0,0,0,1) 50%) no-repeat fixed`,
    light: `linear-gradient(0deg, rgba(44,255,43,1) 0%, rgba(255,253,185,1) 50%) no-repeat fixed`,
    // dark:`linear-gradient(0deg, rgba(43,255,115,1) 0%, rgba(0,0,0,1) 50%) no-repeat fixed`,
    // dark: `linear-gradient(0deg, rgba(255, 94, 0, 1) 0%, rgba(0, 0, 0, 1) 50%) no-repeat fixed`,
});

export const CustomBody = styled.body`
    display: inline-flex;
    justify-content: center;
    background: ${backgroundBody};
    width: 100%;
    align-content: center;
    margin: 0;
    
`

export const OuterDiv = styled.div`
    height: 100vh;
    margin:0;
    
`