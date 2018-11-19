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

export const getOffsetTop = (el) => {

    let rect = null;

    if (el) {
        try {
            rect = el.getBoundingClientRect();
        } catch (error) {
            return getOffsetTop (document.getElementById(el));
        }
  
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return (rect.top + scrollTop);
    } 

    return 0;
}

export const scrollTo = (el, offset, isTop) => {

    let elementPosition = getOffsetTop(el) - offset;
    
    if (isTop) {
      elementPosition = 0;
    }
    console.log(el, elementPosition);
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });

  }
