import { url } from 'constants/url'
import axios from 'axios'
import auth from 'requests/authentication'

export default axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': auth.getApiKey()
  },
  responseType: 'json'
})
