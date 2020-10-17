import { reqShopCart, reqCartEdit, reqCartAdd, reqCartDel } from '../../utils/request'
const state = {
    shopCartList: [],
    cartListEdit: [],
    addCartList: [],
    delCartList: [],
}
const mutations = {

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
}
const actions = {
    requestShopCartList(context, uid) {
        reqShopCart(uid).then(res => {
            var list = res.data.list ? res.data.list : []

            list.forEach(item => {
                item.checked = false;
            })
            context.commit('changeShopCartList', list)

        })
    },
    requestEditCartList(context, { id: id, type: type }) {
        reqCartEdit(id, type).then(res => {
            context.dispatch("requestShopCartList", localStorage.getItem("uid"))
        })
    },
    requestAddCartList(context, { uid: uid, goodsid: goodsid, num: num }) {
        reqCartAdd(uid, goodsid, num).then(res => {
            context.commit('changeAddCartList', [])
        })
    },
    requestDelCartList(context, id) {
        reqCartDel(id).then(res => {
            context.dispatch("requestShopCartList", localStorage.getItem("uid"))
        })
    }
}
const getters = {
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
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}