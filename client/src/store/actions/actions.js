import * as actiontypes from './actionTypes';

export const showModal = () => {
    return {
        type: actiontypes.SHOW_MODAL
    };
}

export const showMobileMenu = () => {
    return {
        type: actiontypes.SHOW_MOBILE_MENU
    };
}

export const sendMail = (data) => {
    return {
        type: actiontypes.SEND_MAIL,
        data: data
    }
}

export const sendMailStarted = () => {
    return {
        type: actiontypes.SEND_MAIL_STARTED
    };
}

export const sendMailSuccess = () => {
    return {
        type: actiontypes.SEND_MAIL_SUCCESS
    }
}

export const sendMailFailure = (err) => {
    return {
        type: actiontypes.SEND_MAIL_FAILURE,
        error: err
    }
}

export const setTextColor = (color) => {
    return {
        type: actiontypes.SET_TEXT_COLOR,
        color: color
    }
}

export const lock = () => {
    return {
        type: actiontypes.LOCK
    }
}

export const unLock = () => {
    return {
        type: actiontypes.UNLOCK
    }
}

export const setCurrentMainSection = (section) => {
    return {
        type: actiontypes.SET_CURRENT_MAIN_SECTION,
        section: section
    }
}



