import React from 'react';
import { useLocation } from 'react-router-dom';

const Score = (props) => {
    const location = useLocation();
    let score = location.state.score;
    return(
        <p>A sua pontuação é: {score*100} de 500</p>
    );
}

export default Score
