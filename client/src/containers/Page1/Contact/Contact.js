import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
import { Form, Input, TextArea, Message } from 'semantic-ui-react';
import { checkValidity } from '../../../shared/utility';


import * as actions from '../../../store/actions';
import classes from './Contact.css';
import SendButton from '../../../components/UI/Button/SendButton/SendButton';
import Spinner from '../../../components/UI/Spinner/Spinner';


const Contact = props => {

    const {intl: {formatMessage}} = props;

    const messages = defineMessages({
        firstName: {
            id:'contact.firstName',
            defaultMessage: 'First Name'
        },
        lastName: {
            id:'contact.lastName',
            defaultMessage: 'Last Name'
        },
        email: {
            id:'contact.email',
            defaultMessage: 'Email'
        },
        phone: {
            id:'contact.phone',
            defaultMessage: 'Phone Number'
        },
        subject: {
            id:'contact.subject',
            defaultMessage: 'Subject'
        },
        message: {
            id:'contact.message',
            defaultMessage: 'Message'
        },
        btSend: {
            id:'contact.btSend',
            defaultMessage:'Send'
        },
        title: {
            id: 'contact.title',
            defaultMessage: "Let's discuss about your project"
        },
        successHeader: {
            id: 'contact.successHeader',
            defaultMessage: 'Email successfully sent'
        },
        successMessage: {
            id: 'contact.successMessage',
            defaultMessage: 'I will answer you as soon as possible'
        },
        errorHeader: {
            id: 'contact.errorHeader',
            defaultMessage: 'An error occurs'
        },
        errorMessage: {
            id: 'contact.errorMessage',
            defaultMessage: 'Please accept my apologize - I invite you to refresh the page and try again'
        }
    });

    const [sent, setSent] = useState( false );

    const [formData, setFormData] = useState({
        firstName : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                minLenght: 1
            },
            required: true,
            placeholder: formatMessage(messages.firstName),
        },
        lastName : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                minLenght: 1
            },
            required: true,
            placeholder: formatMessage(messages.lastName),
        },
        email : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                isEmail: true
            },
            required: true,
            placeholder: formatMessage(messages.email),
        },
        phone : {
            value: '',
            valid: true,
            touched: false,
            placeholder: formatMessage(messages.phone),
        },
        subject : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                minLenght: 1
            },
            required: true,
            placeholder: formatMessage(messages.subject),
        },
        message : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                minLenght: 1
            },
            required: true,
            placeholder: formatMessage(messages.message),
        }
    });

    const localChangeHandler = ( event, identifier) => {
        setFormData({...formData, [identifier]: {...formData[identifier], value: event.target.value, touched: true}})
    }

    const isValidHandler = ( event, identifier ) => {
        const valid = checkValidity( event.target.value, formData[identifier].rules);
        setFormData({...formData, [identifier]: {...formData[identifier], valid: valid}})
    }

    const isAllValidHandler = () => {
        let valid = false;

        Object.keys(formData).forEach( element => 
        {
            const elem = formData[element];
            if (elem.touched)
            {
                if ( elem.valid ) valid = true;
                else return false;
            }
        });

        return valid;
    }

    const sendHandler = () => {
        const data = {
            replyTo: formData.email.value,
            subject: formData.subject.value,
            message: `<div>New request received from : </div>
                        <p>${formData.firstName.value}</p>
                        <p>${formData.lastName.value}</p>
                        <p>email: ${formData.email.value}</p>
                        <p>phone: ${formData.email.value}</p>
                        <div> message: ${formData.message.value} </div>
                        `
        }
        
        props.onSendEmail( data );
        setSent( true );
    }

    const formElement = ( identifier, type ) => {
        const data = formData[identifier];
        return data ?
        <Form.Field 
            required={data.required}
            control={type}
            value={data.value}
            onChange={( event ) => localChangeHandler( event, identifier)}
            onBlur={( event ) => isValidHandler( event, identifier)}
            label={data.placeholder} 
            placeholder={data.placeholder} 
            error={!data.valid} />
            : null
    };

    const form = (
        <Form inverted>
            <Form.Group widths='equal'>
                {formElement( 'firstName', Input )}
                {formElement( 'lastName', Input )}
             </Form.Group>
             <Form.Group widths='equal'>
                {formElement( 'email', Input )}
                {formElement( 'phone', Input )}
             </Form.Group>
            {formElement( 'subject', Input )}
            {formElement( 'message', TextArea )}
            <SendButton disabled={!isAllValidHandler()} style={{marginTop: '20px'}} onClick={sendHandler}>{formatMessage(messages.btSend)}</SendButton>
        </Form>
    );

    const formSuccess = (
        <Form success>
            <Message 
                success 
                header={formatMessage(messages.successHeader)}
                content={formatMessage(messages.successMessage)} />
        </Form>
    );

    const formError = (
        <Form error>
            <Message 
                error 
                header={formatMessage(messages.errorHeader)} 
                content={formatMessage(messages.errorMessage)} />
        </Form>
    );


    return (
        <div className={classes.Contact} id='contact'>
            <div className={classes.Wrapper}>
                <div className={classes.Info}>
                    {formatMessage(messages.title)}
                </div>
                <div className={classes.Form}>
                    {
                        !sent 
                            ? form
                            : props.loading 
                                ? <Spinner />
                                : props.email === 'Sended'
                                    ? formSuccess
                                    : formError
                    }
                    
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        email: state.main.email,
        loading: state.main.loading.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendEmail: ( data ) => dispatch(actions.sendEmail( data ))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( injectIntl( Contact ));