import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles'
import { isBefore } from 'date-fns'

const Item = (item) => {

  const {id, name, description, image_url, final_price, finished_at} = item.item
  const isFinished = isBefore(new Date(finished_at), new Date())

  return (
    <Container isFinished={isFinished}>
      <header>
        <img src={image_url} alt={name} />
      </header>
      <section className='body'>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className='price'>
          $ <b>{final_price.toFixed(2)}</b>
        </p>
      </section>
      <section className='footer'>
        <div className='icon-container'>
          {!isFinished && <Link to={`/bid/${id}`}>
           <button
            type='button'
            className='icon'
          >
           Bid Now!
          </button>
          </Link>}
          {isFinished && <span>Auction finished</span>}
        </div>
      </section>
    </Container>
  )
}

export default Item
