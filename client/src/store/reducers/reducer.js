import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showModal: false,
    showMobileMenu: false,
    sending: false,
    sent: null,
    err: null,
    textColor: "rgb(7, 87, 119)",
    fixedTextColor: "rgb(7, 87, 119)"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL : 
            return {
                ...state,
                showModal: !state.showModal
            }
        case actionTypes.SHOW_MOBILE_MENU :
            return {
                ...state,
                showMobileMenu: !state.showMobileMenu
            }
        case actionTypes.SEND_MAIL_STARTED : {
            return {
                ...state,
                sending: true
            }
        }
        case actionTypes.SEND_MAIL_SUCCESS : {
            return {
                ...state,
                sending: false,
                sent: true
            }
        }
        case actionTypes.SEND_MAIL_FAILURE : {
            return {
                ...state,
                sending: false,
                err: action.error
            }
        }
        case actionTypes.SET_TEXT_COLOR : {
            return {
                ...state,
                textColor: action.color
            }
        }
        default : {
            return state;
        }
    }
}

export default reducer;

