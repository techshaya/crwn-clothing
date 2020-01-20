import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';
const logger = createLogger();
const middlewares = [logger];
export const store = createStore(rootReducer,applyMiddleware(...middlewares))
export const persistor = persistStore(store)
export default {store,persistor};