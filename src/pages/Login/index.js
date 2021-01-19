import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrafo } from './styled';

function LoginComponent() {
  const dispatch = useDispatch();
  // toast.success('oi');
  // toast.error('oi');
  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }
  return (
    <Container>
      <Title isRed={false}>
        LoginComponent
        <small>oie</small>
      </Title>
      <Paragrafo>lorem ipsum</Paragrafo>
      <button type="button" onClick={handleClick}>
        enviar
      </button>
    </Container>
  );
}

export default LoginComponent;
