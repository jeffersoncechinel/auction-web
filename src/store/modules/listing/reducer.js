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
      case '@listing/LISTING_FAILURE': {
        draft.loading = false
        break
      }
      default:
    }
  })
}
