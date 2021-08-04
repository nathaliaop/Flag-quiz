import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../../components/Button';

import * as Styled from './styles';

const Score = () => {
    const location = useLocation();
    let score = location.state.score;

    return(
        <Styled.Div>
            <Styled.Title>A sua pontuação é: </Styled.Title>
            <Styled.Title>{score*100} de 1000</Styled.Title>
            <Link to='/'>
                <Button onClick={() => null}>Retornar à página inicial</Button>
            </Link>
        </Styled.Div>
    );
}

export default Score
