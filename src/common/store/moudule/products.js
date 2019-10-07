/* eslint-disable */
import { instance_1 } from '../../axios'
export default {
    namespaced: true,
    state: {
        amount: 0,
        products: null,
        shopcart: null
    },

    getters: {
        getProducts: state => {
          return state.products
        },
        getShopcart: state => {
            return state.shopcart
        }
    },
    mutations: {
        updateProducts: (state, item) => {
            state.amount += item
        },
        initData: (state, item) => {
            console.log(item.products)
            state.products = item.products
            console.log(state.products)
        },
        getShopCart: (state, item) => {
            state.shopcart = item
        },
        removeProducts: (state,item) => {
            state.amount += item
        }
    },

    actions: {
       async initData({commit,state}) {
           if(!state.products){
               const pros = await instance_1.get('/products.json')
               console.log(pros)
               commit('initData',await pros.data)
           }
       },
       async getShopCart({commit,state}) {
           const items = await instance_1.get('/shopcart.json')
           commit('getShopCart', items.data)
           console.log(items.data)
           console.log(state.shopcart)
       }
    }
}