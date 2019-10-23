import React, { useState } from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
//import { Form, Input, TextArea, Message } from 'semantic-ui-react';
import { checkValidity } from '../../../shared/utility';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Alert,
    Spinner
  } from "reactstrap";


import * as actions from '../../../store/actions';

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
            defaultMessage:'Send Message'
        },
        title: {
            id: 'contact.title',
            defaultMessage: "You have an idea, a project or just want to meet us ?"
        },
        option1: {
            id: 'contact.option1',
            defaultMessage: "Find us at the office"
        },
        option2: {
            id: 'contact.option2',
            defaultMessage: "Give us a ring"
        },
        successHeader: {
            id: 'contact.successHeader',
            defaultMessage: 'Email successfully sent!'
        },
        successMessage: {
            id: 'contact.successMessage',
            defaultMessage: 'Thank you very much for contacting us. We will answer you shortly'
        },
        errorHeader: {
            id: 'contact.errorHeader',
            defaultMessage: 'Something went wrong'
        },
        errorMessage: {
            id: 'contact.errorMessage',
            defaultMessage: 'Please accept our apologize - We invite you to refresh the page and try again'
        }
    });

    const [sent, setSent] = useState( false );

    const [formData, setFormData] = useState({
        firstName : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                minLength: 1
            },
            required: true,
            config: {
                type: 'text',
            },
            placeholder: formatMessage(messages.firstName),
        },
        lastName : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                minLength: 1
            },
            required: true,
            config: {
                type: 'text',
            },
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
            config: {
                type: 'email',
            },
            placeholder: formatMessage(messages.email),
        },
        subject : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                minLength: 1
            },
            required: true,
            config: {
                type: 'text',
            },
            placeholder: formatMessage(messages.subject),
        },
        message : {
            value: '',
            valid: true,
            touched: false,
            rules: {
                minLength: 1
            },
            required: true,
            config: {
                type: 'textarea',
                rows: 6,
            },
            placeholder: formatMessage(messages.message),
        }
    });

    const localChangeHandler = ( event, identifier) => {
        setFormData({...formData, [identifier]: {...formData[identifier], value: event.target.value, touched: true}})
    }

    const isValidHandler = ( event, identifier ) => {
        const valid = checkValidity( event.target.value, formData[identifier].rules);
        setFormData(
            {
                ...formData, 
                [identifier]: {
                    ...formData[identifier], 
                    valid: valid,
                    config: {
                        ...formData[identifier].config,
                        valid: valid,
                        invalid: !valid
                    }
                }
            }
        )
    }

    const isAllValidHandler = () => {
        let valid = false;

        for (let element in formData)
        {
            if ( formData[element].touched && formData[element].valid ) valid = true;
            else return false
        }

        return valid;
    }

    const sendHandler = ( event ) => {
        event.preventDefault();

        const data = {
            replyTo: formData.email.value,
            subject: formData.subject.value,
            message: `<div>New request received from : </div>
                        <p>Name: ${formData.firstName.value} ${formData.lastName.value.toUpperCase()}</p>
                        <p>Email: ${formData.email.value}</p>
                        <div>Message: ${formData.message.value} </div>
                        `
        }

        props.onSendEmail( data );
        setSent( true );
    }

    const formElement = inputIdentifier => (
        <FormGroup className="label-floating">
            <label className="control-label">
                {formData[inputIdentifier].placeholder}
            </label>
            <Input
                placeholder={formData[inputIdentifier].placeholder}
                onChange={( event ) => localChangeHandler( event, inputIdentifier)}
                onBlur={( event ) => isValidHandler( event, inputIdentifier)}
                value={formData[inputIdentifier].value}
                {...formData[inputIdentifier].config}
            />
        </FormGroup>
    )

    const form = (
        <Form id="contact-form" method="post" role="form">
            <CardBody>
                <Row>
                    <Col md="6">
                        { formElement('firstName')}
                    </Col>
                    <Col md="6">
                        { formElement('lastName') }
                    </Col>
                </Row>
                { formElement('email') }
                { formElement('subject') }
                { formElement('message') }
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="6">
                        <Button
                            className="pull-right"
                            color="primary"
                            type="button"
                            disabled={!isAllValidHandler()}
                            onClick={sendHandler}
                        >
                            { formatMessage( messages.btSend ) }
                        </Button>
                    </Col>
                    <Col md="3">
                    </Col>
                </Row>
            </CardBody>
        </Form>
    )

    const formSuccess = (
        <Alert color="success">
            <h4 className="alert-heading">{formatMessage(messages.successHeader)}</h4>
            <p>{formatMessage(messages.successMessage)}</p>
        </Alert>
    );

    const formError = (
        <Alert color="danger">
            <h4 className="alert-heading">{formatMessage(messages.errorHeader)}</h4>
            <p>{formatMessage(messages.errorMessage)}</p>
        </Alert>
    );



    return (

        <div className="section section-contactus cd-section" id="contact-us" style={{background: '#282725'}}>
        {/* ********* CONTACT US 1 ********* */}
            <div
            className="contactus-1 section-image"
            style={{
                backgroundImage:
                "url(" + require("../../../assets/img/sections/rawpixel-comm.jpg") + ")"
            }}
            >
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="10">
                            <Card className="card-contact no-transition">
                                <CardTitle className="text-center" tag="h3">
                                    {formatMessage( messages.title )}
                                </CardTitle>
                                <Row>
                                    <Col className="ml-auto" md="5">
                                        <CardBody>
                                            <div className="info info-horizontal">
                                                <div className="icon icon-info">
                                                    <i className="nc-icon nc-pin-3" />
                                                </div>
                                                <div className="description">
                                                    <h4 className="info-title">
                                                        {formatMessage( messages.option1 )}
                                                    </h4>
                                                    <p>
                                                    Via Annia Faustina, 56  <br />
                                                    00153 Rome, <br />
                                                    Italy
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="info info-horizontal">
                                                <div className="icon icon-danger">
                                                    <i className="nc-icon nc-badge" />
                                                </div>
                                                <div className="description">
                                                    <h4 className="info-title">
                                                        {formatMessage( messages.option2 )}
                                                    </h4>
                                                    <p>
                                                    Digital Art Studio<br />
                                                    +39 331 305 6476 <br />
                                                    Mon - Fri, 8:00-18:00
                                                    </p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col className="mr-auto my-auto" md="5">
                                    {
                                        !sent 
                                            ? form
                                            : props.loading 
                                                ? <Spinner type="grow" color="primary" />
                                                : props.email === 'Sended'
                                                    ? formSuccess
                                                    : formError
                                    }
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
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