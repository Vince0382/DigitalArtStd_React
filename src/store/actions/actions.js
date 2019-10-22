import * as actiontypes from './actionTypes';

export const showMobileMenu = () => {
    return {
        type: actiontypes.SHOW_MOBILE_MENU
    };
}

export const sendEmail = ( data ) => {
    return {
        type: actiontypes.SEND_EMAIL,
        data: data
    };
}

export const actionStarted = ( target ) => {
    return {
        type: actiontypes.ACTION_STARTED,
        target: target
    };
}

export const actionSuccess = ( target, data ) => {
    return {
        type: actiontypes.ACTION_SUCCESS,
        target: target,
        responseData: data
    };
}

export const actionFailed = ( target, error ) => {
    return {
        type: actiontypes.ACTION_FAILED,
        target: target,
        error: error
    };
}

export const changeControlsColor = ( color ) => {
    return {
        type: actiontypes.CHANGE_CONTROLS_COLOR,
        color: color
    };
}