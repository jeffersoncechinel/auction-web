import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Content, Wrapper } from './styles'

export default function AuthLayout({ children }) {

  useEffect(() => {
    window.Echo.channel('bidding-channel').stopListening('.sendMessage')
  })

  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

AuthLayout.prooTypes = {
  children: PropTypes.element.isRequired
}
