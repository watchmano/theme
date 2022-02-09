import { SWITCH_SIDE_MENU } from "../types";

export default (state, action) => {
    switch (action.type) {
        case SWITCH_SIDE_MENU:
            return {
                ...state,
                sideMenu: action.payload.sideMenu
            };

        default:
            return state;
    }
};
