import React from 'react';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from  '../cart-icon/cart-icon.component';
import CartDropdown from  '../cart-dropdown/cart-dropdown.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
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
const Header =({currentUser,hidden}) =>
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
		                      
				          	  currentUser ? <OptionLink as ='div' onClick={()=>auth.signOut()} >Sign Out</OptionLink>:
				          	  	<OptionLink to="/signin">Sign In</OptionLink>
				          }
		       </OptionsContainer>
		       {
                  hidden ? (null):(<CartDropdown />)
		       }
		       
		    </HeaderContainer>)
}
export default connect(mapStateToProps)(Header);