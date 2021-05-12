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

export function listingFailure() {
  return {
    type: '@listing/LISTING_FAILURE'
  }
}
