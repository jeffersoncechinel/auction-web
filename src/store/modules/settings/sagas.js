import { all, call, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import { settingsFailure, settingsSuccess } from '~/store/modules/settings/action'

export function* settingsGet() {
  try {
    const response = yield call(api.get, `/api/wallet`)
    const { data } = response.data
    yield put(settingsSuccess(data))
  } catch (err) {
    toast.error('Error loading settings.')
    yield put(settingsFailure())
  }
}

export function* settingsPost({ payload }) {
  try {
    const response = yield call(api.post, `/api/wallet`, {
      amount: payload.amount
    })
    const { data } = response.data
    yield put(settingsSuccess(data))
    toast.success('Credit successfully added.')
  } catch (err) {
    toast.error('Error saving settings.')
    yield put(settingsFailure())
  }
}

export default all([
  takeLatest('@settings/SETTINGS_GET', settingsGet),
  takeLatest('@settings/SETTINGS_POST', settingsPost)
])
