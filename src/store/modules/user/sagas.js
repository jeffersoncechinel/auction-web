import { all, call, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import {
  updateProfileFailure,
  updateProfileSuccess
} from '~/store/modules/user/action'

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {})
    }

    const response = yield call(api.put, 'users', profile)

    toast.success('Perfil atualizado com sucess!')

    yield put(updateProfileSuccess(response.data))
  } catch (err) {
    toast.error('Erro ao salvar perfil, confira seus dados.')
    yield put(updateProfileFailure())
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
])
