import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 2px solid #ccc;
  margin: 10px;
  width: 510px;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.4s;

  &:focus {
    border-color: #007bff;
  }
`;
