/*
 * @Author: Bruce.Lee
 * @Date: 2018-03-02 21:47:20
 * @Last Modified by: Bruce.Lee
 * @Last Modified time: 2018-03-03 10:56:48
 */
import axiosFactory from '@/assets/utils/axios'

export default {
  // 基础路径
  BASEURL: axiosFactory.BASEURL,
  // 注册
  register(params) {
    return axiosFactory.put('register', params)
  },
  // 登录
  login(params) {
    return axiosFactory.put('login', params)
  },
  test: {foo: 'aaa'}
}
