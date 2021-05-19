import React from 'react'
import { Container } from './styles'
import { useSelector } from 'react-redux'

export default function Status({last_bid_by}) {
  const user = useSelector((state) => state.user)

  return (
    <Container>
      {last_bid_by && <span>Last bid by: <span  className={'winTrue'}>{last_bid_by}</span></span>}
      <br /><br />
      {last_bid_by === user.profile && <span className={'winTrue'}>You are winning the auction for this item!</span>}
    </Container>
  )
}
