import React, {FC, PropsWithChildren} from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../store/slices/themeSlice";
import {useAppSelector} from "../../hooks";
import Switch from "@mui/material/Switch";


interface IProps extends PropsWithChildren {
}


const ThemeSwitcher: FC<IProps> = () => {
    const {darkThemeEnabled} = useAppSelector(state => state.theme);
    const dispatch = useDispatch();

    return (
            <div className={'switcher_div'}>
                <h5>Change theme</h5>
                <Switch onChange={() => dispatch({type: TOGGLE_DARKTHEME})} checked={!darkThemeEnabled} className={'switch'}/>
            </div>

    );
}
export default ThemeSwitcher;

