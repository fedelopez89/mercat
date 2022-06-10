import styled from "styled-components";

export const Button = styled.button`
  font-weight: bold;
  border-radius: 1rem;
  font: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  border: 1px solid darkorange;
  color: white;
  background: darkorange;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: orange;
    border-color: orange;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
