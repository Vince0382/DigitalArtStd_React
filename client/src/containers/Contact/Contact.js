import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Contact.css';
import ContactImg from '../../assets/images/contact.svg';
import Input from '../../components/UI/Input/Input';
import SendButton from '../../components/UI/Button/SendButton/SendButton';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

class Contact extends Component {
    state = {
        Form: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name *'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name *'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail *'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Subject *'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Message *'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    sendHandler = ( event ) => {
        event.preventDefault();
  
        const formData = {};
        for (let formElementIdentifier in this.state.Form) {
            formData[formElementIdentifier] = this.state.Form[formElementIdentifier].value;
        }
        const data = {
            formData: formData
        }
        console.log(data);
        this.props.onSendDataHandler(data);
        
    }

    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedFormElement = updateObject(this.state.Form[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.Form[inputIdentifier].validation),
            touched: true
        });
        const updatedForm = updateObject(this.state.Form, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({Form: updatedForm, formIsValid: formIsValid});
    }

    render () {

        const formElementsArray = [];
        for (let key in this.state.Form) {
            formElementsArray.push({
                id: key,
                config: this.state.Form[key]
            });
        }

        let btText = "Send";
        if (this.props.sending) {
            btText = "Sending";
        }

        let form = (
            <form onSubmit={this.sendHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        borderColor= 'white'
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}

                <div className={classes.SendButton}>
                    <SendButton title="Please fill in the form" disabled={!this.state.formIsValid}>{btText}</SendButton>
                </div>
            </form>
        );

        if (this.props.error) {         
            form = (
                <div className={classes.Error}>
                    <p style={{color: 'red', width: '100%'}}>Something went wrong - PLease reload the page and try again</p>
                </div>
            );
        }

        if (this.props.sent) {
            form = (
                <div className={classes.Success}>
                    <p>Message sent ! Thanks a lot for contating us.</p>
                    <p>We will get back to you very soon.</p>
                </div>
            );
        }

        return (
            <div className={classes.MainDiv}>
                <div className={classes.Content}>
                <h2>Let's Work Together</h2>
                <p>Feel free to contact us for any new project</p>
                {form}
                </div>
                <div className={classes.Image}>
                    <img src={ContactImg}/>   
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sending: state.sending,
        error: state.err,
        sent: state.sent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendDataHandler: (data) => dispatch(actions.sendMail(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Contact);