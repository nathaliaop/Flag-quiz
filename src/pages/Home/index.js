import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    //Define um país inicial aleatório
    var randomCountry = require('random-country');
    var country =  randomCountry();

    return(
        <button><Link to={{pathname: `flags/${country}`}}>Start</Link></button>
    );
}

export default Home
