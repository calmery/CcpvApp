import { url } from 'constants/url'
import axios from 'axios'
import auth from 'requests/authentication'

const createAxios = () => {
  return axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': auth.getApiKey()
    },
    responseType: 'json'
  })
}

export const get = (endpoint, params) => {
  return createAxios().get(endpoint, params)
}

export const post = (endpoint, params) => {
  return createAxios().post(endpoint, params)
}
