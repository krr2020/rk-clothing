import userActionTypes from "./constants";

export const googleSignInStart = () => ({
	type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
	type: userActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFailure = (error) => ({
	type: userActionTypes.SIGN_IN_FAILURE,
	payload: error,
});

export const emailSignInStart = (emailPassword) => ({
	type: userActionTypes.EMAIL_SIGN_IN_START,
	payload: emailPassword,
});

export const checkUserSession = () => ({
	type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
	type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
	type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
	type: userActionTypes.SIGN_OUT_FAILURE,
	payload: error,
});

export const signUpStart = (userCredentials) => ({
	type: userActionTypes.SIGN_UP_START,
	payload: userCredentials,
});

export const signUpSuccess = ({ user, addonData }) => ({
	type: userActionTypes.SIGN_UP_SUCCESS,
	payload: { user, addonData },
});

export const signUpFailure = (error) => ({
	type: userActionTypes.SIGN_UP_FAILURE,
	payload: error,
});
