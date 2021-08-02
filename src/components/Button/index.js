import React from 'react';
import * as Styled from './styles';

const Button = ({onClick, children}) => {
    return (
        <Styled.Button onClick={(event) => onClick(event)}>
            {children}
        </Styled.Button>
    );
};

export default Button;
