

const privacyPolicy = language => {
    let privacyComponent = null

    switch ( language )
        {
            case 'it': 
            {
                privacyComponent =  import('./PrivacyPolicyIt');
                break;
            }
            default : 
            {
                privacyComponent = import('./PrivacyPolicyEn');
                break;
            }
        }

    return privacyComponent;
}

export default privacyPolicy