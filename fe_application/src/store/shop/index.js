/* 
  ! 这个作为 shop 的状态管理
*/
import {
  SHOP_ADD,
  SHOP_MODIFY,
  SHOP_DEL,
  SHOP_QUERY
} from 'store/action_type'

import request from 'utils/request'

export default {
  state: {
    data: null 
  }, 
  actions: {
    async add ({ commit },payload) {
      // 发送数据请求
      const result = await request({
        url: '/shop',
        data: payload,
        method: 'POST'
      })

      commit({
        type: SHOP_ADD,
        payload: result.data
      })
    },
    async del ({ commit },_id ) { 
      const result = await request({
        url: '/shop',
        method: "DELETE",
        params: {
          _id   
        }
      })
      commit({
        type: SHOP_DEL,
        payload: result.data.result
      })
    },
    modify ({ commit }) {

    },
    async query ({ commit }) {
      const result = await request({
        url: '/shop',
        method: 'GET'
      })
      commit({
        type: SHOP_QUERY,
        payload: result.data.result 
      })
    }
  },
  mutations: {
    SHOP_ADD ( state,action ) {
      state.data = action.payload
    },
    SHOP_QUERY ( state, action ) {
      state.data = action.payload
    },
    SHOP_DEL ( state,action ) {
      state.data = action.payload
    }
  }
}

