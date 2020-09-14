<template>
  <div class="playList">
    <ul>
      <li v-for="(item,index) in songLists" :key="index" @click="handleGoToPlayPage(item.id)">
        <div class="songDes">
          <div class="songPic" v-if="item.al">
            <img
              width="100%"
              height="100%"
              :src="(item.al && item.al.picUrl) || item.album.artist.img1v1Url"
              alt
            />
          </div>

          <div class="songInfo">
            <p class="title">
              {{item.name}}
              <span></span>
            </p>
            <p class="subTitle" v-if="item.artists">
              <span v-for="ar in item.artists">{{ar.name}}</span> -
              <span>{{item.album.name}}</span>
            </p>
            <p class="subTitle" v-else-if="item.al">
              <span>{{item.name}}</span> -
              <span>{{item.ar[0]['name']}}</span>
            </p>
          </div>
        </div>
        <div class="songMv">
          <i class="iconfont icon-Play-Button"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "SongPlayList",
  props: {
    songLists: {
      type: Array,
      require: true,
    },
  },
  methods: {
    ...mapMutations(["playSong", "setVolume"]),
    ...mapActions(["getMusicUrl"]),
    handleGoToPlayPage(id) {
      this.setVolume();
      this.playSong();
      this.$router.push({
        path: "/player",
        query: { id },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.playList {
  padding: 0 26px;

  li {
    height: 120px;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  .songDes {
    display: flex;
  }

  .songPic {
    width: 74px;
    height: 74px;
    border-radius: 10px;
    overflow: hidden;
  }

  .songInfo {
    margin-left: 24px;
    color: #aaa;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      color: #333;

      span {
        color: #aaa;
      }
    }

    .subTitle {
      font-size: 14px;
    }
  }
}
</style>
