import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Countries from '../../resources/countries';
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as Styled from './styles';

let used = [];
let min = 0;
let max = 218;

const Flags = () => {
    const history = useHistory();
    //Armazena o código do país em id
    let { id } = useParams();
    if (used == []) used.push(id);
    console.log(used);

    //Pega um número aleatório
    const getRandomInt = (min, max, used) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        let random = Math.floor(Math.random() * (max - min)) + min;
        if (used.includes(random.toString())) getRandomInt(min, max, used);
        else return random;
    }

    //Pega um numéro aleatório dentre o tamanho da lista de países
    let number = getRandomInt(min,max, used);
    //Código de país
    let code = Countries[id][0];
    //País
    let country = Countries[id][1];

    //Usa um state para armazenar o score do usuário e o número de questões antes de o jogo terminar
    const[score, setScore] = useState(0);
    const[questions, setQuestions] = useState(10);
    //Use um state para armazenar se a resposta foi correta ou não
    const[correct, setCorrect] = useState(false);
    //Chave para definir se o qeu vai ser mostrado na tela é a questão ou o feedback do usuário (se acertou ou errou)
    const[key, setKey] = useState(true);
    //Armazena a resposta do usuário digitada no input
    const [answer, setAnswer] = useState("");

    const [loaded, setLoaded] = useState(false);

    //Valida a reposta submetida
    const validateAnswer = (event) => {
        if (!answer) return;
        //Previne a página de recarregar
        event.preventDefault();
        //Diminui o número de questões
        setQuestions(questions-1);
        //Muda a resposta para letras minúsculas e retira acentos e caracteres especiais
        setAnswer(answer.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
        //Aumenta o score se a resposta for correta e informa que a resposta foi correta
        if (answer == country.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
            setScore(score+1);
            setCorrect(true)
        }
        //Informa que a resposta foi errada
        else setCorrect(false)
        //Reseta o input de resposta
        setAnswer("");
        setKey(!key);
        used.push(id);
    }
    
    return(
        <Styled.Div>
            {key ?
            <div>
                <Styled.Title>Que país é esse?</Styled.Title>
                <Styled.Image key={Date.now()} src={`https://www.countryflags.io/${code}/flat/64.png`}/>
                <Styled.Form id='myInput'>
                    <Input
                        type='text'
                        placeholder='Que país é esse?'
                        value={answer}
                        changed={setAnswer}>
                    </Input>
                    <Button title = "Next" clicked={validateAnswer}/>
                </Styled.Form>
            </div>
            :
            <Styled.Result>
                <Styled.Image src={`https://www.countryflags.io/${code}/flat/64.png`}/>
                {correct ? <Styled.Title>Resposta correta!</Styled.Title> : <Styled.Title>A resposta certa era: {country}</Styled.Title>}
                {questions == 0 ?
                <Button title={<Link to={{pathname: 'score', state: {score: score}}}>Finish</Link>} clicked={() => null} />
                :
                <Button title={<Link to={{pathname: `${number}`}}>Next</Link>} onClick={setKey(!key)} />}
            </Styled.Result>}
        </Styled.Div>
    );
}

export default Flags