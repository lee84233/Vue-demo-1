# vue2.0 框架整理

> 实现一个简单菜谱demo，来对 vue2 框架进行丰富和完善 :persevere:

## Build Setup

``` bash
# use git,clone repository
git clone https://github.com/lee84233/vue-demo

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 1. 已安装 `SASS`

### 1.1 安装sass
`npm install --save-dev node-sass sass-loader`

### 1.2 使用
```css
// 组件内加上 lang 属性
<style lang="scss">
// 你的sass代码
</style>
```

## 2. 全局安装了 `jQuery`
难免会用到 `jquery` 或依赖 `jquery的插件`，当然你完全可以移除`jquery`。

## 3. 全局安装了 `layer`
layer：十分好用的弹窗插件，官网有详细的API。[官网](http://layer.layui.com/)

## 4. 安装了 `js-cookie`
js-cookie：处理 `cookie` 的插件，支持对象的存储等。[Github](https://github.com/js-cookie/js-cookie)    
```javascript
// 非全局安装，使用之前先引入依赖
import cookies from 'js-cookie'
```

## 5. `router` 的处理
1. 路由的路径 `/src/router/*.js`
2. 使用扩展运算符 `...`，让路由可以模块化配置
3. 组件的懒加载、导航守卫等，详见官方文档
4. [官方文档](https://router.vuejs.org/zh-cn/)

## 6. `vuex` 的配置
1. 路径 `/src/store/*.js`
2. 基础使用，详见 [官方文档](https://vuex.vuejs.org/zh-cn/)
3. `store` 不提供缓存机制，页面重载（页面刷新、页面重新打开）会重置，封装了 `vuex-persistedstate` 对 `vuex` 提供缓存机制。
4. [官方文档](https://vuex.vuejs.org/zh-cn/)、[vuex-persistedstate GitHub](https://github.com/robinvdvleuten/vuex-persistedstate)

## 7. http请求 `axios` 的封装
1. 创建一个 `axios` 实例，定义实例 `baseUrl`、`timeout`、`Content-Type` 和 响应拦截器进行错误的捕获和处理。
实例文件路径：`/src/assets/utils/axios.js`

### 7.1 使用

1. 定义接口
```javascript
// api.js文件内容
import axiosFactory from '../../assets/utils/axios'
export default {
  // 基础路径
  BASEURL: axiosFactory.BASEURL,
  // post请求
  getChao (params) {
    return axiosFactory.post('food.php', params)
  },
  // get请求
  getChao2 (params) {
    return axiosFactory.get('food.php', params)
  }
}
```

2. 导入并使用已定义的接口

```javascript
import api from './api'

api.getChao({
  type: 'chao'
}).then(response => {
  // 成功回调
  console.log(response)
}).catch(error => {
  // 错误处理
  console.dir(error)
})

```

## 8. 国际化
1. vue-i18n：vue国际化插件。[Github](https://github.com/kazupon/vue-i18n)

## 9. 代理-解决接口跨域问题
`/config/index.js` 文件中配置代理。
```javascript
// 代理
proxyTable: {
  '/api': {
    target: 'http://localhost:8000',
    changeOrigin: true,
    pathRewrite: {
      // '^/api': '/interface'
    }
  }
}
```

## 10. 后台数据

1. 后台使用 `egg.js` js框架，代码详见github。[egg-demo](https://github.com/lee84233/egg-demo)
2. 数据库是 MYSQL。sql文件见 `egg-demo/my-menu.sql`
