<template>
  <div class="header">{{ this.$route.name }}</div>
</template>

<script>
export default {};
</script>

<style>
.header {
  width: 100%;
  height: 0.8rem;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
  position: fixed;
  left: 0;
  top: 0;
  background: #ff9900;
  color: #fff;
}
</style>