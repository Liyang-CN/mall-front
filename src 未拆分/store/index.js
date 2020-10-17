import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { reqBanner, reqIndexGoods, reqShopDetail, reqClassfy, reqClassifyDetail, reqShopCart, reqCartEdit, reqCartAdd, reqCartDel } from '../utils/request'

export default new Vuex.Store({
    state: {
        banners: [],
        indexGoods: [],
        shopDetail: {},
        shopInfo: [],
        classifyTree: [],
        classifyDetail: [],
        shopCartList: [],
        cartListEdit: [],
        addCartList: [],
        delCartList: [],
    },
    mutations: {
        changeBanners(state, arr) {
            state.banners = arr
        },
        changeIndexGoods(state, arr) {
            state.indexGoods = arr
        },
        changeShopDetail(state, obj) {
            state.shopDetail = obj
        },
        changeShopInfo(state, arr) {
            state.shopInfo = arr
        },
        changeClassifyTree(state, arr) {
            state.classifyTree = arr
        },
        changeClassifyDetail(state, arr) {
            state.classifyDetail = arr
        },
        changeShopCartList(state, arr) {
            state.shopCartList = arr
        },
        changeCartListEdit(state, arr) {
            state.cartListEdit = arr
        },
        changeAddCartList(state, arr) {
            state.addCartList = arr
        },
        changeDelCartList(state, arr) {
            state.delCartList = arr
        }
    },
    actions: {
        requestBanners(context) {
            // context代表这个仓库
            // 先走缓存
            if (context.state.banners.length > 0) {
                return;
            }
            reqBanner().then(res => {
                context.commit('changeBanners', res.data.list)
            })
        },
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
        requestClassifyTree(context) {
            reqClassfy().then(res => {
                context.commit('changeClassifyTree', res.data.list)
            })
        },
        requestClassifyDetail(context, id) {

            reqClassifyDetail(id).then(res => {
                context.commit('changeClassifyDetail', res.data.list)
            })
        },
        requestShopCartList(context, uid) {
            reqShopCart(uid).then(res => {
                if (res.data.list) {
                    res.data.list.forEach(item => {
                        item.checked = false;
                    })
                    context.commit('changeShopCartList', res.data.list)
                } else {
                    return
                }
            })
        },
        requestEditCartList(context, { id: id, type: type }) {
            reqCartEdit(id, type).then(res => {
                context.commit('changeShopCartList', [])
            })
        },
        requestAddCartList(context, { uid: uid, goodsid: goodsid, num: num }) {
            reqCartAdd(uid, goodsid, num).then(res => {
                context.commit('changeAddCartList', [])
            })
        },
        requestDelCartList(context, id) {
            reqCartDel(id).then(res => {
                context.commit('changeDelCartList', [])
            })
        }
    },
    getters: {
        banners(state) {
            return state.banners
        },
        indexGoods(state) {
            return state.indexGoods
        },
        shopDetail(state) {
            return state.shopDetail
        },
        shopInfo(state) {
            return state.shopInfo
        },
        classifyTree(state) {
            return state.classifyTree
        },
        classifyDetail(state) {
            return state.classifyDetail
        },
        shopCartList(state) {
            return state.shopCartList
        },
        cartListEdit(state) {
            return state.cartListEdit
        },
        addCartList(state) {
            return state.addCartList
        },
        delCartList(state) {
            return state.delCartList
        }
    }
})
