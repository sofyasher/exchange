import styled, { css } from 'styled-components';
import { devices } from '../../shared/styles/theme';

const inputStyles = css`
  outline: none;
  border: none;
  height: 40px;
  font-size: 16px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 30px;

  @media ${devices.mobile} {
    gap: 15px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div`
  flex: 1 1 auto;
`;

export const Input = styled.input`
  ${inputStyles};
  box-sizing: border-box;
`;

export const Select = styled.select`
  ${inputStyles};
  background-color: #ffffff;
`;

export const ResultWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;
