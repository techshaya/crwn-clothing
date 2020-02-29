 import {takeLatest,put,call,all} from 'redux-saga/effects';
import userActionTypes from './user.constants';
import {SignInSuccess,SignInFailure,signOutSuccess,signOutFailure,SignUpSuccess,signUpFailure} from './user.actions';
import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils';
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}
export function* onGoogleSignInStart()
{
	yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START,signInWithGoogle)
}

export function* onEmailSignInStart()
{
	yield takeLatest(userActionTypes.EMAIL_SIGNIN_START,signInWithEmail)
}
export function* isUserAuthenticated()
{
    try {
    	const userAuth = yield getCurrentUser();
    	if (!userAuth) return;
    	yield getSnapshotFromUserAuth(userAuth)
    } catch(error) {
    	// statements
    	yield put(SignInFailure(error))
    }
}
export function* onCheckUserSession()
{
	yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}
export function* signOut()
{
	try {
		yield auth.signOut()
		yield put(signOutSuccess())
	} catch(error) {
		yield put(signOutFailure(error))
	}
} 
export function* onSignOutStart()
{
	yield takeLatest(userActionTypes.SIGN_OUT_START,signOut)
}
export function* signUp({payload:{displayName,email,password}})
{
    try {
    	console.log('Email',email)
    	console.log('Password',password)
    	const {user} = yield auth.createUserWithEmailAndPassword(email,password);
    	yield put(SignUpSuccess({user,displayName}))
    } catch(error) {
    	yield put(signUpFailure(error))
    }
}
export function* onSignUpStart()
{
	yield takeLatest(userActionTypes.SIGN_UP_START,signUp)
}
export function* signInAfterSignUp({payload:{user,additionalData}})
{
    yield getSnapshotFromUserAuth(user,additionalData);
}
export function* onSignUpSuccess()
{
	yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}
export function* userSagas()
{
	yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onSignOutStart),call(onSignUpStart),call(onSignUpSuccess)])
}