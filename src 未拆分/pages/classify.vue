<template>
  <div>
    <hd></hd>
    <div class="main">
      <div class="left">
        <div
          :class="n == index ? 'nav-select' : ''"
          @click="n = index"
          v-for="(item, index) in classifyTree"
          :key="index"
          class="nav"
        >
          {{ item.catename }}
        </div>
      </div>
      <div v-if="classifyTree[n]" class="right">
        <div
          @click="toDetail(i.id)"
          v-for="i in classifyTree[n].children"
          :key="i.id"
          class="every"
        >
          <img :src="'http://localhost:3000'+i.img" />
          <div class="text">{{ i.catename }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      n: 0,
    };
  },
  computed: {
    ...mapGetters({
      classifyTree: "classifyTree",
    }),
  },
  methods: {
    ...mapActions({
      requestClassifyTree: "requestClassifyTree",
    }),
    toDetail(id) {
      this.$router.push("/classifyDetail?id=" + id);
    },
  },
  mounted() {
    this.requestClassifyTree();
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.left {
  width: 2.34rem;
  background: #fafafa;
}
.nav {
  font-size: 0.28rem;
  height: 0.93rem;
  text-align: center;
  line-height: 0.93rem;
  border-left: 0.1rem solid #fafafa;
}
.nav-select {
  border-left: 0.1rem solid #1d84a7;
  background: #fff;
  color: #f90;
}

.right {
  flex: 1;
  overflow: hidden;
}
.every {
  float: left;
  border: 0.02rem solid #1d84a7;
  border-radius: 0.2rem;
  margin-left: 0.1rem;
  margin-top: 0.24rem;
  position: relative;
  overflow: hidden;
}
.every img {
  width: 2.2rem;
  height: 2.3rem;
}
.every .text {
  height: 0.48rem;
  width: 2.2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #1d84a7;
  color: #fff;
  text-align: center;
  line-height: 0.48rem;
  font-size: 0.23rem;
}
</style>