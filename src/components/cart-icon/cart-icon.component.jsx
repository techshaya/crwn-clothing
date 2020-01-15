import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
// const mapStateToProps =({cart:{cartItems}}) =>
// {
// 	return(
// 	{
//          ItemCount:cartItems.reduce((accumulatedQty,cartItem)=>accumulatedQty+cartItem.quantity,0)
// 	})
// }
// const mapStateToProps =(state) =>
// {
// 	return(
// 	{
//          ItemCount:selectCartItemsCount(state)
// 	})
// }
const mapStateToProps = createStructuredSelector({
	ItemCount:selectCartItemsCount
})
const mapDispatchToProps =(dispatch) =>
{
	return({
           toggleCartHidden:() =>dispatch(toggleCartHidden())
	})
}
const CartIcon = ({toggleCartHidden,ItemCount})=>
{
	console.log('itemcount',ItemCount)
	return(<div className="cart-icon" onClick={toggleCartHidden}>
		        <ShoppingIcon className="shopping-icon" />
		        <span className="item-count">{ItemCount}</span>
	       </div>)
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);