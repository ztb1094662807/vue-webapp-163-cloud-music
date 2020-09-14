<template>
  <div class="UserPage">
    <div class="user-info">
      <div class="user-details">
        <div class="user-avatar">
          <van-image
            round
            width="100%"
            height="100%"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>

        <p class="user-nickname">宁静视听</p>
        <p class="user-size">
          <span>关注: 3</span> |
          <span>粉丝: 0</span>
        </p>
        <p class="level">
          <van-tag round>
            <i>Lv.7</i>
          </van-tag>
        </p>
      </div>
    </div>

    <button @click="handleLogout">退出</button>

    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "../Login/LoginPage"
import { getLogout } from "../../common/api";
export default {
  name: "UserPage",
  components: {
    LoginPage,
  },
  methods: {
    async handleLogout() {
      const data = await getLogout();
      this.$toast(data.data.code);
    },
  },
};
</script>

<style lang="less" scoped>
.user-info {
  height: 570px;
  background: url("https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg");
  background-size: cover;
  position: relative;

  .user-details {
    padding-top: 120px;
    padding-left: 40px;

    .user-avatar {
      /*position: absolute;*/
      /*left: 30px;*/
      /*bottom: 200px;*/
      width: 150px;
      height: 150px;
      /*border: 1px skyblue solid;*/
    }

    .user-nickname {
      font-size: 30px;
      color: #fff;
      font-weight: 600;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    .user-size {
      font-size: 20px;
      color: #aaa;
    }
  }
}
</style>
