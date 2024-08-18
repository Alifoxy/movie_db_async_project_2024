import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import '../Style/images/user_icon.png'
import React from "react";
import {CustomBody} from "../Style/MainStyledComponents";
import ThemeSwitcher from "../Theme Switcher/ThemeSwitcher";
//import {Switcher} from "../Theme Switcher/Switcher";

const Header = () => {

    return (
        <CustomBody>
            <div className={"outer_div"}>
                <div className={css.Header}>
                    <div className={'links1'}>
                        <NavLink to={'movies/1'}>Movies</NavLink>
                        <NavLink to={'search'}>Search</NavLink>
                    </div>
                    <div className={'links2'}>
                        <div className={'user'}>
                            <div>Hello, user!</div>
                            <img src={require('../Style/images/user_icon.png')} alt={'user icon'} width={50}
                                 height={50}/>
                        </div>
                        <ThemeSwitcher/>
                    </div>
                </div>
            </div>
        </CustomBody>

    );
};

export {Header};