import React, { useReducer } from "react";
import axios from "axios";
import ToggleContext from "./ToggleContext";
import ToggleReducer from "./ToggleReducer";
import { TOGGLE_SIDEBAR } from "../types";

export const ToggleState = (props) => {
    const initialState = {
        showSideBar: false,
        boothNumber: 0,
        type: 'exhibition'
    };

    const [state, dispatch] = useReducer(ToggleReducer, initialState);

    // Toggle Side Bar
    const toggleSideBar = (boothNumber, type) => {
        dispatch({
            type: TOGGLE_SIDEBAR,
            payload: {
                showSideBar: !state.showSideBar,
                boothNumber,
                type
            },
        });
    };

    return (
        <ToggleContext.Provider
            value={{
                showSideBar: state.showSideBar,
                boothNumber: state.boothNumber,
                type: state.type,
                toggleSideBar,
            }}
        >
            {props.children}
        </ToggleContext.Provider>
    );
};
