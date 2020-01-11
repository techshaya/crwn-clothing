import React from 'react';
import './sign-in.styles.scss';
import FormInput from  '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils.js';
class SignIn extends React.Component
{
	constructor(props)
  {
    super(props);
    this.state = {
          email:'',
          password:''
        }
  }
	
   handleSubmit = async(event) =>
   {

       event.preventDefault();
       const {email,password} = this.state;
       try 
       {
          await auth.signInWithEmailAndPassword(email,password)
                .then(this.setState({email:'',password:''}))
             
       } 
       catch(e)
      {
         // statements
         console.log('error signing in!!!',e.message);
       }
       
       
   }
   handleChange =(event) =>
   {
     const {value,name} = event.target
     this.setState({[name]:value})
     
   }
  

   render()
   {
            const {handleSubmit,handleChange} =this;
           return(
           	 
           	  <div className="sign-in">
           	     <h2 className="title">I already have an account </h2>
           	     <span className="title">Sign in with your email and password</span>
           	     <form onSubmit={handleSubmit}>
           	        <FormInput name="email" type="email" value={this.state.email} onChange={handleChange} label='Email' required />
           	        
           	        <FormInput name="password" type="password" value ={this.state.password} onChange={handleChange} label="Password" required />
           	        <div className="buttons">
                         <CustomButton type="submit">Sign In</CustomButton>
                         <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>  
                    </div>
           	        
           	     </form>
           	  </div>)
   }
}
export default SignIn;