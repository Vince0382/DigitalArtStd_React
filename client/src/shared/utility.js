
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = ( value, rules ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }

    return isValid;
}

export const isBetween = (elTop, elBottom, values, offsetTop, offsetBottom) => {

    if (!elTop || !elBottom || !values) return false;
    //console.log(values, values.length);
    const _offsetTop = offsetTop? offsetTop : 0;
    const _offsetBottom = offsetBottom? offsetBottom : 0;
    
    try {
        for (let i = 0; i < values.length; i++){
          //  console.log(values, values.length);
            const value = values[i];
            if (elTop + _offsetTop >= value[0] && elBottom + _offsetBottom <= value[1]) return true;
        };
    } catch (error) {
        console.log(error);
        return false;
    }

    return false;
}




export const getElementByLink = (hash) => {

    return document.getElementById(hash);
}

export const getOffsetTop = (el) => {

    let rect = null;

    if (el) {
        try {
            rect = el.getBoundingClientRect();
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return (rect.top + scrollTop);

        } catch (error) {
            return 0;
        }
    } 

    return 0;
}

export const scrollTo = (event, el, offset, toTop, callback) => {

    let element = [el];

    if(el.includes('#')){
        element = el.split('#');
    }
console.log(element, window.location.pathname);
    if(element[0] === window.location.pathname){
        event.preventDefault();
        event.stopPropagation();
    }

    window.setTimeout(() => {
        let elementPosition = 0

            if (!toTop) {
                const hash = getElementByLink(element[1]);
                elementPosition = getOffsetTop(hash) - offset;
            }

            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: 'smooth'
            });

            if (callback) callback();

        }, 0);

  }
