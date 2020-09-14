<template>
  <div class="home">
    <HomeHeader :activeIndex="index" />
    <van-swipe
      ref="swiperEle"
      class="my-swipe"
      @change="onChange"
      :initial-swipe="swiperIndex"
      :loop="false"
      :show-indicators="false"
      :touchable="false"
     > <!--@change="onChange"监听事件；:initial-swipe="swiperIndex"：绑定初始位置的索引值；:loop="false"：关闭循环播放 ；:show-indicators="false"：隐藏指示器；:touchable="false"：不可以通过手势滑动-->
      <van-swipe-item>
        <UserPage /> <!-- 我的 -->
      </van-swipe-item>
      <van-swipe-item>
        <DiscoverPage /> <!-- 发现 -->
      </van-swipe-item>
      <van-swipe-item>
        <VideoPage /> <!-- 视频 -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Bus from "../common/Bus";

import HomeHeader from "../components/Header/HomeHeader";
import DiscoverPage from "../components/Discover/DiscoverPage";
import VideoPage from "../components/Video/VideoPage";
import UserPage from "../components/UserCenter/UserPage";
export default {
  name: "Home",
  data() {
    return {
      swiperIndex: 1,//初始位置的索引值为1
      index: 1,
      num: 1,
    };
  },
  created() {
    Bus.$on("switchPage", (data) => {
      this.num = data;
    });
  },

  components: {
    DiscoverPage,
    HomeHeader,
    VideoPage,
    UserPage,
  },
  watch: {
    num(newV, oldV) {
      this.$refs.swiperEle.swipeTo(newV, {
        immediate: false,
      });
    },
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
  },
};
</script>
