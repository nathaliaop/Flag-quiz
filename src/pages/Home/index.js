import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { CountriesContext } from '../../context/CountriesContext';
import Button from '../../components/Button';

import * as Styled from './styles';

const Home = () => {
    const [ , setCountries] = useContext(CountriesContext);

    api.get('/all')
    .then(result => {
        setCountries(result.data);
    })
    .catch(error => {
        console.error(error);
    });

    return(
        <Styled.Home>
            <Link to='/flags'>
                <Button>Começar jogo</Button>
            </Link>
        </Styled.Home>
    );
}

export default Home
