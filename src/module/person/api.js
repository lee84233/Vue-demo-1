import axiosFactory from '@/assets/utils/axios';

export default {
  // 基础路径
  BASEURL: axiosFactory.BASEURL,
  // 切换语言
  switchLanguage(params) {
    return axiosFactory.post('switchLanguage', params);
  }
};
