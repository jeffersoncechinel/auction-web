import produce from 'immer'

const INITIAL_STATE = {
  maximum_amount: 0,
  items: []
}

export default function settings(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@settings/SETTINGS_GET': {
        draft.loading = true
        break
      }
      case '@settings/SETTINGS_SUCCESS': {
        draft.maximum_amount = action.payload.data.maximum_amount
        draft.items = action.payload.data.items
        draft.loading = false
        break
      }
      case '@settings/SETTINGS_FAILURE': {
        draft.loading = false
        break
      }
      default:
    }
  })
}
