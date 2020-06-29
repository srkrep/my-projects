import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';



const rootReducer = combineReducers({
    homeState: homeReducer,
    cartState: cartReducer,
    authState: authReducer
})


export default rootReducer;