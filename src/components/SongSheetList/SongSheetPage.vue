<template>
  <div class="SongSheetPage">
    <van-sticky>
      <van-nav-bar left-text="歌单广场" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <van-tabs animated swipeable rendered>
      <van-tab v-for="(item,index) in songSheetCates" :title="item.name">
        <songSheetList :id="item.id" :name="item.name" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getHomeSongSheetsCate } from "../../common/api";
import songSheetList from "./SongSheetList";
export default {
  name: "SongSheetPage",
  data() {
    return {
      songSheetCates: [],
    };
  },
  components: {
    songSheetList,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
  async created() {
    const songSheetCates = await getHomeSongSheetsCate();
    // console.log( songSheets )
    this.songSheetCates = songSheetCates.data.tags;
  },
};
</script>

<style lang='less' scoped>
.SongSheetPage .van-nav-bar {
  background-color: radial-gradient(ellipse, #fff 0, #bbb 100%) !important;
}
.SongSheetPage {
  height: 100vh;
  overflow: auto;
  background: radial-gradient(ellipse, #fff 0, #bbb 100%);
}
</style>