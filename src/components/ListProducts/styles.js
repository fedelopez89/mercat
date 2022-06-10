import styled, { keyframes } from 'styled-components'

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  max-width: 90vw;
  margin: 4% auto;
  margin-bottom: 0;
`;

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid green;
  border-left-color: transparent;
  text-align: center;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  animation: ${spin} 1s ease infinite;
`;