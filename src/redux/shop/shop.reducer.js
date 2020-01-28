import UPDATE_COLLECTIONS from './shop.constants';
import SHOP_DATA from './shop.data';
const INITIAL_STATE ={
	collections: null
}

export const shopReducer =(state=INITIAL_STATE,action={}) =>
{
   switch(action.type)
   {
   	  case UPDATE_COLLECTIONS:
   	        return{...state,collections:action.payload}

   	  default:
   	      return state;
   }
}

export default shopReducer;