/*
 * @Author: Bruce.Lee
 * @Date: 2018-03-02 21:47:20
 * @Last Modified by: Bruce.Lee
 * @Last Modified time: 2018-05-14 15:00:02
 */
import axiosFactory from '@/assets/utils/axios';

// 基础路径
// export BASEURL = axiosFactory.BASEURL
// 注册
export function register(params) {
  return axiosFactory.put('register', params);
}
// 登录
export function login(params) {
  return axiosFactory.put('login', params);
}
