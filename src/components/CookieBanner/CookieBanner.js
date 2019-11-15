import React, { useState, Suspense } from 'react';
import Banner from 'react-cookie-banner';
import { injectIntl, defineMessages } from 'react-intl';
import cookiePolicy from '../CookiePolicy/CookiePolicy';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';

const CookieBanner = props => {

    const { intl: {formatMessage}} = props;

    const messages = defineMessages({
        message: {
            id:'cookieBanner.message',
            defaultMessage: "We use cookies to guarantee users the employment of its site features and offering a better user experience. By continuing to browse the site you're agreeing to our use of cookies."
        },
        moreInfo: {
            id: 'cookieBanner.moreInfo',
            defaultMessage: 'More information on our use of cookies'
        },
        btAccept: {
            id: 'cookieBanner.accept',
            defaultMessage: 'Accept'
        },
        modalTitle: {
            id: 'cookieBanner.modalTitle',
            defaultMessage: 'Cookie Policy'
        }
    })

    const styles = {
        banner: {
          height: 'auto',
          minHeight: 57,
          fontSize: '12px',
          fontWeight: 600,
          background: 'rgba(52, 64, 81, 0.88)',
          position: 'fixed',
          bottom: '0'
        },
        button: {
          border: '1px solid white',
          borderRadius: 4,
          width: 'auto',
          height: 32,
          lineHeight: '32px',
          background: 'transparent',
          color: 'white',
          fontSize: '14px',
          fontWeight: 600,
          opacity: 1,
          right: 20,
          marginTop: -18
        },
        message: {
          display: 'block',
          padding: '10px',
          lineHeight: 1.3,
          textAlign: 'left',
          width: 'calc(100% - 110px)',
          color: 'white'
        },
        link: {
          textDecoration: 'none',
          fontWeight: 'bold',
          cursor: 'pointer'
        }
    }

    const [showModal, setShowModal] = useState();

    const CookieComponent = React.lazy(() => cookiePolicy( props.language ));

    return (
    <div>
        <Modal isOpen={showModal} scrollable size={'lg'} toggle={() => setShowModal( false )}>
            <ModalHeader>{formatMessage( messages.modalTitle )}</ModalHeader>
            <ModalBody><Suspense fallback={<p></p>}><CookieComponent /></Suspense></ModalBody>
        </Modal>
        <Banner
            styles={styles}
            message={formatMessage( messages.message )}
            link={<span onClick={() => setShowModal( true )}>{formatMessage( messages.moreInfo )}</span>}
            buttonMessage={formatMessage( messages.btAccept )}
            dismissOnScroll={false}
            dismissOnClick={false}
        />
    </div>
    );
}



export default injectIntl( CookieBanner );