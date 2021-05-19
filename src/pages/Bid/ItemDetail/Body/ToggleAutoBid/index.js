import React from 'react'
import { useDispatch } from 'react-redux'
import { itemEnableAutoBidding, itemUpdateSlider } from '~/store/modules/listing/action'
import { Container } from './styles'

export default function ToggleAutoBid({ id, auto_bidding }) {
  const dispatch = useDispatch()

  async function toggleAutoBidding() {
  //  await dispatch(itemUpdateSlider({ auto_bidding: !auto_bidding }))
    await dispatch(itemEnableAutoBidding({
      item_id: id,
      auto_bidding: !auto_bidding
    }))
  }

  return (
    <Container>
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
    </Container>
  )
}
