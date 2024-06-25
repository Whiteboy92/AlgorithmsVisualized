import React from 'react';
import { HeaderContainer, Button } from './Header.styled';

const BUTTON_NAMES = {
  RESET: 'Reset',
  NEXT_ITERATION: 'Next Iteration',
  PREVIOUS_ITERATION: 'Previous Iteration',
  SKIP_TO_SORTED: 'Skip To Sorted',
};

interface HeaderProps {
  onNextIteration: () => void;
  onReset: () => void;
  onPreviousIteration: () => void;
  onSkipToSorted: () => void;
  disableButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNextIteration, onReset, onPreviousIteration, onSkipToSorted, disableButton }) => {
  return (
    <HeaderContainer>
      <Button onClick={onReset} disabled={disableButton} > {BUTTON_NAMES.RESET}</Button>
      <Button onClick={onNextIteration} disabled={disableButton} > {BUTTON_NAMES.NEXT_ITERATION}</Button>
      <Button onClick={onPreviousIteration} disabled={disableButton} > {BUTTON_NAMES.PREVIOUS_ITERATION}</Button>
      <Button onClick={onSkipToSorted} > {BUTTON_NAMES.SKIP_TO_SORTED}</Button>
    </HeaderContainer>
  );
};

export default Header;
