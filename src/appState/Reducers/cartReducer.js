import {
    ADD_PRODUCT_TO_CART,

} from '../Actions/types';
// import MockData from '../../data/data.json';


// const productData = MockData.map((e) => {
//     return e
// })

// const newProductData = []

// const productData = Object.keys(MockData)

// const { laptops, cameras, accessories } = MockData
// // const allproducts = laptops.concat(cameras, accessories);
// const allproducts = new Set(...laptops, ...cameras, ...accessories);

// console.table("MOCK DATA @ REDUCER", Object.keys(allproducts))


const initialState = {
    cartNumbers: 0,
}

console.log("OOOOOOOOOO", initialState.products)

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {

            }

        default:
            return state;
    }
}