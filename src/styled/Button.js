import styled from "styled-components"

export const Button=styled.button`

padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
