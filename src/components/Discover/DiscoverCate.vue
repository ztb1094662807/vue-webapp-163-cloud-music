<template>
  <div class="DiscoverCate">
    <div
      class="gridview"
      v-for="(item,index) in cate"
      :key="item.id"
      @click="handleSwitchToPage(item.path)"
    >
      <div class="icon">
        <i :class="['iconfont','ali-icon',item.icon]"></i>
      </div>
      <div class="title" v-text="item.name"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverCate",
  methods: {
    handleSwitchToPage(path) {
      this.$router.push(path);
    },
  },
  data() {
    return {
      cate: [
        {
          id: 1,
          name: "每日推荐",
          icon: "icon-rili2",
          path: "/recommend",
        },
        {
          id: 2,
          name: "歌单",
          icon: "icon-SongListgedan",
          path: "/songsheet",
        },
        {
          id: 3,
          name: "排行榜",
          icon: "icon-paihangbang-copy",
          path: "/rank",
        },
        {
          id: 4,
          name: "电台",
          icon: "icon-luyinjishouyinjidiantai",
          path: "/dj",
        },
        // {
        // 	id: 5,
        // 	name: '新碟',
        // 	icon: 'icon-guangdie1'
        // }
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.DiscoverCate {
  height: 146px;
  padding: 0 28px;
  margin: 20px 0;

  display: flex;
  font-size: 20px;

  .gridview {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .icon {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      background: linear-gradient(to left, #ff5e4d, #e62626);
      display: inherit;

      i {
        margin: auto;
        font-size: 55px;
        color: #eee;
      }
    }
  }
}
</style>
