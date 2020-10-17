<template>
  <div class="mask" @click.self="add">
    <div class="picker">
      <div class="info">
        <img :src="'http://localhost:3000' + shopDetail.img" alt="" />
        <span>{{ shopDetail.goodsname }}</span>
      </div>
      <div class="sku">
        <h3>{{ shopDetail.specsname }}</h3>
        <div class="attr">
          <span
            @click="n = index"
            :class="n == index ? 'select' : ''"
            v-for="(item, index) in shopInfo"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
      <div @click="add" class="btn">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isSelect: false,
      n: 0,
      uid: localStorage.getItem("uid"),
    };
  },
  computed: {
    ...mapGetters({
      shopDetail: "shopDetail",
      shopInfo: "shopInfo",
      addCartList: "addCartList",
    }),
  },
  methods: {
    ...mapActions({
      requestAddCartList: "requestAddCartList",
    }),
    add() {
      var goodsid = this.$route.query.id;
      this.requestAddCartList({ uid: this.uid, goodsid: goodsid, num: 1 });
      this.$emit("change");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}
.picker {
  width: 100%;
  padding: 0.3rem;
  background: #fff;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
}
.info {
  overflow: hidden;
}
.info img {
  width: 2rem;
  height: 2rem;
  float: left;
  border-radius: 0.2rem;
  margin-right: 0.3rem;
}
.info span {
  float: left;
  line-height: 0.8rem;
  font-size: 0.4rem;
}
.sku h3 {
  font-size: 0.38rem;
  line-height: 0.6rem;
  color: #333;
  margin-top: 0.3rem;
}
.sku .attr {
  overflow: hidden;
}
.attr span {
  float: left;
  padding: 0.2rem 0.3rem;
  border: 0.02rem solid #666;
  border-radius: 0.1rem;
  margin: 0.2rem;
  font-size: 0.3rem;
}
.attr .select {
  color: #f90;
  border-color: #f90;
}
.picker .btn {
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
  position: static;
  display: block;
  margin: 0 auto;
}
</style>