import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { itemGet } from '~/store/modules/item/action'

import Back from '~/pages/Bid/ItemDetail/Back'
import Image from '~/pages/Bid/ItemDetail/Header/Image'
import Name from '~/pages/Bid/ItemDetail/Body/Name'
import ToggleAutoBid from '~/pages/Bid/ItemDetail/Body/ToggleAutoBid'
import Description from '~/pages/Bid/ItemDetail/Body/Description'
import Price from '~/pages/Bid/ItemDetail/Body/Price'
import Status from '~/pages/Bid/ItemDetail/Body/Status'
import Countdown from '~/pages/Bid/ItemDetail/Body/Countdown'
import Form from '~/pages/Bid/ItemDetail/Footer/Form'
import History from '~/pages/Bid/ItemDetail/History'

import { Body, Container, Footer, Header, ItemContainer } from './styles'
import { listingWebsocket } from '~/store/modules/listing/action'

const ItemDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const itemDetail = useSelector((state) => state.item)
  const listing = useSelector((state) => state.listing)

  const item = listing.data.find((item) => item.id === parseInt(id))
  const { history } = itemDetail

  useEffect(() => {
    window.Echo.channel('bidding-channel').stopListening('.sendMessage')
    window.Echo.channel('bidding-channel').listen('.sendMessage', (data) => {
      dispatch(listingWebsocket(data))
    })
  })

  useEffect(() => {
    dispatch(itemGet(id))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(itemGet(id))
    }, 10000)
    return () => clearInterval(interval)
  })

  if (!item) {
    return (<p>Loading</p>)
  }

  const {
    name, description, image_url, finished_at, final_price,
    auto_bidding, last_bid_by
  } = item

  return (
    <Container>
      {!final_price && <p> Loading...</p>}
      {final_price &&
      <>
        <ItemContainer>
          <Back />
          <Header>
            <Image image_url={image_url} name={name} />
          </Header>
          <Body>
            <div>
              <Name>{name}</Name>
              <ToggleAutoBid id={id} auto_bidding={auto_bidding} />
            </div>
            <Description>{description}</Description>
            {final_price && <Price final_price={final_price} />}
            <Status last_bid_by={last_bid_by} />
            {finished_at && <Countdown finished_at={finished_at} />}
          </Body>
          <Footer>
            <Form item_id={item.id} final_price={final_price} auto_bidding={auto_bidding}/>
          </Footer>
        </ItemContainer>
        <History history={history} />
      </>
      }
    </Container>
  )
}

export default ItemDetail
