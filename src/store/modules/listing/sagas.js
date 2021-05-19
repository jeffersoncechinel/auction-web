import { all, call, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import { listingFailure, listingSuccess, listingSuccessWebsocket,
  itemUpdateSlider, itemAutoBidFailure } from '~/store/modules/listing/action'

export function* listing({ payload }) {
  try {
    const { pageNumber, priceSort, searchText } = payload

    const response = yield call(api.get, `api/items?page=${pageNumber}`, {
      params: { priceSort: priceSort, searchText: searchText }
    })

    const { data } = response.data

    yield put(listingSuccess(data))
  } catch (err) {
    toast.error('Error listing items.')
    yield put(listingFailure())
  }
}

export function* websocket(data) {
 try {
    yield put(listingSuccessWebsocket(data.payload.data.data))
  } catch (err) {
    toast.error('Error listing items.')
    yield put(listingFailure())
  }
}

export function* itemEnableAutoBidding({payload}) {
  try {
    yield put(itemUpdateSlider({
      id: payload.data.item_id,
      auto_bidding: payload.data.auto_bidding
    }))

    const response = yield call(api.post, `/api/auto-bidding`, {
      item_id: payload.data.item_id,
      is_active: payload.data.auto_bidding
    })

    const { data } = response.data

    if (payload.data.auto_bidding) {
      toast.success('Auto bidding enabled.')
    } else {
      toast.success('Auto bidding disabled.')
    }
  } catch (err) {
    toast.error(err.response.data.message)
    yield put(listingFailure())
    yield put(itemAutoBidFailure())
  }
}

export default all([
  takeLatest('@listing/LISTING_REQUEST', listing),
  takeLatest('@listing/LISTING_WEBSOCKET', websocket),
  takeLatest('@listing/ITEM_ENABLE_AUTO_BIDDING', itemEnableAutoBidding)
])
