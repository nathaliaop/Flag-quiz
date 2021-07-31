import React, { useState } from 'react';
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
        let code = Countries[id][0];
        //País
        let country = Countries[id][1];

    //Usa um state para armazenar o score do usuário e o número de questões antes de o jogo terminar
    const[score, setScore] = useState(0);
    const[questions, setQuestions] = useState(5);
    //Use um state para armazenar se a resposta foi correta ou não
    const[correct, setCorrect] = useState(false);
    //Chave para definir se o qeu vai ser mostrado na tela é a questão ou o feedback do usuário (se acertou ou errou)
    const[key, setKey] = useState(true);

    //Armazena a resposta do usuário digitada no input
    const [answer, setAnswer] = useState("");

    //Valida a reposta submetida
    const validateAnswer = (event) => {
        //Previne a página de recarregar
        event.preventDefault();
        //Diminui o número de questões
        setQuestions(questions-1);
        //Muda a resposta para letras minúsculas
        setAnswer(answer.toLowerCase());
        //Aumenta o score se a resposta for correta e informa que a resposta foi correta
        if (answer == country.toLowerCase()) {
            setScore(score+1);
            setCorrect(true)
        }
        //Informa que a resposta foi errada
        else setCorrect(false)
        //Reseta o input de resposta
        setAnswer("");
        setKey(!key);
    }
    
    return(
        <div>
            {key?
            <div>
                <img src={`https://www.countryflags.io/${code}/flat/64.png`}/>
                <form id='myInput'>
                    <input
                        type='text'
                        placeholder='Que país é esse?'
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}>
                    </input>
                    <button onClick={(event) =>validateAnswer(event)}>Next</button>
                </form>
            </div>
            :
            <div>
                <img src={`https://www.countryflags.io/${code}/flat/64.png`}/>
                {correct ? <h1>Resposta correta!</h1> : <h1>A resposta certa era: {country}</h1>}
                {questions == 0 ?
                <button><Link to={{pathname: 'score', state: {score: score}}}>Finish</Link></button>
                :
                <button onClick={() => setKey(!key)}><Link to={{pathname: `${number}`}}>Next</Link></button>}
            </div>}
        </div>
    );
}

export default Flags