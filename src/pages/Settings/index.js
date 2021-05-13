import React, { useCallback, useEffect, useRef, useState} from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '~/utils/getValidationErrors'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { settingsGet, settingsPost } from '~/store/modules/settings/action'
import { normalizeCurrency } from '~/utils/helpers'
import { Container, ItemList } from './styles'
import DecimalInput from '~/components/InputNumberFormat'

export default function Profile() {
  const formRef = useRef(null)
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const [inputMoney, setInputMoney] = useState("123");

  const { maximum_amount, items } = useSelector((state) => state.settings)

  useEffect(() => {
    dispatch(settingsGet())
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(settingsGet())
    }, 10000)
    return () => clearInterval(interval)
  })

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
    []
  )

  return (
    <Container>
      <Link to={'listing'}><p> {'< Back to listing'} </p></Link>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <p>Max amount for auto bidding is: <strong>$ {maximum_amount.toFixed(2)} </strong></p>
        <label> Add credit</label>
        <DecimalInput
          key={inputMoney}
          ref={inputRef}
          name={'amount'}
          prefix={'$ '}
          thousandSeparator={','}
          decimalSeparator={'.'}
          decimalScale={2}
          fixedDecimalScale
          placeholder='+$ 20.00'
        />
        {/* <Input name='amount' placeholder='+$ 20.00' /> */}
        <button type='submit'>Add Credit</button>
      </Form>
      <ItemList>
        <p> You have auto bidding activated in the following items: </p>
        <ul>
          {items && items.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/bid/${item.id}`}> {item.name} </Link>
                {item.isWinning && <span className={'winTrue'}>Winning!</span>}
                {!item.isWinning && <span className={'winFalse'}>Loosing!</span>}
              </li>
            )
          })}
        </ul>
      </ItemList>
    </Container>
  )
}
