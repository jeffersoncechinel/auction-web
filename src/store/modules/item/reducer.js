import produce from 'immer'

const INITIAL_STATE = {
  id: null,
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
