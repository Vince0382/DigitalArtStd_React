import React from 'react';

import classes from './Companies.css';

import Arcelor from '../../assets/images/arcelor.png';
import Eca from '../../assets/images/eca.png';
import Kpmg from '../../assets/images/kpmg.png';
import Nspa from '../../assets/images/nspa.png';

const companies = (props) => {
    return (
        <div className={classes.Main}>
            <div className={classes.Container}>
                <div className={classes.Companies}>
                    <img src={Arcelor} alt="" />
                    <img src={Eca} alt="" />
                    <img src={Kpmg} alt="" />
                    <img src={Nspa} alt="" />
                </div>
            </div>
        </div>
    );
}

export default companies;