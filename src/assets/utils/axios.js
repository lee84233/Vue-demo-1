import axios from 'axios'
import qs from 'qs'

/**
 * 基本参数
 */
// const BASEURL = 'http://localhost:81/interface/'
const BASEURL = '/interface/'

// 自定义实例
const AXIOS_INSTANCE = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

// 响应拦截器
AXIOS_INSTANCE.interceptors.response.use(
  (response) => {
    // 对响应数据处理
    return response
  },
  (error) => {
    // 对响应错误处理
    if (error.message.includes('timeout')) {
      error.message = '请求超时'
    } else {
      error.message = '请求错误'
    }
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break

        case 401:
          error.message = '未授权，请登录'
          break

        case 403:
          error.message = '拒绝访问'
          break

        case 404:
          error.message = `请求地址出错：${error.response.config.url}`
          break

        case 408:
          error.message = '请求超时'
          break

        case 500:
          error.message = '服务器内部错误'
          break

        case 501:
          error.message = '服务未实现'
          break

        case 502:
          error.message = '网关错误'
          break

        case 503:
          error.message = '服务不可用'
          break

        case 504:
          error.message = '网关超时'
          break

        case 505:
          error.message = 'HTTP版本不受支持'
          break

        default:
          error.message = '请求错误'
      }
    }
    layer.msg(error.message) // eslint-disable-line
    return Promise.reject(error)
  }
)

export default {
  // 基本路径
  BASEURL,
  // 返回一个Promise(发送 post 请求)
  post (url, params) {
    return new Promise((resolve, reject) => {
      AXIOS_INSTANCE.post(url, qs.stringify(params))
        .then(response => {
          resolve(response.data)
        }, error => {
          reject(error)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 返回一个Promise(发送 get 请求)
  get (url, params) {
    return new Promise((resolve, reject) => {
      AXIOS_INSTANCE.get(url, {
        params: params
      })
        .then(response => {
          resolve(response.data)
        }, error => {
          reject(error)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 返回一个Promise(发送 put 请求)
  put (url, params) {
    return new Promise((resolve, reject) => {
      AXIOS_INSTANCE.put(url, qs.stringify(params))
        .then(response => {
          resolve(response.data)
        }, error => {
          reject(error)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 返回一个Promise(发送 delete 请求)
  deletes (url, params) {
    return new Promise((resolve, reject) => {
      AXIOS_INSTANCE.delete(url, {
        params: params
      })
        .then(response => {
          resolve(response.data)
        }, error => {
          reject(error)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}