import produce from 'immer'

const INITIAL_STATE = {
  data: [],
  current_page: null,
  per_page: null,
  total: 0,
  loading: false
}

export default function listing(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@listing/LISTING_REQUEST': {
        draft.loading = true
        break
      }
      case '@listing/LISTING_SUCCESS': {
        draft.data = action.payload.data.data
        draft.current_page = action.payload.data.current_page
        draft.per_page = action.payload.data.per_page
        draft.total = action.payload.data.total
        draft.loading = false
        break
      }
      case '@listing/LISTING_SUCCESS_WEBSOCKET': {
        const id = action.payload.data.id
        const last_bid_by = action.payload.data.last_bid_by
        const final_price = action.payload.data.final_price

        const index = draft.data.findIndex(data => data.id === id)

        if (index !== -1) {
          draft.data[index].final_price = final_price
          draft.data[index].last_bid_by = last_bid_by
        } else {
          draft.data.push(action.payload.data)
        }
        break
      }
      case '@listing/ITEM_UPDATE_SLIDER': {
        const id = action.payload.data.id
        const index = draft.data.findIndex(data => data.id === parseInt(id))

        if (index !== -1) {
          draft.data[index].auto_bidding = action.payload.data.auto_bidding
        }
        draft.loading = false
        break
      }
      case '@listing/LISTING_FAILURE': {
        draft.loading = false
        break
      }
      default:
    }
  })
}
