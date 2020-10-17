import { reqIndexGoods, reqShopDetail, } from '../../utils/request'
const state = {
    indexGoods: [],
    shopDetail: {},
    shopInfo: [],
}
const mutations = {
    changeIndexGoods(state, arr) {
        state.indexGoods = arr
    },
    changeShopDetail(state, obj) {
        state.shopDetail = obj
    },
    changeShopInfo(state, arr) {
        state.shopInfo = arr
    },
}
const actions = {
    requestIndexGoods(context) {
        if (context.state.indexGoods.length > 0) {
            return;
        }
        reqIndexGoods().then(res => {
            context.commit('changeIndexGoods', res.data.list[2].content)
        })
    },
    requestShopDetail(context, id) {
        // 如果上次的id和而这次要请求的id一样，就不用再请求了
        if (id == context.state.shopDetail.id) {
            return;
        } else {
            context.commit('changeShopDetail', {})
            context.commit('changeShopInfo', [])
        }
        reqShopDetail(id).then(res => {
            var obj1 = JSON.parse(JSON.stringify(res.data.list[0]))
            var arr1 = JSON.parse(obj1.specsattr)
            context.commit('changeShopDetail', obj1)
            context.commit('changeShopInfo', arr1)
        })
    },
}
const getters = {
    indexGoods(state) {
        return state.indexGoods
    },
    shopDetail(state) {
        return state.shopDetail
    },
    shopInfo(state) {
        return state.shopInfo
    },
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}