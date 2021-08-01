import React from 'react';
import * as Styled from './styles';

const Button = ({title, onClick}) => {
    return (
        <Styled.Button onClick={(event) => onClick(event)}>
            {title}
        </Styled.Button>
    );
};

export default Button;
