import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import * as Styled from './styles';

const Home = () => {

    return(
        <Styled.Home>
            <Link to='/flags'>
                <Button onClick={() => null}>Começar jogo</Button>
            </Link>
        </Styled.Home>
    );
}

export default Home
