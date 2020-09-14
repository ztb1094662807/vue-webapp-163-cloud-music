<template>
  <div class="SearchPage">
    <van-sticky>
      <div class="search-wrap">
        <i class="iconfont icon-fanhui1-copy" @click="handleBack"></i>
        <div class="search-field">
          <van-field v-model="keywords" placeholder="搜索" @input="handleInput" />
        </div>
        <i class="iconfont icon-yonghu"></i>
      </div>

      <div class="search-song-name-list" v-if="isSearch">
        <ul>
          <li v-for="(item,index) in selectList" @click="handleSearchKeyword(item.keyword)">
            <van-icon name="search" />
            <span>{{item.keyword}}</span>
          </li>
        </ul>
      </div>
    </van-sticky>

    <SearchSongNameList :keywords="keywords" />

    <div v-if="isShowHotSearchRank">
      <HotSearchList />
    </div>

    <SongPlayList :songLists="songList" />
  </div>
</template>

<script>
import HotSearchList from "./HotSearchList";
import SearchSongNameList from "./SearchSongNameList";
import { getSearchKeywords, getSearchSuggest } from "../../common/api";
import Bus from "../../common/Bus";
export default {
  name: "SearchPage",
  components: {
    HotSearchList,
    SearchSongNameList,
  },
  created() {
    Bus.$on("handleKeywords", (res) => {
      // this.keywords = res
      // console.log(res)
      this.handleSearchKeyword(res);
    });
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    async handleSearchKeyword(v) {
      try {
        const songLists = await getSearchKeywords(v);
        const list = songLists.data.result.songs;
        // console.log( songLists )
        this.isSearch = false;
        this.isShowHotSearchRank = false;
        this.songList = list;
      } catch (e) {
        console.log("无法搜索到" + v + "此歌曲");
      }
    },
    async handleInput(v) {
      // console.log( v )
      if (v === "") {
        this.isSearch = false;
        return;
      }
      try {
        const selectList = await getSearchSuggest(v);
        // console.log( selectList )
        const list = selectList.data.result.allMatch;
        this.selectList = list;
        if (list.length) {
          this.isSearch = true;
        }
      } catch (e) {
        console.log("你输入的歌名搜索不到，请重试！！");
      }
    },
  },
  data() {
    return {
      text: "",
      isSearch: false,
      keywords: "",
      selectList: [],
      songList: [],
      isShowHotSearchRank: true,
    };
  },
};
</script>

<style lang="less" scoped>
.SearchPage {
  .search-song-name-list {
    position: absolute;
    left: 30px;
    top: 100px;
    z-index: 999;
    width: 600px;
    background-color: #fff;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.2);

    li {
      padding-left: 25px;
      border-bottom: 1px solid #eee;
      height: 88px;
      display: flex;
      align-items: center;

      font-size: 30px;

      span {
        margin-left: 15px;
      }
    }
  }

  .search-wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & > i {
      font-size: 45px;
    }

    .search-field {
      width: 516px;
      border-bottom: 1px #929292 solid;
    }
  }
}
</style>
