import React, { useReducer } from "react";
import axios from "axios";
import SideMenuContext from "./SideMenuContext";
import SideMenuReducer from "./SideMenuReducer"
import { SWITCH_SIDE_MENU } from "../types";

export const SideMenuState = (props) => {
    const initialState = {
        sideMenu: 'person',
    };

    const [state, dispatch] = useReducer(SideMenuReducer, initialState);

    const switchSideMenu = (menu) => {
        
        dispatch({
            type: SWITCH_SIDE_MENU,
            payload: {
                menu
            },
        });
    };

    return (
        <SideMenuContext.Provider
            value={{
                sideMenu: state.sideMenu,
                switchSideMenu
            }}
        >
            {props.children}
        </SideMenuContext.Provider>
    );
};
