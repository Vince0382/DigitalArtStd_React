
import * as actions from '../actions';
import * as axiosActions from './helpers/axiosMethods'
import { apiMethods } from '../../shared/app_config';

export function* sendEmailSaga( payload ) {
    yield axiosActions.post(
        apiMethods.sendEmail,
        "email",
        actions.actionStarted,
        actions.actionSuccess,
        actions.actionFailed,
        payload.data);
}


