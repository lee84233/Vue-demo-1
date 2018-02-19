import axiosFactory from '@/assets/utils/axios'

export default {
  // 基础路径
  BASEURL: axiosFactory.BASEURL,
  // 注册
  register (params) {
    return axiosFactory.put('register', params)
  },
  // 登录
  login (params) {
    return axiosFactory.put('login', params)
  }
}
