<template>
  <div class="index">
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <!-- <footer>
      <router-link active-class="select" to="/index/home">首页</router-link>
      <router-link active-class="select" to="/index/classify">分类</router-link>
      <router-link active-class="select" to="/index/shopcart"
        >购物车</router-link
      >
      <router-link active-class="select" to="/index/mine">我的</router-link>
    </footer> -->
    <tabbar :tabNav="tabNav"></tabbar>
  </div>
</template>

<script>
import home_nor from "../assets/img/tab_home_nor.png";
import home_hig from "../assets/img/tab_home_hig.png";
import menu_nor from "../assets/img/tab_menu_nor.png";
import menu_hig from "../assets/img/tab_menu_hig.png";

import shop_nor from "../assets/img/tab_shopping_nor.png";
import shop_hig from "../assets/img/tab_shopping_hig.png";
import me_nor from "../assets/img/tab_me_nor.png";
import me_hig from "../assets/img/tab_me_hig.png";
export default {
  data() {
    return {
      home_nor,
      home_hig,
      menu_nor,
      menu_hig,
      shop_nor,
      shop_hig,
      me_nor,
      me_hig,
      tabNav: [
        {
          path: "/index/home",
          text: "首页",
          selectImg: home_hig,
          noSelect: home_nor,
        },
        {
          path: "/index/classify",
          text: "分类",
          selectImg: menu_hig,
          noSelect: menu_nor,
        },
        {
          path: "/index/shopcart",
          text: "购物车",
          selectImg: shop_hig,
          noSelect: shop_nor,
        },
        {
          path: "/index/mine",
          text: "我的",
          selectImg: me_hig,
          noSelect: me_nor,
        },
      ],
    };
  },
};
</script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
}
/* footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  line-height: 1rem;
  display: flex;
  background: #fff;
}
footer a {
  flex: 1;
  text-align: center;
}
.select {
  color: #ff9900;
} */
</style>