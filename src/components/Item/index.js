import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles'

const Item = (item) => {

  const {id, name, description, image_url, final_price} = item.item

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
      </section>
      <section className='footer'>
        <div className='icon-container'>
          <Link to={`/bid/${id}`}>
          <button
            type='button'
            className='icon'
          >
           Bid Now!
          </button>
          </Link>
        </div>
      </section>
    </Container>
  )
}

export default Item
