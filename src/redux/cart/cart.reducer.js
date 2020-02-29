	import {TOGGLE_CART_HIDDEN,ADD_ITEM,CLEAR_ITEM_FROM_CART,REMOVE_ITEM,CLEAR_CART} from './cart.constants';
import {addItemToCart,removeItemFromCart} from './cart.utils';
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
        case CLEAR_ITEM_FROM_CART:
               return({...state,cartItems:state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)})
		case REMOVE_ITEM:
		      return({...state,cartItems:removeItemFromCart(state.cartItems,action.payload)})
		case CLEAR_CART:
		       return({...state,cartItems:[]})
		default:
		   return state;
	}
}

export default CartReducer;