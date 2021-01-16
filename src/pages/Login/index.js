import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrafo } from './styled';

function LoginComponent() {
  // toast.success('oi');
  // toast.error('oi');
  return (
    <Container>
      <Title isRed={false}>
        LoginComponent
        <small>oie</small>
      </Title>
      <Paragrafo>lorem ipsum</Paragrafo>
      <button type="button">enviar</button>
    </Container>
  );
}

export default LoginComponent;
