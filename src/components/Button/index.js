import React from 'react';

import * as Styled from './styles';

const Button = ({...rest}) => {
    return (
        <Styled.Button {...rest}/>
    );
};

export default Button;
