<template>
  <div class="SearchSongNameList" v-if="songInfo.artist">
    <div class="interested-singers">
      <p class="interested">你可能感兴趣</p>
      <div class="interested-info" v-for="(item,index) in songInfo.artist">
        <div class="singers-pic">
          <van-image round width="100%" height="100%" fit="cover" :src="item.picUrl" />
        </div>

        <div class="singers-detail">
          <div class="singers-name">歌手: {{item.name}}</div>
          <p class="singers-size">
            <span>粉丝: {{item.fansSize |handleNumFormat}}</span>
            <span>歌曲: {{item.musicSize}}</span>
            <span>专辑: {{item.albumSize}}</span>
          </p>
        </div>
      </div>
    </div>
    <SongPlayList />
  </div>
</template>

<script>
import { getSearchMultimatch } from "../../common/api";
import SongPlayList from "../TodayRecommend/SongPlayList";
// import myMixins from "../../common/FilterMixins";
export default {
  name: "SearchSongNameList",
  // mixins: [myMixins],
  data() {
    return {
      songInfo: {},
    };
  },
  props: {
    keywords: {
      type: String,
      require: true,
    },
  },
  async created() {
    // console.log(this.keywords)
    if (this.keywords === "") return;
    const songInfo = await getSearchMultimatch(this.keywords);
    // console.log( songInfo )
    this.songInfo = songInfo.data.result;
  },
  components: {
    SongPlayList,
  },
};
</script>

<style lang="less" scoped>
.SearchSongNameList {
  margin: 30px 0;

  .interested-singers {
    padding: 0 30px;

    .interested {
      color: #aaa;
      font-size: 26px;
      margin-bottom: 20px;
    }

    .interested-info {
      display: flex;
      align-items: center;

      .singers-pic {
        width: 95px;
        height: 95px;
      }

      .singers-detail {
        margin-left: 20px;

        .singers-name {
          color: #333;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .singers-size {
          font-size: 20px;
          color: #aaa;
        }
      }
    }
  }
}
</style>
