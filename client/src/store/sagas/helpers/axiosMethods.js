import { put } from 'redux-saga/effects';
import axios from 'axios';


import { apiEndPoint } from '../../../shared/app_config';


export function* get ( functionName, stateObject, startAction, successAction, failAction, data, force ) {
    yield put(startAction( stateObject ));

    const url = apiEndPoint + functionName 
    try {
        const response = yield axios.get( url );
        if ( response.data && response.data !== "" ) {
            console.log ("Received : ", response);
            yield put(successAction( stateObject, response.data ));
        }
        else {
            yield put(failAction(stateObject, true));
        }
            
    } catch (err) {
            yield put(failAction(stateObject, err));
    }
    
}

export function* post ( functionName, stateObject, startAction, successAction, failAction, data ) {
    yield put(startAction(stateObject));

    const url = apiEndPoint + functionName;
    console.log( data );
    try {
        const response = yield axios.post( url, data );
        
        if (response.status === 200) {
            if (response.data && response.data !== ''){
                yield put( successAction( stateObject, response.data) );
            }
            else {
                yield put( successAction( stateObject, data ) );
            }
             
        }
        else yield put( failAction( stateObject, true ) );
            
    } catch ( err ) {;
        yield put( failAction( stateObject, err.response ) );
    }

}

