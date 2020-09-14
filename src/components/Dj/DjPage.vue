<template>
  <div class="DjPage">
    <van-sticky>
      <van-nav-bar left-text="电台" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <Banner urlApi="/dj/banner" />

    <SongSheetCategory />

    <div class="dj-list">
      <div
        @click="handleClick(item.program.mainSong.id)"
        class="dj-list-item"
        v-for="(item,index) in djTopLists"
        :key="index"
      >
        <div class="dj-pic">
          <van-image width="100%" height="100%" lazy-load :src="item.program.coverUrl" />
        </div>
        <div class="dj-list-info">
          <p class="dj-title">{{item.program.name}}</p>
          <div class="dj-user">
            <div class="dj-user-pic">
              <van-image width="100%" height="100%" lazy-load :src="item.program.dj.avatarUrl" />
            </div>
            <div class="dj-user-name">{{item.program.dj.nickname}}</div>
            <p>
              <i class="iconfont icon-hot"></i>
              {{item.score}}
            </p>
          </div>
        </div>
        <i class="iconfont icon-play1-copy dj-play-btn"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeDjToplist } from "../../common/api";
export default {
  name: "DjPage",
  components: {},
  data() {
    return {
      djTopLists: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    handleClick(id) {},
  },
  async created() {
    const djTopLists = await getHomeDjToplist();
    this.djTopLists = djTopLists.data.data.list;
  },
};
</script>

<style lang='less' scoped>
.dj-list {
  .dj-list-item {
    height: 118px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .dj-pic {
      width: 96px;
      height: 96px;
      border-radius: 10px;
      overflow: hidden;
      background-color: #f00;
    }

    .dj-list-info {
      width: 500px;
      height: 100%;
      color: #666;
      font-size: 26px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .dj-title {
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .dj-user {
        font-size: 18px;
        display: flex;

        .dj-user-pic {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
        }
        .dj-user-name {
          margin: 0 13px;
        }
      }
    }

    .dj-play-btn {
      font-size: 28px;
      color: #ff4023;
    }
  }
}
</style>