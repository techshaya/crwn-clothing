import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from  '../cart-item/cart-item.component';
import {connect} from  'react-redux';
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
// const mapStateToProps=({cart:{cartItems}})=>
// {
//     return(
//     {
//     	 cartItems:cartItems
//     })
// }
// const mapStateToProps=(state)=>
// {
//     return(
//     {
//          cartItems:selectCartItems(state)
//     })
// }
const mapStateToProps= createStructuredSelector({
    cartItems:selectCartItems
})
const CartDropdown =({cartItems,history,dispatch}) =>
{
     return(<div className="cart-dropdown">
     	         <div className="cart-items">
                    {
                      cartItems.length ? (cartItems.map(cartItem =>{
                                 return <CartItem key={cartItem.id} item={cartItem}/>
                    	                      }
                            )):(<span className="empty-message">Your cart is empty</span>)
                    }
     	         </div>
     	         <CustomButton onClick={()=>{history.push('/checkout');
                                             dispatch(toggleCartHidden())}}>Go to Checkout</CustomButton> 
     		</div>)
}

export default withRouter(connect(mapStateToProps)(CartDropdown));