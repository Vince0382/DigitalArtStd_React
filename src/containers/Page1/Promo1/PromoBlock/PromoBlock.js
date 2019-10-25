import React from 'react';

const PromoBlock = props => (
    <div className="info info-horizontal">
        <div className={`icon ${props.iconType}`}>
            <i aria-hidden={true} className={`nc-icon ${props.iconClass}`} />
        </div>
        <div className="description">
            <h4 className="info-title">{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
);

export default PromoBlock;