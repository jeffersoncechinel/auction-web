import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles'
import { isBefore, parseISO } from 'date-fns'

const Item = (item) => {

  const {id, name, description, image_url, final_price, finished_at} = item.item
  const isFinished = isBefore(parseISO(finished_at), new Date())

  return (
    <Container>
      <header>
        <img src={image_url} alt={name} />
      </header>
      <section className='body'>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className='price'>
          $ <b>{final_price.toFixed(2)}</b>
        </p>
        {isFinished && <span>Auction finished</span>}
      </section>
      <section className='footer'>
        <div className='icon-container'>
         <Link to={`/bid/${id}`}>
           <button
            type='button'
            className='icon'
          >
             {!isFinished && <>Bid Now!</>}
             {isFinished && <>View</>}
          </button>
          </Link>
        </div>
      </section>
    </Container>
  )
}

export default Item
