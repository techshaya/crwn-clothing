import {TOGGLE_CART_HIDDEN,ADD_ITEM} from './cart.constants';
import {addItemToCart} from './cart.utils';
const InitialState ={
	hidden:true,
	cartItems:[]
}

export const CartReducer=(state=InitialState,action={})=>
{
     switch(action.type)
	{
		case TOGGLE_CART_HIDDEN :

		      return(Object.assign({},state,{hidden:!state.hidden}))
        case ADD_ITEM:
               return({...state,cartItems:addItemToCart(state.cartItems,action.payload)})
              //return({...state,cartItems:[...state.cartItems,action.payload]})
		default:
		   return state;
	}
}

export default CartReducer;