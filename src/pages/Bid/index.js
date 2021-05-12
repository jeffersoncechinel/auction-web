import React, { useEffect, useState } from 'react'
import api from '~/services/api'

import { Container } from './styles'
import ItemDetail from '~/components/ItemDetail'

export default function Bid() {
  const [item, setItem] = useState([])

  useEffect(() => {
    async function loadItem() {
      const response = await api.get('api/items')
      setItem(response.data.data)
    }

    loadItem()
  }, [])

  return (
    <Container>
      {item &&
      <ItemDetail
        key={item.id}
        item={item}
      />
      }
    </Container>
  )
}
