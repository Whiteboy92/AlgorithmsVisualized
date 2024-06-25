import React from 'react';
import { InputContainer, Input } from './InputField.styled';

interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChange, onEnterPress }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </InputContainer>
  );
};

export default InputField;
