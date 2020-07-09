import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import cartReducer from './cartReducer';
import authReducer from './authReducer';
// import homeReducer from './homeReducer';
import checkOutReducer from './checkOutReducer';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['homeState', 'authState', 'checkOutState', 'cartState']
  }

const rootReducer = combineReducers({
    cartState: cartReducer,
    authState: authReducer,
    checkOutState: checkOutReducer
})


export default persistReducer(persistConfig, rootReducer)