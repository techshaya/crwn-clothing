import userActionTypes from './user.constants';
const Initial_State = 
{
	 currentUser:null,
	 error:null
	
}
export const UserReducer =(state=Initial_State,action={})=>
{
	switch(action.type)
	{
		case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
		case userActionTypes.EMAIL_SIGNIN_SUCCESS:
		      return({...state,
		      	        currentUser:action.payload,
		      	        })
		case userActionTypes.GOOGLE_SIGNIN_FAILURE:
		case userActionTypes.EMAIL_SIGNIN_FAILURE:
		case userActionTypes.SIGN_UP_FAILURE:
		     return({
		     	...state,
		     	error:action.payload
		     })
        case userActionTypes.SIGNIN_SUCCESS:
		      return({...state,
		      	        currentUser:action.payload,
		      	        })
		case userActionTypes.SIGN_OUT_SUCCESS:
		    return({
		    	...state,currentUser: null,
        error: null
		    })
 
		case userActionTypes.SIGNIN_FAILURE:
		case userActionTypes.SIGN_OUT_FAILURE:
		     return({
		     	...state,
		     	error:action.payload
		     })

		default:
		   return state;
	}

}
export default UserReducer;