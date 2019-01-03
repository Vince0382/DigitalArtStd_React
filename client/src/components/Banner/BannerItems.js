import React from 'react';

import BannerItem from './BannerItem/BannerItem';
import csm from '../../assets/images/csm_c.png';
import csp from '../../assets/images/csp_c.png';
import cspo from '../../assets/images/cspo_c.png';
import microsoft from '../../assets/images/microsoft_c.png';
import dev from '../../assets/images/dev_c.png';
import prince2 from '../../assets/images/prince2_c.png';
import spc from '../../assets/images/spc_c.png';


import classes from './BannerItems.css';

const bannerItems = (props) => {
    let size = "70px";
    if(props.isMobile()) size = "35px";

    return (
        <div className={classes.BannerItems}>
            <div className={classes.Content}>
                <BannerItem size={size} image={csm}/>
                <BannerItem size={size} image={csp}/>
                <BannerItem size={size} image={cspo}/>
                <BannerItem size={size} image={microsoft}/>
                <BannerItem size={size} image={dev}/>
                <BannerItem size={size} image={prince2}/>
                <BannerItem size={size} image={spc}/>
            </div>
        </div>
    );
}

export default bannerItems;