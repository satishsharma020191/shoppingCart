import React from 'react';
const Button = (props) => {
    const { className, ariaLabel, onClick, buttonData } = props;
    return (<button className={className} aria-label={ariaLabel} onClick={onClick}>{props.children}</button>);
}

export default Button;