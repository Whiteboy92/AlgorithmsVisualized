import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: white; // Ensure text color contrasts with the background
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional: add some shadow for better separation
`;

export const Button = styled.button`
  background-color: #102693;
  color: white; // Button text color
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    background-color: #0056b3; // Same color as hover when focused
  }

  &:disabled {
    background-color: black;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
