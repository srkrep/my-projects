import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    ADD_QTY, REMOVE_QTY, 
    FILTER_ALL_TOYS, 
    FILTER_SOFT_TOYS, 
    FILTER_WOODEN_TOYS  } from '../Actions/types';
import MockData from '../../mock-data/data.json';

const initialState = {
    itemsInCart: 0,
    totalPrice: 0,
    items:MockData.toys
}

// console.log("Cart Reducer", initialState)


export default (state = initialState, action) => {
    let itemSelected = ""
    switch (action.type) {
        case ADD_TO_CART:
            itemSelected = {...state.items[action.payload]}
            itemSelected.inCart = true
            itemSelected.qty +=1
            // console.log("Cart Reducer", itemSelected)
            return {
                ...state,
                itemsInCart: state.itemsInCart + 1,
                totalPrice: state.totalPrice + state.items[action.payload].price,
                items: {
                  ...state.items,
                  [action.payload]:itemSelected
                }
            }
        case REMOVE_FROM_CART:
            itemSelected = {...state.items[action.payload]}
            let overallQty = itemSelected.qty
            itemSelected.qty = 0
            itemSelected.inCart = false
            // console.log(":::::::::: REMOVE", itemSelected )
            return {
                ...state,
                itemsInCart: state.itemsInCart - overallQty,
                totalPrice : state.totalPrice - (overallQty * itemSelected.price),
                items: {
                    ...state.items,
                    [action.payload]:itemSelected
                },   
            }
        case ADD_QTY:
                itemSelected = {...state.items[action.payload]}
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
            itemSelected = {...state.items[action.payload]}
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
        case FILTER_ALL_TOYS:
            return {
                ...state,   
                items: MockData.toys
            }
        case FILTER_WOODEN_TOYS:
            let woodentoysFilter = MockData.toys.filter((toy) => {
                return toy.category == "wooden";
            })
            return {
                ...state,   
                items:woodentoysFilter
            }
        case FILTER_SOFT_TOYS:
            let softToysFilter = MockData.toys.filter((toy) => {
                return toy.category == "soft";
            })
            return {
                ...state,   
                items:softToysFilter
            }

        default:
            return state
    }
}

