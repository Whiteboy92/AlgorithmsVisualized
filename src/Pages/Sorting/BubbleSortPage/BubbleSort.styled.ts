import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  height: 100%; /* Ensure MainContent takes full height */
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; /* Center items vertically */
  width: 260px; /* Set a fixed width for the LeftPanel */
  height: 100%; /* Ensure LeftPanel takes full height */
  margin-left: 10px;
  margin-right: 10px;
  `;

export const ArrayDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex: 1;
  width: calc(100% - 260px); /* Take up remaining space */
`;

export const BottomPanel = styled.div`
  display: flex;
  margin-bottom: 45px;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Ensure BottomPanel spans the full width */
`;
