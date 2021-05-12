import { all, call, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import { listingFailure, listingSuccess } from '~/store/modules/listing/action'

export function* listing({ payload }) {
  try {
    const { pageNumber, priceSort, searchText } = payload

    const response = yield call(api.get, `api/items?page=${pageNumber}`, {
      params: { priceSort: priceSort, searchText: searchText }
    })

    const {data} = response.data

    yield put(listingSuccess(data))
  } catch (err) {
    toast.error('Error listing items.')
    yield put(listingFailure())
  }
}

export default all([
  takeLatest('@listing/LISTING_REQUEST', listing),
])
