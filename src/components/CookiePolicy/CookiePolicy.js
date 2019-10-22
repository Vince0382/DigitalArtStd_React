

const cookiePolicy = language => {
    let cookieComponent = null

    switch ( language )
        {
            case 'it': 
            {
                cookieComponent =  import('./CookiePolicyIt');
                break;
            }
            default : 
            {
                cookieComponent = import('./CookiePolicyEn');
                break;
            }
        }

    return cookieComponent;
}

export default cookiePolicy