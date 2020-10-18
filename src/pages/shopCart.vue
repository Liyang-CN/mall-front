<template>
  <div>
    <hd></hd>
    <div class="con">
      <div
        v-for="(item, index) in shopCartList"
        :key="item.goodsid"
        class="every"
      >
        <div class="title1">
          <img class="title-img" :src="store" alt="" />
          <div class="title-text">杭州保税区仓</div>
        </div>
        <div class="every-con">
          <div :class="isEdit ? 'inner  inner2' : 'inner'">
            <div @click="changeOne(index)" class="left">
              <img :src="item.checked ? radio_hig : radio_nor" alt="" />
            </div>
            <div class="center">
              <img :src="'http://localhost:3000' + item.img" alt="" />
            </div>
            <div class="right">
              <div class="name">{{ item.goodsname }}</div>
              <div class="btns">
                <div @click="sub(index)" class="btn">-</div>
                <div class="btn">{{ item.num }}</div>
                <div @click="add(index)" class="btn">+</div>
              </div>
              <div v-if="item.num * item.price" style="margin-top: 0.15rem">
                总价:{{ (item.num * item.price) | filterPrice }}
              </div>
            </div>
            <div v-if="item.price" class="price">
              ￥{{ item.price | filterPrice }}
            </div>
            <div @click="delBtn(index)" class="delete-btn">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div @click="changeAll" class="quanxuan">
        <img
          class="quanxuan-img"
          :src="checkedAll ? radio_hig : radio_nor"
          alt=""
        />
        <div class="quanxuan-text">全选</div>
      </div>
      <div @click="isEdit = !isEdit" class="edit">
        <img class="edit-img" :src="isEdit ? editor_hig : editor_nor" alt="" />
        <div class="edit-text">编辑</div>
      </div>
      <div class="all">
        <div class="all-price">合计：{{ allPrice | filterPrice }}</div>
        <div class="all-price tip">（不含运费）</div>
      </div>
      <div class="pay-btn">去结算</div>
    </div>
    <!-- 提示购买数量不可以再少了 -->
    <toast
      @hide="isShow = false"
      tit="亲，宝贝数量不能再少啦！"
      v-if="isShow"
    ></toast>
    <!-- 提示删除成功 -->
    <toast tit="删除成功！" @hide="isDelPage = false" v-if="isDelPage"></toast>
    <!-- 删除对话框 -->
    <div v-if="isDel" @click.self="isDel = false" class="dialog">
      <div class="dialog-con">
        <div class="dialog-top">
          <div class="dialog-msg">你确定要删除吗？</div>
        </div>
        <div class="dialog-bottom">
          <div @click="isDel = false" class="dialog-btn">取消</div>
          <div @click="yesDel()" class="dialog-btn btn1">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import radio_nor from "../assets/img/radio_nor.png";
import radio_hig from "../assets/img/radio_hig.png";
import editor_nor from "../assets/img/editor_nor.png";
import editor_hig from "../assets/img/editor_hig.png";
import store from "../assets/img/store.png";

import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      radio_nor,
      radio_hig,
      editor_nor,
      editor_hig,
      store,
      isEdit: false,
      isAll: false,
      checkedAll: false,
      uid: localStorage.getItem("uid"),
      isShow: false,
      isDel: false,
      delId: -1,
      isDelPage: false,
    };
  },
  computed: {
    ...mapGetters({
      shopCartList: "shopcart/shopCartList",
      addCartList: "shopcart/addCartList",
      delCartList: "shopcart/delCartList",
    }),
    allPrice() {
      let sum = 0;
      this.shopCartList.forEach((item) => {
        if (item.checked) {
          sum += item.num * item.price;
        }
      });
      return sum;
    },
  },
  methods: {
    ...mapActions({
      requestShopCartList: "shopcart/requestShopCartList",
      requestEditCartList: "shopcart/requestEditCartList",
      requestDelCartList: "shopcart/requestDelCartList",
    }),
    changeOne(index) {
      this.shopCartList[index].checked = !this.shopCartList[index].checked;
      this.checkedAll = this.shopCartList.every((item) => {
        return item.checked == true;
      });
    },
    changeAll() {
      this.checkedAll = !this.checkedAll;
      this.shopCartList.forEach((item) => {
        item.checked = this.checkedAll;
      });
    },
    add(index) {
      var id = this.shopCartList[index].id;
      let type = 2;
      this.requestEditCartList({ id: id, type: type });
      this.requestShopCartList(this.uid);
    },
    sub(index) {
      if (this.shopCartList[index].num <= 1) {
        this.isShow = true;
        return;
      }
      var id = this.shopCartList[index].id;
      let type = 1;
      this.requestEditCartList({ id: id, type: type });
      this.requestShopCartList(this.uid);
    },
    delBtn(index) {
      this.isDel = true;
      this.delId = this.shopCartList[index].id;
      // this.requestDelCartList(id);
    },
    yesDel() {
      this.isDelPage = true;
      this.isDel = false;
      this.requestDelCartList(this.delId);
      // 重新加载购物车列表
      this.requestShopCartList(this.uid);
    },
  },
  mounted() {
    var uid = localStorage.getItem("uid");
    this.requestShopCartList(uid);
  },
};
</script>

