import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:7123/'
})

export default api
