<template>
  <div class="PlayPage">
    <div class="play-nav-bar">
      <div class="leading">
        <i class="iconfont icon icon-fanhui1"></i>
        <div class="song-info">
          <span class="song-name">离岸</span>
          <span class="song-author">苏晗</span>
        </div>
      </div>
    </div>
    <div class="play-container">
      <!--圆盘-->
      <div class="play-disc play-disc-rotate">
        <div class="disc">
          <div class="play-song-cover">
            <van-image
              round
              width="100%"
              height="100%"
              fit="cover"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
        </div>
      </div>
      <!--歌词-->
      <div v-if="false" class="lyric-wrap">
        <ul>
          <li>歌名: 身骑白马</li>
          <li>歌手: 徐佳bai莹</li>
          <li>我爱bai谁 跨不过 从来也不觉得错du</li>
          <li>自以为 抓着痛 就能往回忆里躲</li>
          <li>偏执相信着 受诅咒的水晶球</li>
          <li>阻挡可能心动的理由</li>
          <li>而你却 靠近了 逼我们视线交错</li>
          <li>原地不动 或向前走 突然在意这分钟</li>
          <li class="active">眼前荒沙弥漫了等候 耳边传来孱弱的呼救</li>
          <li>追赶要我 爱的不保留</li>
          <li>我身骑白马 走三关</li>
          <li>我改换素衣 回中原</li>
          <li>放下西凉 无人管</li>
          <li>我一心只想 王宝钏</li>
          <li>而你却 靠近了 逼我们视线交错</li>
          <li>原地不动 或向前走 突然在意这分钟</li>
          <li>眼前荒沙弥漫了等候 耳边传来孱弱的呼救</li>
          <li>我身骑白马 走三关</li>
          <li>我改换素衣 回中原</li>
          <li>我爱bai谁 跨不过 从来也不觉得错du</li>
          <li>自以为 抓着痛 就能往回忆里躲</li>
          <li>偏执相信着 受诅咒的水晶球</li>
          <li>阻挡可能心动的理由</li>
          <li>而你却 靠近了 逼我们视线交错</li>
          <li>原地不动 或向前走 突然在意这分钟</li>
          <li>眼前荒沙弥漫了等候 耳边传来孱弱的呼救</li>
          <li>追赶要我 爱的不保留</li>
          <li>我身骑白马 走三关</li>
          <li>我改换素衣 回中原</li>
          <li>放下西凉 无人管</li>
          <li>我一心只想 王宝钏</li>
          <li>而你却 靠近了 逼我们视线交错</li>
          <li>原地不动 或向前走 突然在意这分钟</li>
          <li>眼前荒沙弥漫了等候 耳边传来孱弱的呼救</li>
          <li>我身骑白马 走三关</li>
          <li>我改换素衣 回中原</li>
        </ul>
      </div>
    </div>
    <!--音乐控制面板-->
    <div class="play-controls">
      <div class="play-time">
        <span class="current-time">01:16</span>
        <van-slider v-model="value" @change="onChange" active-color="#fff" inactive-color="#bbb" />
        <span class="duration-time">03:37</span>
      </div>
      <div class="play-btn">
        <i :class="['iconfont','icon-zan1']"></i>
        <i :class="['iconfont','icon-xin']"></i>
        <i :class="['iconfont','icon-danquxunhuan']"></i>
        <i :class="['iconfont','icon-xunhuan1']"></i>
        <i :class="['iconfont','icon-icon--']"></i>
        <i :class="['iconfont','icon-shangyiqu101']"></i>
        <i :class="['iconfont','icon-arrow-']"></i>
        <i :class="['iconfont','icon-zanting2']"></i>
        <i :class="['iconfont','icon-xiayiqu101']"></i>
        <i :class="['iconfont','icon-PlayListbofangliebiao']"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayPage",
  components: {},
  data() {
    return {
      value: 50,
    };
  },
  methods: {
    onChange() {},
  },
};
</script>

<style lang='less' scoped>
@keyframes myRotate {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
.play-disc-rotate{
  animation: myRotate 20s infinite linear;
}
.PlayPage {
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgb(142, 132, 133) 0%,
    rgb(230, 132, 110) 100%
  );
  display: flex;
  flex-direction: column;
  .play-nav-bar {
    padding-left: 40px;
    .leading {
      display: flex;
      align-items: center;
      .icon {
        color: #fff;
        font-size: 40px;
        margin-right: 35px;
      }
      .song-info {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        .song-name {
          color: #fff;
          font-size: 40px;
          margin-bottom: 8px;
        }
        .song-author {
          color: rgba(255, 255, 255, 0.4);
          font-size: 20px;
        }
      }
    }
  }
  .play-container {
    flex: 1;
    position: relative;
    .play-disc {
      width: 564px;
      height: 564px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      position: absolute;
      left: calc((100% - 564px) / 2);
      top: calc((100% - 564px) / 2);
      display: flex;
      .disc {
        width: 546px;
        height: 546px;
        background: url("../../assets/img/disc.png");
        background-size: cover;
        margin: auto;
        display: flex;
        .play-song-cover {
          width: 370px;
          height: 370px;
          margin: auto;
          border-radius: 50%;
        }
      }
    }
    .lyric-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgb(142, 132, 133) 0%,
        rgb(230, 132, 110) 100%
      );
      font-size: 30px;
      color: rgba(255, 255, 255, 0.5);
      text-align: center;
      overflow: hidden;

      ul {
        li {
          height: 60px;
          line-height: 60px;
          &.active {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
  .play-controls {
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /deep/ .van-slider__button {
      ///deep/ 深度穿透
      width: 12px;
      height: 12px;
    }
    .van-slider {
      margin: 0 20px;
    }
    .play-time {
      color: #ddd;
      font-size: 20px;
      display: flex;
      padding: 15px 25px;
      align-items: center;
    }
    .play-btn {
      color: #fff;
      display: flex;
      justify-content: space-around;
      i {
        font-size: 50px;
      }
    }
  }
}
</style>