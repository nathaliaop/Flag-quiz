import React, { useState, useRef } from 'react';
import { Link, useParams, useHistory, Redirect } from 'react-router-dom';
import LoadingIcons from 'react-loading-icons'

import Countries from '../../resources/countries';
import NotFound from '../../images/rip.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as Styled from './styles';

let used = [];
let min = 0;
let max = 215;

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
    //Avisa o usuário se o input estiver em branco
    const [warn, setWarn] = useState(false);

    //Valida a reposta submetida
    const validateAnswer = (event) => {
        if (!answer) {setWarn(true); return;}
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
        setLoading(true);
    }

    //LoadingIcons.Circles LoadingIcons.BallTriangle LoadingIcons.Oval

    //Verifica se a imagem já carregou
    const [loading, setLoading] = useState(true);
    const imageLoaded = () => {
        setLoading(false);
    }

    //Se a imagem não existir, carrega uma imagem padrão
    const addDefaultSrc = (event) => {
        event.target.src = NotFound
    }

    return(
        <Styled.Div>
            {key ?
            <Styled.Result>
                <Styled.Title>Que país é esse?</Styled.Title>
                <div style={{display: loading ? "flex" : "none"}}>
                    <LoadingIcons.Circles />
                </div>
                <div style={{display: loading ? "none" : "flex"}}>
                    <Styled.Image key={Date.now()} src={`https://www.countryflags.io/${code}/flat/64.png`} onLoad={imageLoaded} onError={addDefaultSrc}/>
                </div>
                <Styled.Form>
                    <Input
                        type="text"
                        placeholder='Digite aqui a sua resposta'
                        value={answer}
                        onChange={setAnswer}>
                    </Input>
                    {warn ? <Styled.Warn>Por favor, insira uma resposta!</Styled.Warn> : null}
                    <button type="submit"onClick={(event) => validateAnswer(event)}>conferir</button>
                </Styled.Form>
            </Styled.Result>
            :
            <Styled.Result>
                <Styled.Image src={`https://www.countryflags.io/${code}/flat/64.png`}/>
                {correct ? <Styled.Correct>Resposta correta!</Styled.Correct> : <div><Styled.Correct>A resposta certa era: </Styled.Correct> <Styled.Correct>{country}</Styled.Correct></div>}
                {questions == 0 ?
                <Button
                    title="Terminar jogo"
                    onClick={() => history.push({
                        pathname: '/score',
                        state: { score: score }
                    })}
                />
                :
                <Link to={{pathname: `${number}`}}><Button title="Próximo" onClick={() => setKey(!key) && history.push(`${number}`)}/></Link>}
            </Styled.Result>}
        </Styled.Div>
    );
}

export default Flags