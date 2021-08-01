import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import * as Styled from './styles';

const Home = () => {
    //Pega um numéro aleatório dentre o tamanho da lista de países
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //Pega um numéro aleatório dentre o tamanho da lista de países
    let id = getRandomInt(0,218);

    return(
        <Styled.Div>
            <Button title={<Link to={{pathname: `flags/${id}`}}>Start</Link>} clicked={() => null} />
        </Styled.Div>
    );
}

export default Home
