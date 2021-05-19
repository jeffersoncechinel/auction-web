import React from 'react'
import { Img } from './styles'

export default function Status({ image_url, name }) {

  return (
    <Img src={image_url} alt={name} />
  )
}
