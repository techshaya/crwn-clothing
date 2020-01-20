import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//import {persistGate} from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'; //telling i want to use local storage as the default storage in our window browser.
const persistConfig ={
	key:'root',
	storage:storage,
	whitelist:['cart'] //contains the reducer that we want to persist
}

export const rootReducer  = combineReducers({user:userReducer,cart:CartReducer,directory:directoryReducer,shop:shopReducer})
export default persistReducer(persistConfig,rootReducer); //exporting rootreducer with persistconfig on top of it