import axiosFactory from '@/assets/utils/axios';

export default {
  // 基础路径
  BASEURL: axiosFactory.BASEURL,
  // 获取炒菜列表
  getChao(params) {
    return axiosFactory.get('foodList', params);
  }
};
