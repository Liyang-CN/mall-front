import axios from 'axios'
// 开发环境下 需要加 "/api"
// 生产环境下 不需要加 "/api"
let baseUrl = '/api'

// 请求拦截 每次发起请求都要做的事，
// axios.interceptors.request.use(config => {
//     // console.log(config);
//     if (config.url != baseUrl + '/login') {
//         config.headers.token = localStorage.getItem('token')
//     }
//     return config
// })

// 响应拦截：服务器响应组件，每次都要做的事，return的内容才是组件收到的内容
axios.interceptors.response.use(res => {
    console.log('本次请求的地址是' + res.config.url);
    console.log(res);
    return res
})

// 1、前端post请求传递参数，后端收不到，看传递的参数有没有文件，如果没有，使用qs解决
import qs from 'qs'

// 登录接口
export const reqLogin = (phone, password) => {
    return axios({
        url: baseUrl + '/api/login',
        method: 'post',
        data: qs.stringify({
            phone: phone,
            password: password
        })
    })
}

// 注册
export const reqRegister = (phone, nickname, password) => {
    return axios({
        url: baseUrl + '/api/register',
        method: 'post',
        data: {
            phone: phone,
            nickname: nickname,
            password: password
        }
    })
}

// banner
export const reqBanner = () => {
    return axios({
        url: baseUrl + '/api/getbanner',
    })
}

// 主页商品
export const reqIndexGoods = () => {
    return axios({
        url: baseUrl + '/api/getindexgoods',
    })
}
// 商品详情
export const reqShopDetail = (id) => {
    return axios({
        url: baseUrl + '/api/getgoodsinfo',
        params: {
            id: id
        }
    })
}
// 分类页
export const reqClassfy = () => {
    return axios({
        url: baseUrl + '/api/getcatetree'
    })
}
// 分类详情页
export const reqClassifyDetail = (fid) => {
    return axios({
        url: baseUrl + '/api/getgoods',
        params: {
            fid: fid
        }
    })
}
// 请求购物车列表
export const reqShopCart = (uid) => {
    return axios({
        url: baseUrl + '/api/cartlist',
        params: {
            uid: uid
        }
    })
}
// 购物车修改
export const reqCartEdit = (id, type) => {
    return axios({
        url: baseUrl + '/api/cartedit',
        method: 'post',
        data: {
            id: id,
            type: type
        }
    })
}

// 购物车添加
export const reqCartAdd = (uid, goodsid, num) => {
    return axios({
        url: baseUrl + '/api/cartadd',
        method: 'post',
        data: {
            uid,
            goodsid,
            num
        }
    })
}

// 购物车删除
export const reqCartDel = (id)=>{
    return axios({
        url:baseUrl+'/api/cartdelete',
        method: 'post',
        data: {
            id
        }
    })
}