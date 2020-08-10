import React from 'react';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';

import purpleHeart from '../../assets/images/icons/purple-heart.svg';

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <Background>
          <img src={logoImg} alt="Logo Proffy" />
          <h1>Sua plataforma de estudos online</h1>
        </Background>

        <Content>
          <form>
            <h1>Fazer login</h1>
            <Input name="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
            <button type="button">Entrar</button>
          </form>

          <p>
            Não tem conta? <a href="">Cadastre-se</a>
          </p>
          <p>
            É de graça <img src={purpleHeart} alt="Coração roxo" />
          </p>
        </Content>
      </Container>
    </>
  );
};

export default Login;
