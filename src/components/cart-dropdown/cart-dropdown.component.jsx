import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from  '../cart-item/cart-item.component';
import {connect} from  'react-redux';
import './cart-dropdown.styles.scss';
const mapStateToProps=({cart:{cartItems}})=>
{
    return(
    {
    	 cartItems:cartItems
    })
}
const CartDropdown =({cartItems}) =>
{
     return(<div className="cart-dropdown">
     	         <div className="cart-items">
                    {
                    	cartItems.map(cartItem =>{
                                 return <CartItem key={cartItem.id} item={cartItem}/>
                    	                      }
                            )
                    }
     	         </div>
     	         <CustomButton>Go to Checkout</CustomButton> 
     		</div>)
}

export default connect(mapStateToProps)(CartDropdown);