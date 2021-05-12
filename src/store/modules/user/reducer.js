import produce from 'immer'

const INITIAL_STATE = {
  profile: false
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.user
      })
    case '@auth/UPDATE_PROFILE_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.profile
      })
    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.profile = null
      })
    default:
      return state
  }
}
