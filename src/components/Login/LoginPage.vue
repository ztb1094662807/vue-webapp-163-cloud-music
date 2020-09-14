<template>
  <div class="LoginPage">
    <van-form @submit="onSubmit">
      <van-field
        autocomplete="off"
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        autocomplete="off"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="submit" style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <!--
        <div v-if="false" class="login-method">

            <div class="logo">
                <van-image
                    width="100%"
                    height="100%"
                    lazy-load
                    :src="logo"
                />
            </div>
            <div class="login-btn">
                <van-tag text-color="#f00" color="#fff" round>手机号登录</van-tag>
                <van-tag text-color="#fff" round plain>立即体验</van-tag>
            </div>
        </div>

        <div class="input-tel" v-if="false">
            <van-nav-bar
                :left-text="loginMsg"
                left-arrow
                @click-left="onClickLeft"
            />

            <van-field
                v-model="tel"
                type="tel"
                label="+86"
                placeholder="请输入手机号"
            />
            <van-tag text-color="#fff" color="#db2d1f" round>下一步</van-tag>
        </div>

        <div class="input-pwd">
            <van-nav-bar
                :left-text="loginMsg"
                left-arrow
                @click-left="onClickLeft"
            />

            <van-field v-model="password" type="password" label="密码" />

            <van-tag text-color="#fff" color="#db2d1f" round>下一步</van-tag>
        </div>
    -->
  </div>
</template>

<script>
import { getCheckTelReg, PostLogin } from "../../common/api";

import Cookies from "js-cookie";

export default {
  name: "LoginPage",
  data() {
    return {
      logo: require("../../assets/img/163.png"),
      loginMsg: "手机号密码",
      tel: "",
      password: "",
      username: "",
    };
  },
  methods: {
    onClickLeft() {},
    async onSubmit(values) {
      const { username, password } = this;
      const isReg = await getCheckTelReg(username);
      const isRegData = isReg.data.exist;
      if (isRegData === -1) {
        this.$toast("请先到网易云官网注册");
        return;
      }

      const login = await PostLogin(username, password);
      console.log(login);
      const loginData = login.data.data;
      Cookies.set("MUSIC_U", loginData.token);
      Cookies.set("userId", loginData.account.id);
    },
  },
};
</script>

<style lang="less" scoped>
.LoginPage {
  height: 100vh;
  overflow: hidden;
  background: #db2d1f;
  background: #ddd;

  .login-method {
    height: 100vh;
    background: #db2d1f;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .logo {
    width: 150px;
    height: 150px;
  }

  .login-btn {
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /*border: 1px yellow solid;*/

    /deep/ .van-tag--plain {
      background: transparent;
    }

    span {
      font-size: 30px;
      padding: 20px 190px;
    }
  }

  .input-tel {
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    /deep/ .van-tag {
      font-size: 30px;
      padding: 20px 288px;
    }
  }

  .input-pwd {
    padding: 0 20px;

    /deep/ .van-tag {
      font-size: 30px;
      padding: 20px 288px;
    }
  }

  /deep/ .van-nav-bar {
    i,
    span {
      color: #000;
    }
  }
  .submit {
    width: 680px;
    height: 70px;
    font-size: 24px;
    background: #0187ff;
    border-radius: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
