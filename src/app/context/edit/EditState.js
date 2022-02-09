import React, { useReducer } from "react";
import axios from "axios";
import EditContext from "./EditContext";
import EditReducer from "./EditReducer";
import { SELECT_EXHIBITION, SWITCH_TO_EDIT } from "../types";

export const EditState = (props) => {
    const initialState = {
        exhibitionIndex: 0,
        editMode: false
    };

    const [state, dispatch] = useReducer(EditReducer, initialState);

    const selectExhibition = (exhibitionIndex) => {
        
        dispatch({
            type: SELECT_EXHIBITION,
            payload: {
                exhibitionIndex
            },
        });
    };

    const startEditMode = (editMode) => {
        
        dispatch({
            type: SWITCH_TO_EDIT,
            payload: {
                editMode
            },
        });
    };

    return (
        <EditContext.Provider
            value={{
                exhibitionIndex: state.exhibitionIndex,
                editMode: state.editMode,
                selectExhibition,
                startEditMode
            }}
        >
            {props.children}
        </EditContext.Provider>
    );
};
