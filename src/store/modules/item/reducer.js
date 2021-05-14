import produce from 'immer'

const INITIAL_STATE = {
  id: null,
  name: null,
  description: null,
  finished_at: null,
  auto_bidding: '',
  final_price: null,
  image_url: null,
  status: null,
  history: []
}

export default function item(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@item/ITEM_GET': {
        draft.loading = true
        break
      }
      case '@item/ITEM_SUCCESS': {
        draft.id = action.payload.data.id
        draft.name = action.payload.data.name
        draft.description = action.payload.data.description
        draft.finished_at = action.payload.data.finished_at
        draft.final_price = action.payload.data.final_price
        draft.image_url = action.payload.data.image_url
        draft.auto_bidding = action.payload.data.auto_bidding
        draft.status = action.payload.data.status
        draft.history = action.payload.data.history
        draft.loading = false
        break
      }
      case '@item/ITEM_FAILURE': {
        draft.loading = false
        break
      }
      case '@item/ITEM_AUTO_BID_FAILURE': {
        draft.loading = false
        draft.auto_bidding = false
        break
      }
      case '@item/ITEM_UPDATE_SLIDER': {
        draft.auto_bidding = action.payload.auto_bidding
        draft.loading = false
        break
      }
      case '@item/ITEM_CLEAR': {
        return INITIAL_STATE
      }
      default:
    }
  })
}
