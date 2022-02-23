import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { homeReducer } from "./homeReducer";
import { menuReducer } from "./menuReducer";
import { productReducer } from './productReducer';

export const rootReducer = combineReducers({
    Menu: menuReducer,
    Cart: cartReducer,
    Home: homeReducer,
    Product: productReducer,
});