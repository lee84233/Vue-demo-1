import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
// cookie 操作
// import Cookies from 'js-cookie'

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex)

// 定义已点菜单的 Vuex
const orderFoodVuex = new VuexPersistence({
  key: 'myMenuStore',
  storage: window.sessionStorage,
  reducer: (key) => {
    return {
      token: key.token,
      orderFoods: key.orderFoods
    }
  }
})

// cookie 存储store
/* const orderFoodVuex = new VuexPersistence({
  key: 'myMenuStore',
  // 恢复存储
  restoreState: (key, storage) => {
    return Cookies.getJSON(key)
  },
  // 持久性保存状态
  saveState: (key, state, storage) => {
    Cookies.set(key, state)
  },
  reducer: key => ({
    orderFoods: key.orderFoods
  })
}) */

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    token: 'f1354226df5b3d9505ed246ec8ef234468da99e2',
    orderFoods: [],
    result: {
      status: false,
      msg: ''
    }
  },
  getters: {
    FoodNum: state => {
      return state.orderFoods.length
    }
  },
  mutations: {
    addFood (state, newOrder) {
      let index = state.orderFoods.findIndex(item => {
        return item.id === newOrder.id
      })
      // 存在，已点
      if (index !== -1) {
        state.result = {
          status: false,
          msg: '已点过该菜品'
        }
      } else {
        state.orderFoods.push(newOrder)
        state.result = {
          status: true,
          msg: '成功'
        }
      }
    },
    delFood (state, index) {
      state.orderFoods.splice(index, 1)
    },
    setToken (state, token) {
      state.token = token
    }
  },
  plugins: [orderFoodVuex.plugin]
})
