import { SELECT_EXHIBITION, SWITCH_TO_EDIT } from "../types";

export default (state, action) => {
    switch (action.type) {
        case SELECT_EXHIBITION:
            return {
                ...state,
                exhibitionIndex: action.payload.exhibitionIndex
            };
        case SWITCH_TO_EDIT:
            return {
                ...state,
                editMode: action.payload.editMode
            };

        default:
            return state;
    }
};
