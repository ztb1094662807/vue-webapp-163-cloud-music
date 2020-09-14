<template>
  <div class="RankPage">
    <van-sticky>
      <van-nav-bar left-text="排行榜" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <!-- <SongSheetCategory /> -->

    <div class="rankSheet">
      <p class="rankTitle">官方榜</p>
      <div
        class="rank-song-sheet"
        v-for="(item,index) in rankLists"
        :key="item.id"
        v-if="item.tracks&&item.tracks.length"
      >
        <div class="rank-song-item">
          <div class="rank-pic">
            <van-image width="100%" height="100%" lazy-load fit="cover" :src="item.coverImgUrl" />
            <div class="tips">{{item.updateFrequency}}</div>
          </div>

          <div class="rank-name-list">
            <div
              class="song-name"
              v-for="track in item.tracks"
              :key="track.second"
            >{{track.first}} - {{track.second}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRankList } from "../../common/api";
export default {
  name: "RankPage",
  components: {},
  data() {
    return {
      rankLists: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
  async created() {
    const rankLists = await getRankList();
    this.rankLists = rankLists.data.list;
  },
};
</script>

<style lang='less' scoped>
.RankPage {
  background: radial-gradient(ellipse, #fff 0, #eee 100%);

  .rankSheet {
    padding: 0 30px;
    .rankTitle {
      padding: 14px 0;
      font-size: 32px;
      font-weight: bold;
    }
    .rank-song-sheet {
      margin-bottom: 20px;
      .rank-song-item {
        display: flex;
        color: #666;
        font-size: 26px;
        .rank-pic {
          width: 196px;
          height: 196px;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          .updateTime {
            position: absolute;
            left: 10px;
            bottom: 13px;
            font-size: 20px;
            color: #fff;
            opacity: 0.9;
          }
        }
        .rank-name-list {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>