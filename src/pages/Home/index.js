import React from 'react';
import { Link } from 'react-router-dom';
import Countries from '../../resources/countries';

const Home = () => {
    //Pega um numéro aleatório dentre o tamanho da lista de países
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //Pega um numéro aleatório dentre o tamanho da lista de países
    let number = getRandomInt(0,3);
    //Define um país inicial aleatório
    let code = Countries[number][0];

    return(
        <div>
            <button><Link to={{pathname: `flags/${code}`}}>Start</Link></button>
        </div>
    );
}

export default Home
