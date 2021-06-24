import axios from 'axios'

const BASE_API = process.env.NODE_ENV === 'development' ? '/api' : ""

const service = axios.create({
  baseURL: BASE_API, // url = base url + request url
  timeout: 30000 // request timeout
})

service.interceptors.request.use(
  config => {
    
    // if (store.getters.token) {
    //   config.headers['Authorization'] = 'Bearer '
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
