import styled from 'styled-components';

interface NumberProps {
  sorted: boolean;
  highlighted: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Number = styled.div<NumberProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: ${props => (props.sorted ? '#4CAF50' : '#102693')}; /* Green if sorted */
  text-align: center;
  min-width: 30px;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 30px;
  font-weight: bold;
  /* Apply different styles for highlighted */
  border: ${props => (props.highlighted ? '2px solid #F9E03B' : 'none')}; /* highlight border of compared emelemnts */
`;
