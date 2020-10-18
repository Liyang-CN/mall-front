<template>
  <div>
    <hd></hd>
    <div class="input">
      <div class="line1">
        <div class="text">账号：</div>
        <input class="ipt" v-model="user.username" type="text" />
      </div>
      <div class="line1 line2">
        <div class="text">密码：</div>
        <input class="ipt" v-model="user.userpass" type="text" />
      </div>
      <div class="forget">忘记密码</div>
    </div>
    <div class="btn" @click="login">登录</div>
    <router-link to="/register">注册</router-link>
    <toast :tit="tit" v-if="isDel" @hide="isDel = false"></toast>
  </div>
</template>

<script>
import { reqLogin } from "../utils/request";
// import vToast from '../common/toast'
export default {
  data() {
    return {
      user: {
        username: "123",
        userpass: "123",
      },
      tit: "",
      isDel: false,
    };
  },
  methods: {
    login() {
      reqLogin(this.user.username, this.user.userpass).then((res) => {
        this.tit = res.data.msg;
        this.isDel = true;
        if (res.data.code == 200) {
          // 登陆成功
          localStorage.setItem("isLogin", true);
          localStorage.setItem('uid',res.data.list.uid)
          localStorage.setItem('token',res.data.list.token)
          this.$router.push("/index/home");
        }
        
      });
    },
  },
};
</script>

<style scoped>
.register {
  font-size: 0.3rem;
  color: #fff;
}
div a {
  color: #fff;
  font-size: 0.38rem;
  position: fixed;
  right: 0.2rem;
  top: 0;
  height: 0.8rem;
  line-height: 0.8rem;
}
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
.forget {
  font-size: 0.24rem;
  color: #666;
  text-align: right;
  margin-top: 0.44rem;
  margin-bottom: 0.3rem;
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
  margin: 0 auto;
  outline: none;
}
</style>