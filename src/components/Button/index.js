import React from 'react';
import * as Styled from './styles';

const Button = ({title, clicked}) => {
    return (
        <Styled.Button onClick={(event) => clicked(event)}>
            {title}
        </Styled.Button>
    );
};

export default Button;
