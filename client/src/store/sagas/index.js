import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
    sendEmailSaga
} from "./saga";


export function* watcher() {

    yield takeEvery ( actionTypes.SEND_EMAIL, sendEmailSaga )

}