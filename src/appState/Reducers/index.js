import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import checkOutReducer from './checkOutReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['homeState', 'authState', 'checkOutState'] ,
    blacklist: ['cartState']
  }

const rootReducer = combineReducers({
    homeState: homeReducer,
    cartState: cartReducer,
    authState: authReducer,
    checkOutState: checkOutReducer
})


export default persistReducer(persistConfig, rootReducer)