<style scoped>
.con {
  padding-top: 0;
  margin-bottom: 2.24rem;
}
.every .title1 {
  overflow: hidden;
  height: 1.06rem;
}
.title-img {
  float: left;
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.36rem;
  margin-top: 0.35rem;
  margin-right: 0.27rem;
}
.title-text {
  float: left;
  font-size: 0.28rem;
  color: #a8a8a8;
  line-height: 1.06rem;
}
.every-con {
  overflow: hidden;
}
.inner {
  width: 8.7rem;
  height: 2.4rem;
  overflow: hidden;
  transition: all 0.3s;
}
.inner2 {
  margin-left: -1.48rem;
}
.every .left {
  float: left;
}
.every .left img {
  width: 0.42rem;
  height: 0.42rem;
  margin-left: 0.38rem;
  margin-top: 0.86rem;
  margin-right: 0.21rem;
}
.every .center {
  float: left;
}
.center img {
  width: 1.57rem;
  height: 1.57rem;
  margin-top: 0.3rem;
  margin-right: 0.21rem;
}
.every .right {
  float: left;
  width: 2.8rem;
  margin-top: 0.1rem;
  margin-right: 0.13rem;
}
.right .name {
  font-size: 0.32rem;
  overflow: hidden;
  color: #333;
  margin-bottom: 0.33rem;
}
.right .btns {
  overflow: hidden;
}
.btns .btn {
  width: 0.78rem;
  height: 0.47rem;
  float: left;
  font-size: 0.24rem;
  color: #666;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0.47rem;
}
.every .price {
  float: left;
  font-size: 0.2rem;
  color: #333;
  line-height: 1.2rem;
}
.delete-btn {
  float: right;
  height: 2.4rem;
  width: 0.98rem;
  text-align: center;
  line-height: 2.4rem;
  color: #fff;
  background: #fa0;
}

.foot {
  width: 100%;
  height: 1.12rem;
  position: fixed;
  left: 0;
  bottom: 1.04rem;
  border-top: 0.02rem solid #ccc;
  overflow: hidden;
  background: #fff;
}
.quanxuan {
  float: left;
  width: 0.58rem;
  margin-left: 0.38rem;
  margin-top: 0.18rem;
  margin-right: 0.68rem;
}
.quanxuan-img,
.edit-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-bottom: 0.1rem;
  margin-left: 0.08rem;
  float: left;
}
.quanxuan-text,
.edit-text {
  float: left;
  font-size: 0.28rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.edit {
  float: left;
  width: 0.58rem;
  margin-top: 0.18rem;
}
.all {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.29rem;
}
.all-price {
  font-size: 0.24rem;
  color: #666;
}
.tip {
  color: #999;
  margin-left: 0.08rem;
}
.pay-btn {
  width: 2.32rem;
  float: right;
  height: 1.12rem;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1.12rem;
  font-size: 0.38rem;
}

.dialog {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
}
.dialog-con {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  background: #fff;
  border-radius: 0.3rem;
}
.dialog-top {
  display: flex;
  align-items: center;
  min-height: 104px;
}
.dialog-msg {
  flex: 1;
  max-height: 60vh;
  padding: 26px 24px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  text-align: center;
}
.dialog-bottom {
  display: flex;
  overflow: hidden;
  user-select: none;
}
.dialog-btn {
  flex: 1;
  height: 48px;
  margin: 0;
  border: 0;
  text-align: center;
  line-height: 48px;
}
.dialog-bottom btn1 {
  color: #ee0a24;
}
</style>