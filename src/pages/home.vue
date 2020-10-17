<template>
  <div class="home">
    <div class="head">
      <img src="../assets/img/img/home/logo.jpg" alt="" />
      <div class="search_wrap">
        <div class="search">寻找商品</div>
      </div>
    </div>
    <div class="tuijian">
      <div class="banner">
        <div class="pics" v-for="item in banners" :key="item.id">
          <img :src="item.img" alt="" />
        </div>
        <p class="dots">
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>
      <div class="min-box">
        <div class="eve">
          <img src="../assets/img/img/home/1.jpg" alt="" />
          <div>限时抢购</div>
        </div>
        <div class="eve">
          <img src="../assets/img/img/home/1.jpg" alt="" />
          <div>积分商城</div>
        </div>
        <div class="eve">
          <img src="../assets/img/img/home/1.jpg" alt="" />
          <div>联系我们</div>
        </div>
        <div class="eve">
          <img src="../assets/img/img/home/1.jpg" alt="" />
          <div>商品分类</div>
        </div>
      </div>
      <div class="list">
        <ul>
          <li
            @click="toDetail(item.id)"
            v-for="item in indexGoods"
            :key="item.id"
            class="item"
          >
            <img :src="'http://localhost:3000'+item.img" alt="" />
            <div class="item-con">
              <div class="goodname">{{ item.goodsname }}</div>
              <div v-if="item.price" class="price">
                ￥{{ item.price | filterPrice }}
              </div>
              <div class="btn">立即抢购</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { reqBanner, reqIndexGoods } from "../utils/request";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      banners: "banners/banners",
      indexGoods: "goods/indexGoods",
    }),
  },
  methods: {
    toDetail(id) {
      this.$router.push("/shopDetail?id=" + id);
    },
    ...mapActions({
      requestBanners: "banners/requestBanners",
      requestIndexGoods: "goods/requestIndexGoods",
    }),
  },
  mounted() {
    this.requestBanners();
    this.requestIndexGoods();
  },
};
</script>

<style scoped>
.home {
  flex: 1;
  margin-bottom: 1rem;
}
.head {
  margin-top: -0.5rem;
  margin-bottom: 0.3rem;
  display: flex;
  background: #fafafa;
}
.head img {
  margin-left: 0.2rem;
  width: 2rem;
  height: 0.5rem;
}
.head .search_wrap {
  flex: 1;
}
.search_wrap .search {
  width: 1.8rem;
  height: 0.5rem;
  background: #ccc;
  color: #666;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.14rem;
  margin: 0 auto;
  border-radius: 0.2rem;
}
.banner {
  height: 4rem;
  position: relative;
  width: 100vw;
  overflow: hidden;
}
.banner .pics {
  float: left;
}
.banner img {
  height: 4rem;
  display: block;
}
.dots {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0.1rem;
  text-align: center;
}
.dots span {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  /* color: rgba(0, 0, 0, .5); */
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin: 0 0.15rem;
}
.dots span.active {
  background: cornflowerblue;
}

.min-box {
  display: flex;
}
.min-box .eve {
  flex: 1;
  text-align: center;
  color: #666;
}
.min-box .eve img {
  width: 90%;
}
.min-box .eve > div {
  font-size: 0.2rem;
}

.list .item {
  display: flex;
  padding: 0.2rem;
}
.list .item img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
}
.list .item .item-con {
  flex: 1;
  margin-left: 0.3rem;
}
.item-con .goodname {
  font-size: 0.38rem;
  color: #333;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
.item-con .price {
  color: #e23838;
  font-size: 0.4rem;
}
.item-con .btn {
  padding: 0.2rem 0.4rem;
  background: #f90;
  color: #fff;
  display: inline-block;
  border-radius: 0.2rem;
}
</style>