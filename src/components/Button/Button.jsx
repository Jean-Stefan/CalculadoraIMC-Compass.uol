import React from 'react';
import {StyledButton, ButtonContainer} from './Button.styled';

const Button = ({children, onClick}) => {
    return (
        <ButtonContainer>
            <StyledButton onClick={onClick}>{children}</StyledButton>
        </ButtonContainer>
    );
};

export default Button;
