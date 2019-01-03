import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* sendMailSaga(action) {

    yield put(actions.sendMailStarted());

    const firstName = action.data.formData.firstName;
    const lastName = action.data.formData.lastName;
    const email = action.data.formData.email;
    const subject = action.data.formData.subject;
    const message = action.data.formData.message;

    try {
       const response =  yield axios.post("https://us-central1-riseup-3eaf3.cloudfunctions.net/sendEmail", 
            {
                firstName: firstName,  
                lastName: lastName, 
                email: email,
                subject: subject,  
                message: message
            }
            );
        console.log(response);
        yield put(actions.sendMailSuccess());

    } catch (error) {
        yield put(actions.sendMailFailure(error));
    }
}


