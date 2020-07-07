import MockData from '../../mock-data/data.json';
import { FILTER_ALL_TOYS, FILTER_SOFT_TOYS, FILTER_WOODEN_TOYS } from '../Actions/types';


const initialState = {
    products: MockData.toys,
}

console.log("Home Reducer", MockData.toys);

export default (state = initialState, action) => {
    switch (action.type) {
        case FILTER_ALL_TOYS:
            return {
                ...state,   
                products: MockData.toys
            }
        case FILTER_WOODEN_TOYS:
            let woodentoysFilter = MockData.toys.filter((toy) => {
                return toy.category == "wooden";
            })
            return {
                ...state,   
                products:woodentoysFilter
            }
        case FILTER_SOFT_TOYS:
            let softToysFilter = MockData.toys.filter((toy) => {
                return toy.category == "soft";
            })
            return {
                ...state,   
                products:softToysFilter
            }

        default:
            return state
    }
}