import styled from 'styled-components'

export const Input= styled.input`
  width: 25vw;
  &:focus {
    border: 2px solid lightpink;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }
  border-radius: 5px;
  padding: 0.5rem 0.5rem;
  margin: 0rem 0rem;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  background: rgba(0,0,0,.5);
  opacity: 2;
  font-size: 20px;
  text-align: center;
`