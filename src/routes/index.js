import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import Listing from '../pages/Listing'
import Settings from '../pages/Settings'
import SignIn from '../pages/SignIn'
import Bid from '../pages/Bid'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/settings' component={Settings} isPrivate />
      <Route exact path='/bid/:id' component={Bid} isPrivate />
      <Route exact path='/listing/:page?' component={Listing} isPrivate />
    </Switch>
  )
}
