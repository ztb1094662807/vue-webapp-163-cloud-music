<template>
  <div class="discover-banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item,index) in discoverBanner"
        :key="index"
        @click="handlePreview(index)"
      >
        <img v-lazy="item.pic" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getBanner } from "../../common/api";
export default {
  name: "DiscoverBanner",
  data() {
    return {
      discoverBanner: [],
      previewList: [],
    };
  },
  props: ["urlApi"],
  async created() {
    const banner = await getBanner(this.urlApi);
    const discoverBanner = banner.data.banners || banner.data.data
    this.discoverBanner = discoverBanner;
    let previewList = discoverBanner.map((item) => {
      return item.pic;
    });
    this.previewList = previewList;
  },
  methods: {
    handlePreview(i) {
      const self = this;
      ImagePreview({
        images: self.previewList,
        startPosition: i,
        onClose({ index }) {
          if (self.discoverBanner[index]["url"]) {
            window.location.href = self.discoverBanner[index]["url"];
          }
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.discover-banner {
  margin: 20px 0;

  .my-swipe {
    height: 260px;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 28px;
  }
}
</style>
