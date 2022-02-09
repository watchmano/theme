import { TOGGLE_SIDEBAR } from "../types";

export default (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                showSideBar: action.payload.showSideBar,
                boothNumber: action.payload.boothNumber,
                type: action.payload.type
            };

        default:
            return state;
    }
};
