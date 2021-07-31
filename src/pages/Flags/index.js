import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Countries from '../../resources/countries';

const Flags = () => {
    const history = useHistory();
    //Armazena o código do país em id
    let { id } = useParams();

    //Pega um número aleatório
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //Pega um numéro aleatório dentre o tamanho da lista de países
        let number = getRandomInt(1,3);
        //Código de país
        let code = Countries[number][0];
        //País
        let country = Countries[number][1];

    //Usa um state para armazenar o score do usuário e o número de questões antes de o jogo terminar
    const[score, setScore] = useState(0);
    const[questions, setQuestions] = useState(5);
    const[correct, setCorrect] = useState(false);
    const[key, setKey] = useState(true);

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
        if (answer == country) setScore(score+1)
        //Reseta o input de resposta
        setAnswer("");
        setKey(!key);
    }

    console.log(questions)

    //{correct ? <h1>{correct}</h1> : <h1>{correct}</h1>}
    
    return(
        <div>
            {key?
            <div>
            <img src={`https://www.countryflags.io/${Countries[id][0]}/flat/64.png`}/>
            <form id='myInput'>
                <input
                    type='text'
                    placeholder='Que país é esse?'
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}>
                </input>
                <button onClick={(event) =>validateAnswer(event)}>
                    {questions == 0 && answer ?
                        <Link to={{pathname: `score`, state: {score: score}}}>Finish game</Link>
                        :<Link>{questions == 0 ? 'Finish game' : 'Next'}</Link>
                    }
                </button>
            </form>
            </div>
            :
            <div>
                <img src={`https://www.countryflags.io/${Countries[id][0]}/flat/64.png`}/>
                {correct ? <h1>Resposta correta!</h1> : <h1>A resposta certa era: {Countries[id][1]}</h1>}
            <button onClick={() => setKey(!key)}><Link to={{pathname: `${number}`}}>Next</Link></button>
            </div>}
        </div>
    );
}

export default Flags