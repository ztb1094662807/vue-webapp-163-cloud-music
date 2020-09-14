<template>
  <van-sticky>
    <div class="HomeHeader" :class="head_color">
      <i class="left iconfont icon-icon--2"></i>
      <div class="center">
        <span
          v-for="(item,index) in cate"
          :key="index"
          :class="{active:index===activeIndex?true:false,hover:index===activeIndex?true:false}"
          @click="handleClick(index)"
        >{{item}}</span>
      </div>
      <router-link to="/search" class="right iconfont icon-sousuo-copy"></router-link>
    </div>
  </van-sticky>
</template>

<script>
import Bus from "../../common/Bus";
export default {
  name: "HomeHeader",
  components: {},
  data() {
    return {
      cate: ["我的", "发现", "视频"],
      head_color: "",
    };
  },
  props: {
    activeIndex: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    handleClick(index) {
      if (index === 0) this.head_color = "dark";
      else this.head_color = "";
      Bus.$emit("switchPage", index);
    },
  },
};
</script>

<style lang='less' scoped>
.dark {
  background: rgba(0, 0, 0, 0.7) !important;
  .left,
  .right {
    color: #fff !important;
  }
  .center {
    .hover {
      color: #fff !important;
    }
  }
}
.HomeHeader {
  display: flex;
  align-content: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 30px;
  background: rgba(255, 255, 255, 0.9);
  .left,
  .right {
    font-size: 40px;
  }
  .center {
    display: flex;
    justify-content: space-evenly;
    width: 480px;
    span {
      font-size: 36px;
      color: #797979;
    }
    .active {
      font-weight: bold;
      color: #000;
    }
  }
}
</style>