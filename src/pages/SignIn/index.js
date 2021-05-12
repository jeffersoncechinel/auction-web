import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from '~/components/Input'
import { Container } from './styles'

import { signInRequest } from '~/store/modules/auth/action'
import getValidationErrors from '~/utils/getValidationErrors'

export default function SignIn() {
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          username: Yup.string().required('Username is required.'),
          password: Yup.string().required('Password is required.')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        dispatch(signInRequest(data.username, data.password))

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
          return false
        }
      }
    },
    [dispatch]
  )

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name='username' placeholder='Username' />
        <Input name='password' type='password' placeholder='Password' />
        <button type='submit'> {loading ? 'Loading..' : 'Access'} </button>
      </Form>
    </Container>
  )
}
