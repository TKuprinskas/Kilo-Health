import React from 'react';
import { StyledButton } from './Button.styles';

const ButtonComponent = (props) => {
    return (
        <StyledButton onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </StyledButton>
    );
};

export default ButtonComponent;
