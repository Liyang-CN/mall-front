<template>
  <footer>
    <router-link
      v-for="item in tabNav"
      :key="item.path"
      active-class="select"
      :to="item.path"
    >
      <img
        :src="$route.path == item.path ? item.selectImg : item.noSelect"
        alt=""
      />
      <p>{{ item.text }}</p>
    </router-link>
  </footer>
</template>

<script>
export default {
  props: ["tabNav"],
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
}
footer a {
  flex: 1;
  text-align: center;
}
footer img {
  padding-top: 0.1rem;
  width: 0.4rem;
  height: 0.4rem;
}
footer p {
  text-align: center;
}
.select p {
  color: #ff4400;
}
</style>