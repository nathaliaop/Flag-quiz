import React from 'react';
import * as Styled from './styles';

const Input = ({type, placeholder, value, changed}) => {
    return (
        <Styled.Input type={type} placeholder={placeholder} value={value} onChange={(e) => changed(e.target.value)}>
        </Styled.Input>
    );
};

export default Input;