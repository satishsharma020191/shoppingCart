import React from 'react';
const Button = (props) => {
    const { className = "", ariaLabel = "", onClick = "", type = "", ariaDescribedby = "" } = props;
    return (<button type={type} className={className} aria-label={ariaLabel} onClick={onClick}
        aria-describedby={ariaDescribedby}
    >{props.children}</button>);
}

export default Button;