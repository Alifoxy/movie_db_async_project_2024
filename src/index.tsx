import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {RouterProvider} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from "./router";
import {store} from "./store";
import {CustomBody} from "./components/Style/MainStyledComponents";
import MyThemeProvider from "./components/Theme Switcher/ThemeChanger";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

    <Provider store={store}>
        <MyThemeProvider>
            <CustomBody>
                <div className={"outer_div"}>
                    <RouterProvider router={router}/>
                </div>
            </CustomBody>
        </MyThemeProvider>
    </Provider>



);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
