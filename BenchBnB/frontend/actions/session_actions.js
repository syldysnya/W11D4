import * as APIUtilSession from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = arr => ({ // arr = []
    type: RECEIVE_SESSION_ERRORS,
    errors: arr // errors: []
})

export const login = user => dispatch => {
    return APIUtilSession.login(user)
        .then(dispatch(receiveCurrentUser(user)))
};

export const logout = () => dispatch => {
    return APIUtilSession.logout()
        .then(dispatch(logoutCurrentUser()))
};

export const signup = user => dispatch => {
    return APIUtilSession.signup(user)
        .then(dispatch(receiveCurrentUser(user)))
};

