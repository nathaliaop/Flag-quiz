import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import * as Styled from './styles';

const Score = () => {
    const history = useHistory();
    const location = useLocation();
    let score = location.state.score;

    return(
        <Styled.Div>
            <Styled.Title>A sua pontuação é: {score*100} de 1000</Styled.Title>
            <Styled.Button onClick = {() => history.push('/')}>Retornar à página inicial</Styled.Button>
        </Styled.Div>
    );
}

export default Score
