import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './moudule'
import products from './moudule/products.js'
/* eslint-disable */scrollY
Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    modules: {
        products: products
    }
})

// for (const moduleName of Object.keys(modules)) {
//     if (modules[moduleName].actions && modules[moduleName].actions.initData) {
//         store.dispatch(`${moduleName}/initData`) 
//                                                }
// }
// export default store
