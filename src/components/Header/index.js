import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Content, Profile, Settings } from './styles'
import { FaCog } from 'react-icons/all'
import { signOut } from '~/store/modules/auth/action'

export default function Header() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.user.profile)

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to='/listing'>AUCTION</Link>
        </nav>
        <aside>
          <Settings>
            <Link to={'/settings'}>
              <FaCog />
            </Link>
          </Settings>
          <Profile>
            <div>
              <strong> {name} </strong>
              <span onClick={handleSignOut}>SignOut</span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
