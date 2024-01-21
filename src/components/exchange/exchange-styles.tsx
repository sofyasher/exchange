import styled from 'styled-components';
import { theme } from '../../shared/styles/colors';
import { device } from '../../shared/styles/media';

export const ExchangeWrapper = styled.div`
  padding: 0 200px;
  height: 100svh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${theme.primary};
  color: ${theme.secondary};
  font-family: 'Epilogue', sans-serif;

  @media ${device.mobile} {
    padding: 20px;
  }
`;

export const Card = styled.div`
  padding: 30px;
  border-radius: 20px;
  border: solid 1px ${theme.secondary};

  &:first-child {
    margin-bottom: 20px;
  }
`;
