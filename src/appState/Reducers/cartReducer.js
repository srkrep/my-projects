import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QTY, REMOVE_QTY } from '../Actions/types';
import MockData from '../../mock-data/data.json';

const initialState = {
    items:[],
    itemsInCart: 0,
    totalPrice: 0
}

console.log("Cart Reducer", initialState)

export default (state = initialState, action) => {
    let itemSelected = ""
    console.log("Cart Reducer", itemSelected)
    switch (action.type) {  
        case ADD_TO_CART:
            itemSelected = MockData.toys.find(item => item.id === action.payload)
            itemSelected.qty += 1
            itemSelected.inCart = true
            console.log("::::::::::", itemSelected )
            return {
              ...state,
              items: {
                    ...state.items,
                    [action.payload]:itemSelected
                  },
              itemsInCart : state.itemsInCart += 1,
              totalPrice : state.totalPrice + itemSelected.price
            }
        case REMOVE_FROM_CART:
            itemSelected = MockData.toys.find(item => item.id === action.payload)
            let overallQty = itemSelected.qty
            itemSelected.qty = 0
            itemSelected.pname = ""
            itemSelected.image = ""
            itemSelected.price = itemSelected.price 
            itemSelected.inCart = false
            console.log(":::::::::: REMOVE", itemSelected )
            return {
                ...state,
                totalPrice : state.totalPrice - (overallQty * itemSelected.price),
                itemsInCart: state.itemsInCart - overallQty,
                items: {
                    ...state.items,
                    [action.payload]:itemSelected
                  },
                
            }
        case ADD_QTY:
            itemSelected = MockData.toys.find(item => item.id === action.payload)
            itemSelected.qty += 1
            return {
                ...state,
                totalPrice : state.totalPrice + itemSelected.price,
                itemsInCart: state.itemsInCart + 1,
                items: {
                    ...state.items,
                    [action.payload]:itemSelected
                }
            }
        case REMOVE_QTY:
            itemSelected = MockData.toys.find(item => item.id === action.payload)
            let updatedTotalPrice = 0;
            let updatedItemInCart = 0;
            if(itemSelected.qty <= 0){
                itemSelected.qty = 0
                updatedTotalPrice = state.totalPrice
                updatedItemInCart = state.itemsInCart
            }else{
                itemSelected.qty -= 1
                updatedTotalPrice = state.totalPrice - itemSelected.price
                updatedItemInCart = state.itemsInCart - 1
            }
            return {
                ...state,
                totalPrice : updatedTotalPrice,
                itemsInCart: updatedItemInCart,
                items: {
                    ...state.items,
                    [action.payload]:itemSelected
                }
            }
        default:
            return state;
    }
}