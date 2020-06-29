import MockData from '../../mock-data/data.json';
import { ADD_PRODUCT_TO_CART } from '../Actions/types';

const [laptops, cameras, accessories] = MockData


const initialState = {
    products: MockData[0].accessories[0]
}

console.log("Home Reducer", MockData);

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                state
            }

        default:
            return state;
    }
}