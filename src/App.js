import React,{useEffect} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import {checkUserSession} from './redux/user/user.actions';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import {connect} from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selectors';
import {selectShopCollections} from './redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';

const mapStateToProps = createStructuredSelector(
{
    currentUser:selectCurrentUser,
    collections:selectShopCollections
})

const HatsPage =() =>
{
	return(<div><h1>HATS PAGE</h1></div>)
}
const JacketsPage =() =>
{
  return(<div><h1>JACKETS PAGE</h1></div>)
}
const App = ({checkUserSession,currentUser,collections}) =>
{
    useEffect(() => {
                 checkUserSession()
               }, [checkUserSession])
     
       
          
  
   
  
       return (
          <div>
             <Header />
            <Switch>
             <Route exact path='/' component={Homepage} />
             <Route path='/hats' component={HatsPage} />
             <Route path='/jackets' component={JacketsPage} />
             <Route path='/shop' component={ShopPage} />
             <Route exact path='/checkout' component={CheckoutPage} />
             {/*<Route exact path='/signin' component={SignInAndSignUpPage} /> */}
             <Route exact path='/signin' render ={()=>currentUser ?(<Redirect to='/' />):(<SignInAndSignUpPage />) } />
            </Switch> 
          </div>
        
    
      );
  
}
const mapDispatchToProps=(dispatch) =>
{
  return(
  {
      checkUserSession:()=>dispatch(checkUserSession())
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
 