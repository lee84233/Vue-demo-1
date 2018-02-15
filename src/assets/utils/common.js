module.exports = {
  /**
   * 验证是否为手机号
   * @param  {number}  num 要验证手机号
   * @return {Boolean}     [是否为手机号]
   */
  isPhone (num) {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
    return reg.test(num)
  }
}
