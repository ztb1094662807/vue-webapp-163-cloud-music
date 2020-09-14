<template>
  <div class="song-sheet-category">
    <p class="title">榜单排行</p>
    <div class="song-sheet-list">
      <div class="song-sheet-cate" v-for="(item,index) in djCateList.radios">
        <div class="song-pic">
          <van-image
            width="100%"
            height="100%"
            lazy-load
            fit="cover"
            :src="item.picUrl"
          />
          <span class="updateTime">{{item.name}}</span>
        </div>
        <p class="song-sheet-name">{{item.rcmdText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {getHomeDjRecommend} from "../../common/api"
export default {
  name: "SongSheetCategory",
  data() {
    return {
      djCateList:[],
    }
  },
  async created() {
    const djCateList = await getHomeDjRecommend()
    this.djCateList = djCateList.data.data[0]
  },
};
</script>

<style lang="less" scoped>
.song-sheet-category {
  height: 340px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .title {
    font-size: 32px;
    font-weight: bold;
  }

  .song-sheet-list {
    display: flex;
    justify-content: space-between;

    .song-sheet-cate {
      .song-pic {
        width: 218px;
        height: 218px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;

        .updateTime {
          position: absolute;
          bottom: 13px;
          left: 10px;
          font-size: 16px;
          color: #fff;
          opacity: 0.9;
        }
      }

      .song-sheet-name {
        font-size: 24px;
        color: #333;
        margin: 6px 0;
      }
    }
  }
}
</style>
