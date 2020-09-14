<template>
  <div class="video-page">
    <van-tabs v-model="active" swipeable animated :sticky="true">
      <van-tab v-for="item in videoCate" :title="item.name" :key="item.id">
        <div class="video-Container">
          <VideoPlay :id="item.id" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getVideoCate } from "../../common/api";
export default {
  name: "VideoPage",
  async created() {
    try {
      const videoCate = await getVideoCate();
      this.videoCate = videoCate.data.data;
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      active: 0,
      videoCate: [],
    };
  },
};
</script>

<style scoped>
.video-Container {
  background-color: #f3f3f3;
}
</style>
