import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
// const mapStateToProps = ({user:{currentUser}})=>
// {
//    return(
//    {
//       currentUser:currentUser,
//    })
// }
const mapStateToProps = createStructuredSelector(
{
    currentUser:selectCurrentUser
})
const mapDispatchToProps =(dispatch) =>
{

   return({setCurrentUser:(curuser)=>dispatch(setCurrentUser(curuser))})
}
const HatsPage =() =>
{
	return(<div><h1>HATS PAGE</h1></div>)
}
const JacketsPage =() =>
{
  return(<div><h1>JACKETS PAGE</h1></div>)
}
class App extends React.Component{
   // constructor()
   // {
   //     super();
   //     this.state ={
   //      currentUser:null
   //     }
   // }
   unsubscribeFromAuth =()=>(null)
   componentDidMount()
   {
       const {setCurrentUser} = this.props;
       auth.onAuthStateChanged(async(userAuth) =>{

        if(userAuth)
        {
           const userRef = await createUserProfileDocument(userAuth);
           userRef.onSnapshot(snapShot =>
           {
              console.log(snapShot)
              setCurrentUser({
                   id:snapShot.id,...snapShot.data()
              })
              // this.setState({
              //   currentUser:{
              //     id:snapShot.id,...snapShot.data()
              //   }
              // },()=> console.log(this.state)) 
              
           })
          
        }
        console.log('userAuth',userAuth)
        setCurrentUser(userAuth)
        
         // this.setState({currentUser:user});
         //console.log(user)
      })
   } 
   componentWillUnmount()
   {
     this.unsubscribeFromAuth()
   }
   render()
   {
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
             <Route exact path='/signin' render ={()=>this.props.currentUser ?(<Redirect to='/' />):(<SignInAndSignUpPage />) } />
            </Switch> 
          </div>
        
    
      );
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
 