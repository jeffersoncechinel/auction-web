import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Container, Error } from './styles';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

const Input = (props) => {
  const inputRef = useRef(null);

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, defaultValue, error, registerField, clearError } = useField(props.name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    clearError()
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color={'#c53030'} size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
