//here we define all the application level states and define actions to make the change to the satate

export const initialState = {
    basket: []
}

//selector

export const getBasketTotal = (basket) => {
    console.log(basket)
    return(basket?.reduce((amount,item)=>item.price + amount,0))
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            return state;
    }

}

export default reducer;