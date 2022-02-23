import { types } from "../types/types";

const initialState = {
    menuOpen: false,
}

export const menuReducer = ( state = initialState, action:any ) => {
    switch (action.type) {
        case types.openMenu:
            return {
                ...state,
                menuOpen: true
            }
        case types.closeMenu:
            return {
                ...state,
                menuOpen: false
            }
        default:
            return state;
    }
}