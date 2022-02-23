import { types } from "../types/types";

const initialState = {
    cartOpen: false,
}

export const cartReducer = ( state = initialState, action:any ) => {
    switch (action.type) {
        case types.openCart:
            return {
                ...state,
                cartOpen: true
            }
        case types.closeCart:
            return {
                ...state,
                cartOpen: false
            }
        default:
            return state;
    }
}