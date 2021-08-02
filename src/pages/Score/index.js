import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../../components/Button';

import * as Styled from './styles';

const Score = () => {
    const history = useHistory();
    const location = useLocation();
    let score = location.state.score;

    return(
        <Styled.Div>
            <Styled.Title>A sua pontuação é: </Styled.Title>
            <Styled.Title>{score*100} de 1000</Styled.Title>
            <Button onClick = {() => history.push('/')}>Retornar à página inicial</Button>
        </Styled.Div>
    );
}

export default Score
