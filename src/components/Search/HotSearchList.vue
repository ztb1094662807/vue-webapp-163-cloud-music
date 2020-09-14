<template>
  <div class="HotSearchList">
    <div class="chip-storage">
      <p class="storage">历史记录</p>
      <div>
        <van-tag
          v-for="(item,index) in storage"
          color="#f3f3f3"
          text-color="#515151"
          round
          :key="index"
          @click="handleClick(item)"
        >{{item}}</van-tag>
      </div>
    </div>

    <p class="hot-search-cate">热搜榜</p>
    <ul>
      <li
        v-for="(item,index) in searchHotLists"
        :key="index"
        @click="handleGoToPlayPage(item.searchWord)"
      >
        <div class="hot-search-info">
          <span :class="['order',index<3?'active':'']">{{index+1}}</span>
          <div class="hot-song">
            <div class="hot-song-name" :class="index<3?'fontW':''">
              {{item.searchWord}}
              <van-icon :name="item.iconUrl" />
            </div>
            <p class="hot-song-des">{{item.content}}</p>
          </div>
        </div>
        <span class="host-song-playCount">{{item.score}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSearchHotDetail } from "../../common/api";
// import MusicUtils from "../../common/MusicUtils";
import Bus from "../../common/Bus";
export default {
  name: "HotSearchList",
  data() {
    return {
      searchHotLists: [],
      storage: [],
    };
  },
  async created() {
    const searchHotLists = await getSearchHotDetail();
    // console.log( searchHotLists )
    this.searchHotLists = searchHotLists.data.data;

    const storage = MusicUtils.getLocalStorageSongPlayList("historyPlayList");
    console.log(storage);
    this.storage = storage;
  },
  methods: {
    handleGoToPlayPage(name) {
      const storage = MusicUtils.getLocalStorageSongPlayList("historyPlayList");
      storage.push(name);
      MusicUtils.setLocalStorageSongPlayList(storage, "historyPlayList");

      Bus.$emit("handleKeywords", name);
      // this.$router.push({
      //     path: '/player',
      //     query: {id,name,author}
      // })
    },
    handleClick(name) {
      Bus.$emit("handleKeywords", name);
    },
  },
};
</script>

<style lang="less" scoped>
.HotSearchList {
  .chip-storage {
    margin: 30px 0;
    padding: 0 30px;

    .storage {
      font-size: 26px;
      font-weight: bold;
    }
    .van-tag--default {
      margin-left: 15px;
      margin-bottom: 15px;
    }
  }

  .hot-search-cate {
    font-size: 26px;
    font-weight: bold;
    padding-left: 30px;
  }
  ul {
    margin-top: 20px;
    padding: 0 30px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .hot-search-info {
        display: flex;
        align-items: center;

        .order {
          font-size: 30px;
          font-weight: 600;
          color: #aaa;

          &.active {
            color: #ce4f51;
          }
        }

        .hot-song {
          margin-left: 30px;

          .hot-song-name {
            font-size: 34px;

            margin-bottom: 10px;

            &.fontW {
              font-weight: bold;
            }
            img {
              width: 60px;
              height: 30px;
            }
          }

          .hot-song-des {
            font-size: 20px;
            color: #aaa;
          }
        }
      }

      .host-song-playCount {
        font-size: 20px;
        color: #aaa;
      }
    }
  }
}
</style>
