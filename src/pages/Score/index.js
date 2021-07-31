import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Score = () => {
    const history = useHistory();
    const location = useLocation();
    let score = location.state.score;

    return(
        <div>
            <p>A sua pontuação é: {score*100} de 500</p>
            <button onClick = {() => history.push('/')}>Retornar à página inicial</button>
        </div>
    );
}

export default Score
