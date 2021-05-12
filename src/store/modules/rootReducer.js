import { combineReducers } from 'redux'
import auth from '~/store/modules/auth/reducer'
import user from '~/store/modules/user/reducer'
import listing from '~/store/modules/listing/reducer'
import settings from '~/store/modules/settings/reducer'
import item from '~/store/modules/item/reducer'

export default combineReducers({
  auth,
  user,
  listing,
  settings,
  item
})
