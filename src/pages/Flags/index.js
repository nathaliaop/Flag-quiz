import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { countries } from 'country-data';

const Flags = () => {
    const history = useHistory();
    //Armazena o código do país em id
    let { id } = useParams();
    //Define um país aleatório
    var randomCountry = require('random-country');
    var country =  randomCountry();

    //Usa um state para armazenar o score do usuário e o número de questões antes de o jogo terminar
    const[score, setScore] = useState(0);
    const[questions, setQuestions] = useState(5);

    //Armazena a resposta do usuário digitada no input
    const [answer, setAnswer] = useState("");

    //Valida a reposta submetida
    const validateAnswer = (event) => {
        //Se a resposta for vazia, não faz nada
        if (!answer) return;
        //Previne a página de recarregar
        event.preventDefault();
        //Diminui o número de questões
        setQuestions(questions-1);
        //Aumenta o score se a resposta for correta
        if (answer == countries[`${id}`].name) setScore(score+1);
        //Reseta o input de resposta
        setAnswer("");
    }
    
    return(
        <div>
            <img src={`https://www.countryflags.io/${id}/flat/64.png`}/>
            <form id='myInput'>
                <input
                    type='text'
                    placeholder='Que país é esse?'
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}>
                </input>
                <button onClick={(event) => validateAnswer(event)}>
                    {questions == 0 ?
                        <button onClick={history.push("/")}>Finish game</button>
                        :<Link to={{pathname: `${!answer ? id : country}`}}>Next</Link>
                    }
                </button>
            </form>
        </div>
    );
}

export default Flags