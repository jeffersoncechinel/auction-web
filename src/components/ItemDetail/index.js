import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { Link, useParams } from 'react-router-dom'
import Countdown from 'react-countdown'
import { Form } from '@unform/web'
import getValidationErrors from '~/utils/getValidationErrors'
import { format, parseISO, parse } from 'date-fns'
import { normalizeCurrency } from '~/utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { itemEnableAutoBidding, itemGet, itemPost, itemUpdateSlider } from '~/store/modules/item/action'
import DecimalInput from '~/components/InputNumberFormat'
import { Container, History, HistoryItem, ItemContainer } from './styles'
import { utcToZonedTime } from 'date-fns-tz'

const ItemDetail = () => {
  const formRef = useRef(null)
  const { id } = useParams()
  const [inputMoney, setInputMoney] = useState('123')

  const dispatch = useDispatch()
  const item = useSelector((state) => state.item)
  const { name, description, image_url, finished_at, final_price, auto_bidding } = item

  useEffect(() => {
    dispatch(itemGet(id))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(itemGet(id))
    }, 10000)
    return () => clearInterval(interval)
  })

  async function toggleAutoBidding() {
    await dispatch(itemUpdateSlider({ auto_bidding: !auto_bidding }))
    await dispatch(itemEnableAutoBidding({
      item_id: id,
      auto_bidding: !auto_bidding
    }))
  }

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
          item_id: id,
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

  const Finished = () => <span><br />The auction for this item has finished.</span>
  const Renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Finished />
    } else {
      return (
        <div className={'countdown'}>
          <div>
            <span>{days}</span><span> Days</span>
          </div>
          <div>
            <span>{hours}</span><span>Hours</span>
          </div>
          <div>
            <span>{minutes}</span><span>Minutes</span>
          </div>
          <div>
            <span>{seconds}</span><span>Seconds</span>
          </div>
        </div>
      )
    }
  }

  function formatDate(date) {
    return format(parseISO(date), 'PPPP - kk:mm:ss')
  }

  return (
    <Container>
      {!final_price && <p> Loading...</p>}
      {final_price &&
      <>
        <ItemContainer>
          <Link to={'/listing'}>
            <p>  {'< Back to listing'} </p>
          </Link>
          <header>
            <img src={image_url} alt={name} />
          </header>
          <section className='body'>
            <div>
              <h2>{name}</h2>
              <div className={'slider-container'}>
                <div> Auto Bidding</div>
                <label className='switch'>
                  <input
                    type='checkbox'
                    checked={auto_bidding || ''}
                    onChange={toggleAutoBidding}
                  />
                  <span className='slider' />
                </label>
              </div>
            </div>
            <p>{description}</p>
            {final_price && <p className='price'>
              $ <b>{final_price.toFixed(2)}</b>
            </p>}
            <p>
              Ends in:
            </p>
            {finished_at && <Countdown date={parseISO(finished_at)} renderer={Renderer} zeroPadTime={1} />}
          </section>
          <section className='footer'>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <label> Bid amount </label>
              <DecimalInput
                key={inputMoney}
                name={'bidAmount'}
                prefix={'$ '}
                // thousandSeparator={','}
                decimalSeparator={'.'}
                decimalScale={2}
                fixedDecimalScale
                placeholder={`$ ${(final_price + 1).toFixed(2)}`}
              />
              <button type='submit' className={'submitBtn'}>Submit Bid</button>
            </Form>
          </section>
        </ItemContainer>
        <History>
          <div>
            <span className={'title'}>Bid History</span>
            {item.history && item.history.length > 0 &&
            <ul>
              {item.history.map(bid => (
                <HistoryItem key={bid.id}>
                  <strong>Bid:</strong> $ {bid.amount.toFixed(2)}
                  <br /><strong>Date:</strong> {formatDate(bid.created_at)}
                  <hr />
                </HistoryItem>
              ))}
            </ul>}
            {!item.history && <p>No content</p>}
            {item.history && item.history.length < 1 && <p>No content</p>}
          </div>
        </History>
      </>
      }
    </Container>
  )
}

export default ItemDetail
