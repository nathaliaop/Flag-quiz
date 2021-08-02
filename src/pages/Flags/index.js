import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

import Loading from '../../images/loading.gif';
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as Styled from './styles';

const Flags = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [flag, setFlag] = useState('');
    const [nextName, setNextName] = useState('');
    const [nextFlag, setNextFlag] = useState('');
    //Define se o que vai ser mostrado na tela é a pergunta ou a resposta
    const [page, setPage] = useState(true);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(10);
    //Verifica se a resposta foi correta ou não
    const [correct, setCorrect] = useState(false);
    //Armazena a resposta do usuário
    const [answer, setAnswer] = useState('');
    //Avisa ao usuário se o input estiver em branco
    const [warn, setWarn] = useState(false);

    const [start, setStart] = useState(false);

    useEffect((page) => {
        let number = Math.floor(Math.random() * 250);
        axios.get('https://restcountries.eu/rest/v2/all')
          .then(result => {
                setName(result.data[number].name);
                setFlag(result.data[number].flag);
                setPage(!page);
          })
          .catch(error => {
            console.error(error);
          });
    }, [])

    const getCountry = () => {
        setFlag(nextFlag);
        setName(nextName)
        setPage(!page);
    }

    const validateAnswer = (event) => {
        
        //Previne a página de recarregar
        event.preventDefault();

        if (!answer) {
            setWarn(true);
            return;
        }
        
        setQuestions(questions-1);
        //Compara a resposta em letras minúsculas e sem acentos ou caracteres especiais
        if (answer.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
            setScore(score+1);
            setCorrect(true);
        }
        else setCorrect(false);

        //Reseta o input de resposta
        setAnswer('');
        setLoading(true);
        setWarn(false);
        setPage(!page);

        //Carrega a próxima bandeira na página de resposta da bandeira anterior
        let number = Math.floor(Math.random() * 250);
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(result => {
                setNextName(result.data[number].translations.pt);
                setNextFlag(result.data[number].flag);
            })
            .catch(error => {
                console.error(error);
        });
    }

    //Verifica se a imagem já carregou
    const [loading, setLoading] = useState(true);
    const imageLoaded = () => {
        setLoading(false);
    }

    //Se a imagem não existir, carrega uma imagem padrão
    const addDefaultSrc = (event) => {
        event.target.src = Loading;
    }

    return(
        <div>
            {start ? 
                <Styled.Div>
                    {page ?
                        <Styled.Question>
                            <Styled.Info>
                                <Styled.Score>Pontuação: {score*100}/1000</Styled.Score>
                                <Styled.Score>Questões: {11 - questions}/10</Styled.Score>
                            </Styled.Info>
                            <Styled.Title>Que país é esse?</Styled.Title>
                            <div style={{display: loading ? 'flex' : 'none'}}>
                                <Styled.Image src={Loading}/>
                            </div>
                            <div style={{display: loading ? 'none' : 'flex'}}>
                                <Styled.Image src={flag} onLoad={imageLoaded} onError={addDefaultSrc}/>
                            </div>
                            <Styled.Form>
                                <Input
                                    type='text'
                                    placeholder='Resposta'
                                    value={answer}
                                    onChange={setAnswer}
                                />

                                {warn ? <Styled.Warn>Por favor, insira uma resposta!</Styled.Warn> : null}

                                <Button onClick={(event) => validateAnswer(event)}>Conferir</Button>
                            </Styled.Form>
                        </Styled.Question>
                    :
                                <Styled.Result>
                                            <Styled.Info>
                                <Styled.Score>Pontuação: {score*100}/1000</Styled.Score>
                                <Styled.Score>Questões: {11 - questions}/10</Styled.Score>
                            </Styled.Info>
                            <Styled.Image src={flag}/>

                            {correct ?
                                <div>
                                    <Styled.Correct>Resposta correta</Styled.Correct>
                                    <Styled.Correct>Parabéns!</Styled.Correct>
                                </div>
                            :
                                <div>
                                    <Styled.Correct>A resposta certa era:</Styled.Correct>
                                    <Styled.Correct>{name}</Styled.Correct>
                                </div>
                            }

                            {questions === 0 ?
                                <Button
                                    onClick={() => history.push({
                                        pathname: '/score',
                                        state: { score: score }
                                    })}
                                >Terminar jogo</Button>
                            :
                                <Button onClick={() => getCountry()}>Próximo</Button>
                            }

                        </Styled.Result>
                    }
                </Styled.Div>
            :
                <Styled.Home>
                    <Button onClick={() => setStart(true)}>Começar jogo</Button>
                </Styled.Home>
            }
        </div>
    );
}

export default Flags