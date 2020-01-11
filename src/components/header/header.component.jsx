import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
const mapStateToProps =(state) =>
{
    return({
    	          currentUser:state.user.currentUser,

            })
}
const Header =({currentUser}) =>
{
	return(
		    <div className="header">
		       <Link to="/">
		           <Logo className="logo"  />
		       </Link>
		       <div className="options">
		          <Link className="option" to='/shop'>
		              SHOP
		          </Link>
		           <Link className="option" to='/shop'>
		              CONTACT
		          </Link>

		          {

		          	  currentUser ? <div className="option"onClick={()=>auth.signOut()} >Sign Out</div>:
		          	  	<Link className="option" to="/signin">Sign In</Link>
		          }
		       </div>
		    </div>)
}
export default connect(mapStateToProps)(Header);