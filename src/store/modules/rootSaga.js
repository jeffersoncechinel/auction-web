import { all } from 'redux-saga/effects'
import auth from '~/store/modules/auth/sagas'
import user from '~/store/modules/user/sagas'
import listing from '~/store/modules/listing/sagas'
import settings from '~/store/modules/settings/sagas'
import item from '~/store/modules/item/sagas'

export default function* rootSaga() {
  return yield all([auth, user, listing, settings, item])
}
