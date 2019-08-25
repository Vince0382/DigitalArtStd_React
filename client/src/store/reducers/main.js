import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    textColor: 'white',
    showMobileMenu: false,
    email: null,
    loading : {},
    error: {}
}



export const successHandler = ( state, action ) => {
    const updatedError = updateObject(state.error, { [action.target] : null });
    const updatedLoading = updateObject(state.loading, { [action.target] : false });   
    return updateObject( state, {[action.target] : action.responseData, error: updatedError, loading: updatedLoading });
}

export const startedHandler = ( state, action ) => {
    const updatedError = updateObject(state.error, { [action.target] : null });
    const updatedLoading = updateObject(state.loading, { [action.target] : true });
    return updateObject( state, { error: updatedError, loading: updatedLoading } );
}

export const failureHandler = ( state, action ) => {
    const updatedError = updateObject(state.error, { [action.target] : action.error });
    const updatedLoading = updateObject(state.loading, { [action.target] : false });
    return updateObject( state, { error: updatedError, loading: updatedLoading } );
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MOBILE_MENU :
        return {
            ...state,
            showMobileMenu: !state.showMobileMenu
        }
        case actionTypes.ACTION_STARTED : return startedHandler( state, action );
        case actionTypes.ACTION_SUCCESS : return successHandler( state, action );
        case actionTypes.ACTION_FAILED : return failureHandler( state, action );
        default : {
            return state;
        }
    }
}

export default reducer;

