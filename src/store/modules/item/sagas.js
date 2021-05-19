import { all, call, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import { itemAutoBidFailure, itemFailure, itemSuccess, itemUpdateSlider } from '~/store/modules/item/action'
import { listingSuccessWebsocket } from '~/store/modules/listing/action'

export function* itemGet({payload}) {
  try {
    const response = yield call(api.get, `/api/items/${payload.id}`)
    const {data} = response.data
    yield put(itemSuccess(data))
    yield put(listingSuccessWebsocket(data))
  } catch (err) {
    toast.error('Error loading item.')
    yield put(itemFailure())
  }
}

export function* itemPost({payload}) {
  try {
    const response = yield call(api.post, `/api/bids`, {
      item_id: payload.data.item_id,
      amount: payload.data.amount
    })
    const {data} = response.data
    yield put(itemSuccess(data))
    toast.success('Bid success placed!')
  } catch (err) {
    toast.error(err.response.data.message)
    yield put(itemFailure())
  }
}

export function* itemEnableAutoBidding({payload}) {
  try {
    const response = yield call(api.post, `/api/auto-bidding`, {
      item_id: payload.data.item_id,
      is_active: payload.data.auto_bidding
    })
    const {data} = response.data
    yield put(itemSuccess(data))
    if (payload.data.auto_bidding) {
      toast.success('Auto bidding enabled.')
    } else {
      toast.success('Auto bidding disabled.')
    }
  } catch (err) {
    toast.error(err.response.data.message)
    yield put(itemFailure())
    yield put(itemAutoBidFailure())
  }
}

export default all([
  takeLatest('@item/ITEM_GET', itemGet),
  takeLatest('@item/ITEM_POST', itemPost),
  takeLatest('@item/ITEM_ENABLE_AUTO_BIDDING', itemEnableAutoBidding),
])
