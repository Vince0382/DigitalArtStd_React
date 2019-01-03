import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showModal: false,
    showMobileMenu: false,
    showPrivacy: false,
    showTerms: false,
    sending: false,
    sent: null,
    err: null,
    textColor: "rgb(7, 87, 119)",
    fixedTextColor: "rgb(7, 87, 119)",
    riseUpGreen : "linear-gradient(to bottom, rgba(201,222,150,1) 0%,rgba(8,107,55,1) 100%)",
    riseUpBlue : "linear-gradient(to bottom, rgba(2,163,223,1) 0%,rgba(6,42,82,1) 100%)",
    locked: false,
    currentMainSection: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL : 
            return {
                ...state,
                showModal: !state.showModal
            }
        case actionTypes.SHOW_PRIVACY : 
            return {
                ...state,
                showPrivacy: !state.showPrivacy
            }
        case actionTypes.SHOW_TERMS: 
            return {
                ...state,
                showTerms: !state.showTerms
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
        case actionTypes.LOCK : {
            return {
                ...state,
                locked: true
            }
        }
        case actionTypes.UNLOCK : {
            return {
                ...state,
                locked: false
            }
        }
        case actionTypes.SET_CURRENT_MAIN_SECTION : {
            return {
                ...state,
                currentMainSection: action.section
            }
        }

        default : {
            return state;
        }
    }
}

export default reducer;

