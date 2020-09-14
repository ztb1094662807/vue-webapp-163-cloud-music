<template>
  <section>
    <div v-for="(item,index) in videoList" :key="item.data.vid">
      <div class="videoplay">
        <div class="video-con">
          <PlayVideo :poster="item.data.coverUrl" :vid="item.data.vid"></PlayVideo>
        </div>
        <div class="title">
          <span>{{item.data.title}}</span>
          <van-image round fit="cover" class="arc-img" :src="item.data.creator.avatarUrl" />
        </div>
        <van-divider :style="{borderColor: '#bbbbbb',color: '#bbbbbb',}" />
        <div class="video-user">
          <div class="user-info">
            <van-image class="avatar" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>TZ分享社</span>
          </div>
          <div class="like">
            <div class="praise">
              <i class="iconfont icon-dianzan"></i>
              <span>{{item.data.praisedCount}}</span>
            </div>

            <div class="comment">
              <i class="iconfont icon-pinglun"></i>
              <span>{{item.data.commentCount}}</span>
            </div>

            <div class="share">
              <i class="iconfont icon-menu-copy"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getVideoCatePlayList } from "../../common/api";
import PlayVideo from "./PlayVideo";
export default {
  name: "VideoPlay",
  components: {
    PlayVideo,
  },
  data() {
    return {
      videoList: [],
    };
  },
  props: ["id"],
  async created() {
    const videoList = await getVideoCatePlayList(this.id);
    // console.log(videoList)
    this.videoList = videoList.data.datas;
  },
};
</script>

<style lang="less" scoped>
.videoplay {
  padding: 0 30px 15px;
  background-color: #fff;
  margin: 16px 0;

  .video-con {
    height: 384px;
    border-radius: 20px;
    overflow: hidden;

    .video {
      object-fit: cover;
    }
  }

  .title {
    font-size: 20px;
    color: #454545;
    margin: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .arc-img {
      width: 68px;
      height: 68px;
    }
  }

  .video-user {
    display: flex;
    justify-content: space-between;

    .user-info {
      display: inherit;
      align-items: center;
      .avatar {
        width: 56px;
        height: 56px;
        margin-right: 8px;
      }

      span {
        font-size: 22px;
      }
    }

    .like {
      display: inherit;
      align-items: center;

      & > div {
        margin-left: 35px;
        position: relative;

        i {
          font-size: 40px;
          color: #b9b9b9;
        }

        span {
          position: absolute;
          top: -14px;
          right: -24px;

          font-size: 20px;
        }
      }
    }
  }
}
</style>
