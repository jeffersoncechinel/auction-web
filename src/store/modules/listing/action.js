export function listingRequest({pageNumber, priceSort, searchText}) {
  return {
    type: '@listing/LISTING_REQUEST',
    payload: { pageNumber, priceSort, searchText }
  }
}

export function listingSuccess(data) {
  return {
    type: '@listing/LISTING_SUCCESS',
    payload: { data }
  }
}

export function listingWebsocket(data) {
  return {
    type: '@listing/LISTING_WEBSOCKET',
    payload: { data }
  }
}

export function listingSuccessWebsocket(data) {
  return {
    type: '@listing/LISTING_SUCCESS_WEBSOCKET',
    payload: { data }
  }
}

export function itemUpdateSlider(data) {
  return {
    type: '@listing/ITEM_UPDATE_SLIDER',
    payload: {data}
  }
}

export function itemEnableAutoBidding(data) {
  return {
    type: '@listing/ITEM_ENABLE_AUTO_BIDDING',
    payload: { data }
  }
}

export function itemAutoBidFailure() {
  return {
    type: '@listing/ITEM_AUTO_BID_FAILURE'
  }
}

export function listingFailure() {
  return {
    type: '@listing/LISTING_FAILURE'
  }
}
