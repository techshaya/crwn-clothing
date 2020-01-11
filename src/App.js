import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
const mapStateToProps = ({user})=>
{
   return(
   {
      currentUser:user.currentUser,
   })
}
const mapDispatchToProps =(dispatch) =>
{
   return({setCurrentUser:(user)=>dispatch(setCurrentUser(user))})
}
const HatsPage =() =>
{
	return(<div><h1>HATS PAGE</h1></div>)
}
class App extends React.Component{
   // constructor()
   // {
   //     super();
   //     this.state ={
   //      currentUser:null
   //     }
   // }
   unsubscribeFromAuth = null
   componentDidMount()
   {
       const {setCurrentUser} = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth) =>{

        if(userAuth)
        {
           const userRef = await createUserProfileDocument(userAuth);
           userRef.onSnapshot(snapShot =>
           {
              //console.log(snapShot)
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
        setCurrentUser({userAuth})
        
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
             <Route path='/shop' component={ShopPage} />
             {/*<Route exact path='/signin' component={SignInAndSignUpPage} /> */}
             <Route exact path='/signin' render ={()=>this.props.currentUser ?(<Redirect to='/' />):(<SignInAndSignUpPage />) } />
            </Switch> 
          </div>
        
    
      );
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
 