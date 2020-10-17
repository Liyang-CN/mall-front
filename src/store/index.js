import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import { } from '../utils/request'
import banners from './modules/banners'
import classify from './modules/classify'
import goods from './modules/goods'
import shopcart from './modules/shopcart'

import actions from './actions'
import { state, mutations, getters } from './mutations'

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        banners: banners,
        goods: goods,
        classify: classify,
        shopcart: shopcart
    }
})
