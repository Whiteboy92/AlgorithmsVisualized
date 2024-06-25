import styled from 'styled-components';

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  gap: 10px;
`;

export const InfoPanel = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%; 
  text-align: center;
  gap: 10px;
`;

export const TextPanelCol = styled.div`
  color: white;
  background-color: #102693;
  border-radius: 5px;
  padding: 5px;
  width: 160px; 
  min-width: 160px;
  text-align: center;
`;

export const InfoPanelCol = styled.div`
  color: white;
  background-color: #102693;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  max-width: 70px;
  text-align: center;
`;