<template>
  <div class="toast">
      <div class="title">
          {{tit}}
      </div>
  </div>
</template>

<script>
export default {
    props:['tit'],
    mounted(){
        setTimeout(() => {
            this.$emit('hide')
        }, 1000);
    }
}
</script>

<style>
.toast{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
}
.title{
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 20px;
}
</style>