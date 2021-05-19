import React, { useCallback, useRef, useState } from 'react'
import DecimalInput from '~/components/InputNumberFormat'
import { Form as UnForm } from '@unform/web'
import { normalizeCurrency } from '~/utils/helpers'
import * as Yup from 'yup'
import { itemPost } from '~/store/modules/item/action'
import getValidationErrors from '~/utils/getValidationErrors'
import { useDispatch } from 'react-redux'
import { Container } from './styles'

export default function Form({ item_id, final_price }) {
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const [inputMoney, setInputMoney] = useState('123')

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      try {
        formRef.current?.setErrors({})
        data.bidAmount = normalizeCurrency(data.bidAmount)

        const minimumBidPrice = (final_price + 1).toFixed(2)
        const schema = Yup.object().shape({
          bidAmount: Yup.number()
            .transform(value => (isNaN(value) ? 0 : value))
            .min(minimumBidPrice, `Amount must be greater or equal: $${minimumBidPrice}`)
            .required()
        })

        await schema.validate(data, {
          abortEarly: false
        })

        await dispatch(itemPost({
          item_id: item_id,
          amount: parseFloat(data.bidAmount)
        }))

        setInputMoney(Math.random().toString())
        reset()
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
          return false
        }
      }
    },
    [final_price]
  )

  return (
    <Container>
      <UnForm ref={formRef} onSubmit={handleSubmit}>
        <label> Bid amount </label>
        <DecimalInput
          key={inputMoney}
          name={'bidAmount'}
          prefix={'$ '}
          decimalSeparator={'.'}
          decimalScale={2}
          fixedDecimalScale
          placeholder={`$ ${(final_price + 1).toFixed(2)}`}
        />
        <button type='submit' className={'submitBtn'}>Submit Bid</button>
      </UnForm>
    </Container>
  )
}
