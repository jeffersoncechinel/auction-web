import React from 'react'
import { Link } from 'react-router-dom'

export default function Back() {
  return (
    <Link to={'/listing'}>
      <p> {'< Back to listing'} </p>
    </Link>
  )
}
