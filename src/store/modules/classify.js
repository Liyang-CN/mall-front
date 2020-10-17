import { reqClassfy, reqClassifyDetail, } from '../../utils/request'
const state = {
    classifyTree: [],
    classifyDetail: [],
}
const mutations = {
    changeClassifyTree(state, arr) {
        state.classifyTree = arr
    },
    changeClassifyDetail(state, arr) {
        state.classifyDetail = arr
    },
}
const actions = {
    requestClassifyTree(context) {
        // 走缓存
        if (context.state.classifyTree.length > 0) {
            return
        }
        reqClassfy().then(res => {
            context.commit('changeClassifyTree', res.data.list)
        })
    },
    requestClassifyDetail(context, id) {
        // if (context.state.classifyDetail.length > 0) {
        //     return
        // }
        reqClassifyDetail(id).then(res => {
            context.commit('changeClassifyDetail', res.data.list)
        })
    },
}
const getters = {
    classifyTree(state) {
        return state.classifyTree
    },
    classifyDetail(state) {
        return state.classifyDetail
    },
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}