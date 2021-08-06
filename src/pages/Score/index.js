import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ScoreContext } from '../../context/ScoreContext';
import Button from '../../components/Button';

import * as Styled from './styles';

const Score = () => {
    const [score, ] = useContext(ScoreContext);

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
