import { put } from 'redux-saga/effects';
import axios from 'axios';
// import nodemailer from 'nodemailer';

import * as actions from '../actions/index';

export function* sendMailSaga(action) {

    yield put(actions.sendMailStarted());

    const firstName = action.data.formData.firstName;
    const lastName = action.data.formData.lastName;
    const email = action.data.formData.email;
    const subject = action.data.formData.subject;
    const message = action.data.formData.message;
    console.log(action.data.formData);
    try {
        const response = yield axios({
            method: "POST", 
            url:"http://localhost:3001/send", 
            data: {
                firstName: firstName,  
                lastName: lastName, 
                email: email,
                subject: subject,  
                message: message
            }
            });

        console.log(response.data.responseCode);
        if (response.data.responseCode) {
            throw new Error(response.data);
        } 

        yield put(actions.sendMailSuccess());

    } catch (error) {
        yield put(actions.sendMailFailure(error));
    }
}


