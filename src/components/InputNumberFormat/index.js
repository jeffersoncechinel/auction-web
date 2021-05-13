import React, { useCallback, useEffect, useRef, useState, forwardRef } from 'react'
import { useField } from '@unform/core'
import NumberFormat from 'react-number-format'
import { Container } from './styles'
import { Error } from '~/components/Input/styles'
import { FiAlertCircle } from 'react-icons/fi'

const DecimalInput = ({ name, refs, prefix, suffix, ...rest }, ref) => {
  const inputRef = useRef(null)
  const [isFilled, setIsFilled] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const { fieldName, defaultValue, error, registerField, clearError } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
    clearError()
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        if (!ref.state || !ref.state.value) {
          return ''
        }

        let value = ref.state.value

        if (prefix) {
          value = value.replace(prefix, '')
        }

        if (suffix) {
          value = value.replace(suffix, '')
        }

        return value
      },
      setValue: (ref, value) => {
        if (value) {
          ref.state.value = parseFloat(value)
          ref.state.numAsString = value
        }
      },
      clearValue: (el) => {
        refs.value = ''
      }
    })
  }, [fieldName, registerField])

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <NumberFormat
        id={name}
        ref={inputRef}
        defaultValue={defaultValue}
        isNumericString
        prefix={prefix}
        suffix={suffix}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color={'#c53030'} size={20} />
        </Error>
      )}
    </Container>
  )
}

export default forwardRef(DecimalInput)
