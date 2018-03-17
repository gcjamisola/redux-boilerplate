import initialState from '../initialState';
import { root as actionTypes } from '../actions/actionTypes';

export default (state = initialState.users, action) => {
    switch(action.type) {
        case actionTypes.user.USER_SELECTED_FULFILLED:
            return {
                ...state,
                activeUser: action.payload
            }
            break;
    }

    return state;
}

