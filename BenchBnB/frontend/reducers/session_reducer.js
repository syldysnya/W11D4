import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullSession = {
    id: null
}

export const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.freeze({}, { id: action.user })
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}