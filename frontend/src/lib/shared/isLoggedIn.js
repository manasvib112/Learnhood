const isLoggedIn = () => {
  return Boolean(localStorage.token)
}

export const getToken = () => {
  return localStorage['token']
}
export default isLoggedIn
