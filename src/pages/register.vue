<template>
  <div>
    <hd></hd>
    <div class="input">
      <div class="line1">
        <div class="text">手机号：</div>
        <input class="ipt" v-model="user.phone" type="text" />
      </div>
      <div class="line1 line2">
        <div class="text">昵称：</div>
        <input class="ipt" v-model="user.nickname" type="text" />
      </div>
      <div class="line1 line2">
        <div class="text">密码：</div>
        <input class="ipt" v-model="user.password" type="text" />
      </div>
    </div>
    <!-- <button @click="register">注册</button> -->
    <div class="btn" @click="register">注册</div>
    <toast :tit="tit" v-if="isDel" @hide="isDel = false"></toast>
    <goback ></goback>
  </div>
</template>

<script>
import { reqRegister } from "../utils/request";

export default {
  data() {
    return {
      user: {
        phone: "",
        nickname: "",
        password: "",
      },
      isDel: false,
      tit: "",
    };
  },
  methods: {
    register() {
      reqRegister(this.user.phone, this.user.nickname, this.user.password).then(
        (res) => {
          this.tit = res.data.msg;
          this.isDel = true;
          if (res.data.code == 200) {
            // 注册成功
            this.$router.push("/login");
          }
        }
      );
    },
  },
};
</script>

<style scoped>
.input {
  width: 5.98rem;
  margin: 2.46rem auto 0;
}
.line1 {
  height: 0.78rem;
  border-bottom: 0.01rem solid #a3a3a3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.line2 {
  margin-top: 0.56rem;
}
.text {
  width: 1.12rem;
  font-size: 0.28rem;
  color: #333;
}
.ipt {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border: none;
  font-size: 0.28rem;
  margin-top: -0.4rem;
  background: #fafafa;
  outline: none;
}
.btn {
  width: 5.98rem;
  height: 1rem;
  background: #f90;
  color: #fff;
  font-size: 0.34rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.2rem;
  margin: 0.5rem auto;
}
.goback{
  position: fixed;
  left: 0.2rem;
  top: 0.12rem;
  color: white;
}
</style>