import { ADD_TO_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";
export   function addToCart (product) {
return {
    type:  ADD_TO_CART,
    data: product
}

}

export   function removeFromCart (product) {
    return {
    type:  REMOVE_FROM_CART,
        data: product
    }
    
    }