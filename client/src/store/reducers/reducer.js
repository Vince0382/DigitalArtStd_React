import * as actionTypes from '../actions/actionTypes';

const initialState = {
    textColor: 'white',
    showMobileMenu: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MOBILE_MENU :
        return {
            ...state,
            showMobileMenu: !state.showMobileMenu
        }

        default : {
            return state;
        }
    }
}

export default reducer;

