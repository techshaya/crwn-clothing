import userActionTypes from './user.constants';

export const googleSignInStart = () =>
{
	return(
	{
		type: userActionTypes.GOOGLE_SIGNIN_START
	})

}
export const googleSignInSuccess = (user) =>
{
   return(
   {
   	  type:userActionTypes.GOOGLE_SIGNIN_SUCCESS,
   	  payload:user
   })
}
export const SignInSuccess = (user) =>
{
   return(
   {
   	  type:userActionTypes.SIGNIN_SUCCESS,
   	  payload:user
   })
}
export const SignInFailure =(error) =>
{
	return({
		type:userActionTypes.SIGNIN_FAILURE,
		payload:error
	})
}
export const googleSignInFailure =(error) =>
{
	return({
		type:userActionTypes.GOOGLE_SIGNIN_FAILURE,
		payload:error
	})
}
export const emailSignInStart = (emailAndPassword )=>
{
	return(
	{
		type: userActionTypes.EMAIL_SIGNIN_START,
		payload: emailAndPassword
	})

}
export const emailSignInSuccess = (user) =>
{
   return(
   {
   	  type:userActionTypes.EMAIL_SIGNIN_SUCCESS,
   	  payload:user
   })
}
export const emailSignInFailure =(error) =>
{
	return({
		type:userActionTypes.EMAIL_SIGNIN_FAILURE,
		payload:error
	})
}
export const checkUserSession=()=>
{
	return(
	{
		type:userActionTypes.CHECK_USER_SESSION
	})
}
export const signOutStart =()=>
{
	return({
		type:userActionTypes.SIGN_OUT_START
	})
}
export const signOutSuccess =()=>
{
	return({
		type:userActionTypes.SIGN_OUT_SUCCESS
	})
}
export const signOutFailure =(error)=>
{
	return({
		type:userActionTypes.SIGN_OUT_FAILURE,
		payload:error
	})
}
export const signUpStart =(userCredentials) =>
{
    return({
    	type:userActionTypes.SIGN_UP_START,
    	payload:userCredentials
    })
}
export const SignUpSuccess = ({user,additionalData}) =>
{
   return(
   {
   	  type:userActionTypes.SIGN_UP_SUCCESS,
   	  payload:{user,additionalData}
   })
}
export const signUpFailure =(error) =>
{
	return({
		type:userActionTypes.SIGN_UP_FAILURE,
		payload:error
	})
}