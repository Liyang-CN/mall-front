<template>
  <div>
    <hd></hd>
    <goback></goback>
    <div class="list">
      <router-link
        v-for="item in classifyDetail"
        :key="item.id"
        :to="'/shopDetail?id=' + item.id"
        class="item"
      >
        <img :src="'http://localhost:3000' + item.img" alt="" />
        <div class="item-con">
          <div class="goodsname">{{ item.goodsname }}</div>
          <div v-if="item.price" class="price">
            ￥{{ item.price | filterPrice }}
          </div>
          <div class="btn">立即抢购</div>
        </div>
      </router-link>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      classifyDetail: "classify/classifyDetail",
    }),
  },
  methods: {
    ...mapActions({
      requestClassifyDetail: "classify/requestClassifyDetail",
    }),
  },
  mounted() {
    var id = this.$route.query.id;
    this.requestClassifyDetail(id);
  },
};
</script>

<style scoped>
.goback {
  position: fixed;
  left: 0.2rem;
  top: 0.12rem;
  color: white;
}
.item {
  display: flex;
  padding: 0.2rem;
}
.item img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
}
.item-con {
  flex: 1;
  margin-left: 0.3rem;
}
.item-con .goodsname {
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