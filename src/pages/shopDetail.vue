<template>
  <div>
    <hd></hd>
    <goback></goback>
    <div class="detail">
      <img :src="'http://localhost:3000' + shopDetail.img" alt="" />
      <div class="info">
        <div class="line1">
          <div class="name">{{ shopDetail.goodsname }}</div>
          <div class="line1-right">
            <img src="../assets/img/img/cart_on.png" />
            <div class="collect">收藏</div>
          </div>
        </div>
        <div class="line2">
          <div class="left">
            <div v-if="shopDetail.price" class="new-price">
              ￥{{ shopDetail.price | filterPrice }}
            </div>
            <div v-if="shopDetail.market_price" class="old-price">
              ￥{{ shopDetail.market_price | filterPrice }}
            </div>
          </div>
          <div class="right">
            <div class="right-line2">
              <div :v-if="shopDetail.ishot" class="btn2">热卖</div>
              <div :v-if="shopDetail.isnew" class="btn2">新品</div>
            </div>
          </div>
        </div>
      </div>
      <div class="desc" v-html="shopDetail.description"></div>
      <div class="footer">
        <div class="btn" @click="isShow = true">加入购物车</div>
      </div>
      <picker v-if="isShow" @change="isShow = false"></picker>
    </div>
    <toast
      tit="加入购物车成功！"
      @hide="isShow1 = false"
      v-if="isShow1"
    ></toast>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      isShow1: false,
    };
  },
  computed: {
    ...mapGetters({
      shopDetail: "goods/shopDetail",
    }),
  },
  methods: {
    ...mapActions({
      requestShopDetail: "goods/requestShopDetail",
    }),
  },
  mounted() {
    var id = this.$route.query.id;
    // console.log(id);
    // reqShopDetail(id).then((res) => {
    //   this.detail = JSON.parse(JSON.stringify(res.data.list[0]));
    // });
    this.requestShopDetail(id);
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
}
.goback {
  position: fixed;
  left: 0.2rem;
  top: 0.12rem;
  color: white;
}

.detail > img {
  width: 100%;
  height: 4rem;
}

.info {
  border-top: 2px solid #eee;
  background: #fff;
  margin-bottom: 0.3rem;
}
.info .line1 {
  width: 6.5rem;
  display: flex;
  margin: 0.1rem auto 0;
}
.info .line1 .name {
  width: 5.5rem;
  padding-right: 0.3rem;
  border-right: 0.01rem solid #eee;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  font-size: 0.4rem;
  color: #333;
}
.info .line1 .line1-right {
  flex: 1;
  height: 0.8rem;
  text-align: center;
}
.info .line1 .line1-right img {
  height: 0.3rem;
}
.info .line1 .line1-right .collect {
  font-size: 0.2rem;
  color: red;
  text-align: center;
}
.info .line2 {
  width: 6.8rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0.1rem auto 0;
  padding-bottom: 0.4rem;
}
.line2 .left {
  width: 1.5rem;
}
.line2 .left .new-price {
  font-size: 0.3rem;
  color: red;
  margin: 0.1rem;
}
.line2 .left .old-price {
  font-size: 0.26rem;
  color: #666;
  text-decoration: line-through;
}
.line2 .right {
  flex: 1;
}
.line2 .right-line2 {
  overflow: hidden;
}
.line2 .right-line2 .btn2 {
  font-size: 0.2rem;
  color: #fa0;
  border: 0.01rem solid #fa0;
  padding: 0.05rem 0.1rem;
  margin-right: 0.1rem;
  float: left;
}

.desc {
  margin-bottom: 1rem;
}

.footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.02rem solid #ccc;
  background: #fff;
}
.footer .btn {
  width: 2rem;
  height: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}
</style>