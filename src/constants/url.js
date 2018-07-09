// API の向き先を指定する
export const url = (() => {
  return 'https://ccpv-mock.herokuapp.com'
  
  // Production
  if (process.env.NODE_ENV === 'production') {
    return 'https://ccpv.herokuapp.com'
  }

  // Development
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:8000'
  }

  // Review Apps
  return 'https://ccpv-for-review.herokuapp.com'
})()

export const endpoints = {
  authentication: '/authentication'
}
