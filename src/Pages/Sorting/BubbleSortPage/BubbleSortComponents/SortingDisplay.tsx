import React from 'react';
import { Container, Number } from './SortingDisplay.styled';

interface SortingDisplayProps {
  numbers: number[];
  highlightedIndices: number[];
  sortedIndices: number[];
}

const SortingDisplay: React.FC<SortingDisplayProps> = ({ numbers, highlightedIndices, sortedIndices }) => {
  return (
    <Container>
      {numbers.map((num, index) => (
        <Number key={index} sorted={sortedIndices.includes(index)} highlighted={highlightedIndices.includes(index)}>
          {num}
        </Number>
      ))}
    </Container>
  );
};

export default SortingDisplay;
