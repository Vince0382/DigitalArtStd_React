import React from 'react';

import classes from './AnimatedImages.css';

const animatedImage = props => {

    const images = (
        props.images.map( ( image, index ) => (
            <img key={`animatedImage${index}`} className={`${classes.Image} ${props.currentImage === image ? classes.Active : null}`} src={image} alt='' />
        ))
    );

    return (
        <React.Fragment>
            {images}
        </React.Fragment>
    );
}

export default animatedImage;