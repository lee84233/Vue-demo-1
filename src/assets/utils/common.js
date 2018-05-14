/*
 * 公用方法
 * @Author: Bruce.Lee
 * @Date: 2018-03-03 11:27:25
 * @Last Modified by: Bruce.Lee
 * @Last Modified time: 2018-05-14 15:13:11
 */

export default {
  /**
   * 验证是否为手机号
   * @param  {number}  num 要验证手机号
   * @return {Boolean}     [是否为手机号]
   */
  isPhone(num) {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    return reg.test(num);
  }
};
