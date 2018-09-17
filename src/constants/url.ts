export const url = (() => {
  // Production

  if (process.env.NODE_ENV === 'production') {
    return 'https://ccpv.herokuapp.com';
  }

  // Development

  return 'http://localhost:8000';
})();

export const endpoints = {
  authentication: '/authentication',
  list: '/list',
  messages: '/messages',
  message: '/message'
};
