import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:1337'

class RestClient {
  static endPoint
  constructor(token) {
    this.token = token
  }
  get(query) {
    return axios
      .get(this.constructor.endPoint + (query ? query : ''), {
        headers: { Authorization: `Bearer ${this.token}` }
      })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  }

  post(body) {
    return axios
      .post(this.constructor.endPoint, body, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
      .then((data) => {
        return data
      })
      .catch((err) => {
        return err
      })
  }
}

export default RestClient
