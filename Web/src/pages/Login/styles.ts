import styled from 'styled-components';

import landing from '../../assets/images/landing.svg';

export const Container = styled.div`
  width: 100vh; /* ocular 100% do view port*/
  display: flex;
  flex: 1;
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  width: 100vh;
  height: 100vh;
  flex-direction: column;
  place-content: center;
  background: var(--color-primary-dark);
  background-size: cover;
  max-width: 750px;
`;

export const Content = styled.div`
  flex: 1;
  position: absolute;
  width: 352px;
  height: 363px;
  left: 850px;
  top: 120px;
`;
