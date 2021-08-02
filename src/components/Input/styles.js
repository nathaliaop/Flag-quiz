import styled from 'styled-components'

export const Input= styled.input`
    width: 25vw;
    color: lightpink;
    border-radius: 5px;
    padding: 0.5rem 0.5rem;
    margin: 0rem 0rem;
    background: rgba(0,0,0,.5);
    font-size: 20px;
    text-align: center;
    &:focus {
      border: 2px solid lightpink;
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }
    ::-webkit-input-placeholder {
      color: lightpink;
      opacity: 0.5;
    }
`