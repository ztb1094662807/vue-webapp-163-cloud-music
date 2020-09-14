<template>
  <div class="Recommend">
    <van-sticky>
      <van-nav-bar left-text="每日推荐" left-arrow @click-left="onClickLeft" />

      <div class="playAll">
        <i class="iconfont icon-play"></i>
        <span>播放全部</span>
      </div>
    </van-sticky>

    <SongPlayList :songLists="songLists"></SongPlayList>
  </div>
</template>

<script>
import { getTodayRecommendSongList } from "../../common/api";
import SongPlayList from "./SongPlayList";
export default {
  name: "Recommend",
  data() {
    return {
      songLists: [],
    };
  },
  components: {
    SongPlayList,
  },
  async created() {
    const songLists = await getTodayRecommendSongList();
    this.songLists = songLists.data.data.dailySongs;
    // console.log(songLists)
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style lang='less' scoped>
.Recommend .van-nav-bar {
  background-color: transparent !important;
}

.playAll {
  height: 80px;
  background-color: #fff;
  font-size: 28px;
  color: #333;
  border-radius: 45px 45px 0 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px #ddd;

  i {
    margin: 0 26px;
    font-size: 40px;
  }
}
</style>