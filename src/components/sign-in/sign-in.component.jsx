import React,{useState} from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import {ButtonsBarContainer} from './sign-in.styles';
import FormInput from  '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';
const SignIn =({googleSignInStart,emailSignInStart})=>
{
	  const[userCredentials,setCredentials] = useState({email:'',password:''})
	  const {email,password} = userCredentials;
   const handleSubmit = async(event) =>
   {

       event.preventDefault();
      
       
      emailSignInStart(email,password)
       
       
   }
   const handleChange =(event) =>
   {
     const {value,name} = event.target
     setCredentials({...userCredentials,[name]:value})
     
   }
  

           return(
           	 
           	  <div className="sign-in">
           	     <h2 className="title">I already have an account </h2>
           	     <span className="title">Sign in with your email and password</span>
           	     <form onSubmit={handleSubmit}>
           	        <FormInput name="email" type="email" value={email} onChange={handleChange} label='Email' required />
           	        
           	        <FormInput name="password" type="password" value ={password} onChange={handleChange} label="Password" required />
           	        <ButtonsBarContainer>
                         <CustomButton type="submit">Sign In</CustomButton>
                         <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>  
                    </ButtonsBarContainer>
           	        
           	     </form>
           	  </div>)
  
}
const mapDispathToProps = (dispatch)=>
{
     return({
      googleSignInStart:() =>dispatch(googleSignInStart()),
         emailSignInStart:(email,password) =>dispatch(emailSignInStart({email,password}))
     })
     
         
     
}
export default connect(null,mapDispathToProps)(SignIn);