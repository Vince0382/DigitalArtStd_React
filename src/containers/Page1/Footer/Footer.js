import React, { useState, Suspense } from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import * as actions from '../../../store/actions';

import classes from './Footer.css';
import SocialBar from '../../../components/SocialBar/SocialBar';
import logo from '../../../assets/images/Digital_small.svg';
import privacyPolicy from '../../../components/PrivacyPolicy/PrivacyPolicy';
import cookiePolicy from '../../../components/CookiePolicy/CookiePolicy';

const Footer = props => {
    const color = "white";

    const {intl: {formatMessage}} = props;

    const messages = defineMessages({
        rights: {
            id: 'footer.rights',
            defaultMessage: 'All Rights Reserved'
        },
        privacyPolicy: {
            id: 'footer.privacyPolicy',
            defaultMessage: 'Privacy Policy'
        },
        cookiePolicy: {
            id: 'footer.cookiePolicy',
            defaultMessage: 'Cookie Policy'
        }
    })

    const [modalContent, setModalContent] = useState({
        title: '',
        content: ''
    });
    const [showModal, setShowModal] = useState();

    const setPrivacyPolicyModal = () => {

        setAndShowModal( formatMessage( messages.privacyPolicy), privacyPolicy( props.language ));
    }

    const setCookiePolicyModal = () => {

        setAndShowModal( formatMessage( messages.cookiePolicy), cookiePolicy( props.language ));
    }

    const setAndShowModal = ( message, cmp ) => {
        const ContentComponent = React.lazy(() => cmp )
        setModalContent({
            title : message,
            content: <Suspense fallback={<Loader active />}><ContentComponent /></Suspense>
        });
        setShowModal( true );
    }

    const hiddenStyle = props.showMobileMenu ? { display: 'none'} : null 

    return (
        <div className={classes.Footer} style={{color: color, ...hiddenStyle}} id="footer">

            <Modal isOpen={showModal} size={'lg'} scrollable toggle={() => setShowModal( false )}>
                <ModalHeader toggle={() => setShowModal( false )}>{modalContent.title}</ModalHeader>
                <ModalBody>{modalContent.content}</ModalBody>
            </Modal>

            <div className={classes.Logo}>
                <SVG src={logo} />
            </div>
            <div className={classes.Container}>

            </div>
            
            <SocialBar className={classes.SocialBar} size="20px"/>

            <div className={classes.MobileNav}>
                <Link style={{color: color }} to="/terms">Terms and Services</Link>
                <Link style={{color: color}} to="/privacy">Privacy Policy</Link>
            </div>

            <div className={classes.Flex}>
                <p className={classes.FlexLeft} onClick={setPrivacyPolicyModal}>{formatMessage( messages.privacyPolicy )}</p>
                <p className={classes.FlexRight} onClick={setCookiePolicyModal}>{formatMessage( messages.cookiePolicy )}</p>
            </div>

            <div className={classes.Copyright}>© Digital Art Studio - All Rights Reserved {(new Date()).getFullYear()}</div>
        </div>

    );
}


const mapStateToProps = state => {
    return {
        language : state.main.language,
        showMobileMenu : state.main.showMobileMenu
    }
}
export default connect( mapStateToProps )( injectIntl( Footer ));