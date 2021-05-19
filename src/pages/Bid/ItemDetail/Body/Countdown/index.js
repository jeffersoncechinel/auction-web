import React from 'react'
import { Container } from './styles'
import { parseISO } from 'date-fns'
import Countdown from 'react-countdown'

export default function ItemCountdown({ finished_at }) {

  const Finished = () => <span><br />The auction for this item has finished.</span>
  const Renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Finished />
    } else {
      return (
        <>
          <p>
            Ends in:
          </p>
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
        </>
      )
    }
  }

  return (
    <Container>
      <Countdown date={parseISO(finished_at)} renderer={Renderer} zeroPadTime={1} />
    </Container>
  )
}
