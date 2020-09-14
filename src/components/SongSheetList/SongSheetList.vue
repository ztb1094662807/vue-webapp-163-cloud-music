<template>
  <div class="SongSheetList">
    <div class="songSheet">
      <div class="songItem" v-for="(item,index) in songSheetLists" :key="index">
        <div class="songInfo">
          <img width="100%" height="100%" lazy-load fit="cover" :src="item.coverImgUrl" alt />
          <p class="info">
            <i class="iconfont icon icon-icon-"></i>
            <span class="num">{{item.playCount |handleNumFormat}}</span>
          </p>
        </div>
        <p class="songTitle">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { numberFormat } from "js-num-format";
import { getRecommendSongSheet } from "../../common/api";
export default {
  name: "SongSheetList",
  components: {},
  data() {
    return {
      songSheetLists: [],
    };
  },
  filters: {
    handleNumFormat: numberFormat,
  },
  props: ["id", "name"],
  async created() {
    const songSheetLists = await getRecommendSongSheet(this.name);
    this.songSheetLists = songSheetLists.data.playlists;
  },
};
</script>

<style lang='less' scoped>
.songSheet {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 10px 0;

  .songItem {
    width: 210px;
    height: 286px;
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .songInfo {
      width: 210px;
      height: 210px;
      background-color: deepskyblue;
      position: relative;
      border-radius: 10px;
      overflow: hidden;

      .info {
        position: absolute;
        right: 9px;
        top: 8px;
        display: flex;
        color: white;
        .iconfont {
          font-size: 18px;
        }
        .num {
          margin-left: 3px;
          font-size: 18px;
        }
      }
    }

    .songTitle {
      font-size: 20px;
      text-align: left;
    }
  }
}
</style>