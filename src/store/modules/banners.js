import { reqBanner } from '../../utils/request'
const state = {
    banners: [],
}
const mutations = {
    changeBanners(state, arr) {
        state.banners = arr
    },
}
const actions = {
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
}
const getters = {
    banners(state) {
        return state.banners
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}