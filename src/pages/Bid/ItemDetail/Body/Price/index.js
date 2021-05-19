import React from 'react'
import { Container } from './styles'

export default function Price({ final_price }) {

  return (
    <Container>
      <b>{final_price.toFixed(2)}</b>
    </Container>
  )
}
