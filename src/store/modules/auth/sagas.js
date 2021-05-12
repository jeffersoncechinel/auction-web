import { all, call, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import { signFailure, signInSuccess } from '~/store/modules/auth/action'
import history from '~/services/history'

export function* signIn({ payload }) {
  try {
    const { username, password } = payload

    const response = yield call(api.post, 'api/auth', {
      username,
      password
    })

    const { token, name } = response.data.data

    if (!token) {
      toast.error('Authentication failed.')
      return
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, name))
    history.push('/listing')
  } catch (err) {
    toast.error('Authentication failed, verify your credentials.')
    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return
  }

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function signOut() {
  history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut)
])
