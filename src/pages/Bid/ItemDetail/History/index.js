import React from 'react'
import { Container, HistoryItem } from './styles'
import { format, parseISO } from 'date-fns'

export default function History({ history }) {

  function formatDate(date) {
    return format(parseISO(date), 'PPPP - kk:mm:ss')
  }

  return (
    <Container>
      <div>
        <span className={'title'}>Bid History</span>
        {history && history.length > 0 &&
        <ul>
          {history.map(bid => (
            <HistoryItem key={bid.id}>
              <strong>Bid:</strong> $ {bid.amount.toFixed(2)}
              <br /><strong>Date:</strong> {formatDate(bid.created_at)}
              <hr />
            </HistoryItem>
          ))}
        </ul>}
        {!history && <p>No content</p>}
        {history && history.length < 1 && <p>No content</p>}
      </div>
    </Container>
  )
}
