import React, { useCallback, useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from '~/components/Input'
import getValidationErrors from '~/utils/getValidationErrors'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { settingsGet, settingsPost } from '~/store/modules/settings/action'
import { normalizeCurrency } from '~/utils/helpers'

export default function Profile() {
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const maximum_amount = useSelector((state) => state.settings.maximum_amount)

  useEffect(() => {
    dispatch(settingsGet())
  }, [])

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      try {
        formRef.current?.setErrors({})

        data.amount = normalizeCurrency(data.amount)

        const schema = Yup.object().shape({
          amount: Yup.number()
            .transform(value => (isNaN(value) ? 0 : value))
            .min(1)
            .required()
        })

        await schema.validate(data, {
          abortEarly: false
        })

        dispatch(settingsPost({ amount: data.amount }))
        reset()
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
          return false
        }
      }
    },
    []
  )

  return (
    <Container>
      <Link to={'listing'}><p> {'< Back to listing'} </p></Link>
      <Form ref={formRef} onSubmit={handleSubmit}>
       <p>Max amount for auto bidding is: <strong>$ {maximum_amount.toFixed(2)} </strong></p>
        <label> Add credit</label>
          <Input name='amount' placeholder='+$ 20.00' />
        <button type='submit'>Add Credit</button>
      </Form>
    </Container>
  )
}
