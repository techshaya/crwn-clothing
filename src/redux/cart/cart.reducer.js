const InitialState ={
	hidden:true
}

export const CartReducer=(state=InitialState,action={})=>
{
     switch(action.type)
	{
		case 'TOGGLE_CART_HIDDEN' :

		      return(Object.assign({},state,{hidden:!state.hidden}))

		default:
		   return state;
	}
}

export default CartReducer;