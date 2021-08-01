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
            <Styled.Title>A sua pontuação é: {score*100} de 1000</Styled.Title>
            <Styled.Button title="Retornar à página inicial" onClick = {history.push('/')} />
        </Styled.Div>
    );
}

export default Score
