import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default (reducers) => {
  return persistReducer(
    {
      key: 'auction',
      storage,
      whitelist: ['auth', 'user'],
      blacklist: ['listing', 'settings']
    },
    reducers
  )
}
