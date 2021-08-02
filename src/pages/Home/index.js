import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import * as Styled from './styles';

const Home = () => {
    const history = useHistory();

    return(
        <Styled.Div>
            <Button onClick={() => history.push('flags')}>Começar jogo</Button>
        </Styled.Div>
    );
}

export default Home
