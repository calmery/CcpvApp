export const url =
  process.env.NODE_ENV === 'production' || window.location.hostname.includes('herokuapp.com')
    ? 'https://ccpv.herokuapp.com'
    : 'http://localhost:8000'

export const endpoints = {
  authentication: '/authentication'
}
