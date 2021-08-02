import React, { useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import LoadingIcons from 'react-loading-icons'
import { countries } from 'country-data';

import Countries from '../../resources/countries';
import NotFound from '../../images/rip.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as Styled from './styles';

let min = 0;
let max = 215;

const Flags = () => {
    const history = useHistory();
    //Armazena o código do país em id
    let { id } = useParams();

    //Define um país aleatório
    var randomCountry = require('random-country');
    var c =  randomCountry();

    console.log(c)

    //Pega um número aleatório
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log(id)
    
    //Pega um numéro aleatório dentre o tamanho da lista de países
    let number = getRandomInt(min,max);
    console.log(number)
    //Código de país
    let code = Countries[id][0];
    //País
    let country = Countries[id][1];

    //Usa um state para armazenar o score do usuário e o número de questões antes de o jogo terminar
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(10);
    //Use um state para armazenar se a resposta foi correta ou não
    const [correct, setCorrect] = useState(false);
    //Chave para definir se o que vai ser mostrado na tela é a questão ou o feedback do usuário (se acertou ou errou)
    const [page, setPage] = useState(true);
    //Armazena a resposta do usuário digitada no input
    const [answer, setAnswer] = useState("");
    //Avisa o usuário se o input estiver em branco
    const [warn, setWarn] = useState(false);

    //Valida a reposta submetida
    const validateAnswer = (event) => {
        if (!answer) {
            setWarn(true);
            return;
        }
        //Previne a página de recarregar
        event.preventDefault();
        //Diminui o número de questões
        setQuestions(questions-1);
        //Aumenta o score se a resposta for correta e informa que a resposta foi correta
        //Compara a resposta em letras minúsculas e sem acentos ou caracteres especiais
        if (answer.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === country.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
            setScore(score+1);
            setCorrect(true)
        }
        //Informa que a resposta foi errada
        else setCorrect(false)
        //Reseta o input de resposta
        setAnswer("");
        setLoading(true);
        setWarn(false);
        setPage(!page);
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

    const changePage = (page, setPage) => {
        history.push(`${number}`)
        setPage(!page)

    }

    return(
        <Styled.Div>
            {page ?
            <Styled.Result>
                <Styled.Info>
                    <Styled.Score>Pontuação: {score*100}/1000</Styled.Score>
                    <Styled.Score>Questões: {11 - questions}/10</Styled.Score>
                </Styled.Info>
                <Styled.Title>Que país é esse?</Styled.Title>
                <div style={{display: loading ? "flex" : "none"}}>
                    <LoadingIcons.Circles />
                </div>
                <div style={{display: loading ? "none" : "flex"}}>
                    <Styled.Image page={Date.now()} src={`https://www.countryflags.io/${code}/flat/64.png`} onLoad={imageLoaded} onError={addDefaultSrc}/>
                </div>
                <Styled.Form>
                    <Input
                        type="text"
                        placeholder="Resposta"
                        value={answer}
                        onChange={setAnswer}
                    />

                    {warn ? <Styled.Warn>Por favor, insira uma resposta!</Styled.Warn> : null}

                    <Button onClick={(event) => validateAnswer(event)}>Conferir</Button>
                </Styled.Form>
            </Styled.Result>
            :
            <Styled.Result>
                <Styled.Image src={`https://www.countryflags.io/${code}/flat/64.png`}/>
                {correct ? <div><Styled.Correct>Resposta correta </Styled.Correct> <Styled.Correct>Parabéns!</Styled.Correct></div> : <div><Styled.Correct>A resposta certa era: </Styled.Correct> <Styled.Correct>{country}</Styled.Correct></div>}
                {questions === 0 ?
                <Button
                    onClick={() => history.push({
                        pathname: '/score',
                        state: { score: score }
                    })}
                >Terminar jogo</Button>
                :
                
                <Button onClick={() => changePage(page, setPage)}>Próximo</Button>}
            </Styled.Result>}
        </Styled.Div>
    );
}

export default Flags