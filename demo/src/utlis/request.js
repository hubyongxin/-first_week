import axios from 'axios'

const request = axios.create({
  baseURL: 'http://192.168.1.100:12011'

})

export default request