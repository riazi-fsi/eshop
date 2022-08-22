//here we define all the application level states and define actions to make the change to the satate

import { act } from "react-dom/test-utils"

export const initialState = {
    basket: []
}

//selector

export const getBasketTotal = (basket) => {

    return(basket?.reduce((amount,item)=>item.price + amount,0))
}

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            case "REMOVE_FROM_BASKET":
            
                const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)
           
            let newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1)
            }else{
                console.warn(`can ot remove product  id ${action.id}`)
            }
            return{
                ...state,
                basket:newBasket
            }
        default:
            return state;
    }

}

export default reducer;