<template>
  <div>
    <hd></hd>
    <div class="top">
      <img src="../assets/img/1.jpg" alt="" />
    </div>
    <div class="bottom">
      <div class="name">秋子电台</div>
      <div class="collection">
        <img src="../assets/img/keep.png" alt="" />
        <p class="collection-text">我的收藏（5）</p>
      </div>
    </div>
    <div class="order">
      <div class="order-top">
        <p class="left">我的订单</p>
        <p class="right">查看订单</p>
      </div>
      <div class="order-bottom">
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/icon_refund.png" alt="" />
            <p class="status-text">1</p>
          </div>
          <p class="img-text">待发货</p>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/icon_refund.png" alt="" />
            <p class="status-text">2</p>
          </div>
          <p class="img-text">待发货</p>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/icon_refund.png" alt="" />
            <p class="status-text">3</p>
          </div>
          <p class="img-text">待发货</p>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/icon_refund.png" alt="" />
            <p class="status-text">4</p>
          </div>
          <p class="img-text">待发货</p>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="../assets/img/icon_refund.png" alt="" />
            <p class="status-text">5</p>
          </div>
          <p class="img-text">待发货</p>
        </div>
      </div>
    </div>
    <div class="address">收货地址管理</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  height: 2.4rem;
  background: #f90;
  position: relative;
}
.top img {
  width: 1.8rem;
  height: 1.8rem;
  border: 0.14rem solid #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -0.9rem;
  bottom: -0.9rem;
}
.bottom {
  height: 2.62rem;
  background-color: #fff;
}
.bottom .name {
  padding-top: 0.96rem;
  text-align: center;
  font-size: 0.32rem;
  color: #333;
}
.bottom .collection {
  margin-top: 0.5rem;
  overflow: hidden;
}
.bottom .collection img {
  width: 0.38rem;
  height: 0.38rem;
  margin-left: 0.33rem;
  float: left;
  margin-right: 0.25rem;
}
.bottom .collection .collction-text {
  font-size: 0.34rem;
  line-height: 0.38rem;
  float: left;
}
.order {
  margin-top: 0.14rem;
}
.order-top {
  height: 1.24rem;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #333;
}
.order-top .left {
  float: left;
  font-size: 0.34rem;
  line-height: 1.24rem;
  color: #333;
  margin-left: 45px;
}
.order-top .right {
  float: right;
  color: #b6b6b6;
  line-height: 1.24rem;
  font-size: 0.34rem;
  margin-right: 0.5rem;
}
.order-bottom {
  height: 1.88rem;
  background: #fff;
  overflow: hidden;
}
.status {
  width: 20%;
  float: left;
  height: 1.88rem;
}
.status-text {
  font-size: 0.18rem;
  width: 0.38rem;
  height: 0.38rem;
  background: red;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  right: -0.19rem;
  top: -0.19rem;
  text-align: center;
  line-height: 0.38rem;
}
.img-parent {
  width: 0.54rem;
  height: 0.48rem;
  margin: 0.46rem auto 0;
  position: relative;
}
.img-parent img {
  width: 0.54rem;
  height: 0.48rem;
  position: absolute;
  left: 0;
  top: 0;
}
.img-text {
  margin-top: 0.23rem;
  font-size: 0.24rem;
  color: #666;
  text-align: center;
}
.address {
  background: #fff;
  font-size: 0.34rem;
  height: 1.3rem;
  line-height: 1.3rem;
  padding-left: 0.43rem;
  margin-top: 0.14rem;
  color: #666;
}
</style>