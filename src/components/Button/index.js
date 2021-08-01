import * as Styled from './styles';

const Button = (title, validateAnswer) => {

  return (
    <Styled.Button onClick = {validateAnswer}>
      {title}
    </Styled.Button>
  );
};

export default Button;
