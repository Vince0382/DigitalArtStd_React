import React from 'react';
import { Col } from 'reactstrap';

import SeeMoreButton from '../../../../../components/UI/Button/SeeMoreButton/SeeMoreButton';

const ServiceComponent = props => {
    return (
        <Col className='ml-auto' sm="5">
            <div className="info">
                <div className="icon">
                    <i aria-hidden={true} className={`nc-icon ${props.iconClass}`} />
                </div>
                <h4 className="title">{props.title}</h4>
                <p>{props.description}</p>
                {
                    props.link
                        ?   <SeeMoreButton link={props.link} />
                        :   null
                }
            </div>
        </Col>
    )
}

export default ServiceComponent;