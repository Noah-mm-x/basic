import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'production' ? `http://tbapi.pphuyu.com/api/` : 'http://tbapi.pphuyu.com/api/'
// import qs from 'qs'

// 创建axios实例
// 创建请求时可以用的配置选项
const Instance = axios.create({
  baseURL,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// Instance.defaults.timeout = 20000 // 响应时间
// Instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8' // 配置请求头
// axios.defaults.baseURL = 'http://localhost:3000';   //配置接口地址
// axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : '/api';   //配置接口地址
// axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://10.19.1.50:8086/api/' : 'http://tbapi.pphuyu.com/api/';   //配置接口地址
// Instance.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/api' // 配置接口地址
const post = (url, params = {}) => {
  return new Promise((reslove, reject) => {
    Instance({
      method: 'post',
      url,
      data: params
      // 下面这行会导致数据传输时是这种格式 type=1&name=2
      // data: params ? qs.stringify(params) : {}
    }).then(res => {
      reslove(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
const get = (url, params = {}) => {
  return new Promise((reslove, reject) => {
    Instance({
      method: 'get',
      url,
      data: params
    }).then(res => {
      reslove(res)
    }).catch(err => {
      reject(err)
    })
  })
}
export {
  post,
  get
}

