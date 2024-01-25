import { ADD_TO_CART } from "./constants";

const IntialState = [];
export const reducer = (state= IntialState,action ) =>{

    switch(action.type){

        case ADD_TO_CART:
            return [...state, action.data]
            default: return state;
    }  
}