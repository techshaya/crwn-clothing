import React from 'react';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles';
// import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from  '../cart-icon/cart-icon.component';
import CartDropdown from  '../cart-dropdown/cart-dropdown.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';
// const mapStateToProps =({user:{currentUser},cart:{hidden}}) =>
// {
// 	console.log('currentUser',currentUser)
//     return({
//     	          currentUser:currentUser,
//     	          hidden:hidden

//             })
// }
const mapStateToProps =createStructuredSelector({
	currentUser:selectCurrentUser,
	hidden:selectCartHidden

})
const Header =({currentUser,hidden,signOutStart}) =>
{
	
	return(
		    <HeaderContainer>
		       <LogoContainer  to="/">
		           <Logo className="logo"  />
		       </LogoContainer>
		       <OptionsContainer>
				          <OptionLink to='/shop'>
				              SHOP
				          </OptionLink>
				           <OptionLink to='/contact'>
				              CONTACT
				          </OptionLink>
				          <CartIcon />
				          {
		                      
				          	  currentUser ? <OptionLink as ='div' onClick={signOutStart} >Sign Out</OptionLink>:
				          	  	<OptionLink to="/signin">Sign In</OptionLink>
				          }
		       </OptionsContainer>
		       {
                  hidden ? (null):(<CartDropdown />)
		       }
		       
		    </HeaderContainer>)
}
const mapDispatchToProps =(dispatch)=>
{
    return({
    	 signOutStart:()=>dispatch(signOutStart())
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);