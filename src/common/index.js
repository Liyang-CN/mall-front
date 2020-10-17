import Vue from 'vue'
import toast from './toast'
import goback from './goback'
import hd from './header'
import picker from './picker'
import tabbar from './tabBar'


let obj = {
    toast,
    goback,
    hd,
    picker,
    tabbar,
}

for (let i in obj) {
    Vue.component(i, obj[i])
}