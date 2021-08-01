import React from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <button><Link to={{pathname: `flags/${id}`}}>Start</Link></button>
        </div>
    );
}

export default Home
