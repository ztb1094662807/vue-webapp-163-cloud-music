# vue-webapp-163-cloud-music

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## 文件目录结构

```js
.
├── App.vue 总组件，会挂载到index页面
├── assets 存放静态资源
│   ├── common.css 为页面设置全局样式/重置默认样式
│   └── img
│       ├── 163.jpg 官方logo图片
│       ├── disc.png 播放器胶片
│       └── needle.png 播放器唱针
├── common 公用的js文件
│   ├── api.js 引用网易云提供的api
│   ├── Bus.js 事件车
│   └── FilterMixins.js 滤波器
├── components 下层文件夹通过 底部导航栏功能 分类
│   ├── discovery '发现'模块
│   │   ├── DiscoverBanner.vue 轮播图
│   │   ├── DiscoverPage.vue '发现'总组件+每日推荐歌单
│   │   ├── DiscoverSongSheet.vue 精品歌单
│   │   └── DiscoverCate.vue 发现页的功能栏部分的组件（'每日推荐'、'歌单'、'排行榜'、'电台'）
│   ├── Dj 电台模块
│   │   └── DjPage.vue '电台'页面的组件
│   ├── Header 头部模块
│   │   └── HomeHeader.vue 头部组件（菜单图标、我的、发现、视频、搜索图标）
│   ├── Login '登录'模块
│   │   └── LoginPage.vue '登录'组件
│   ├── Play '播放器'模块
│   │   └── PlayPage.vue '播放器'页面组件
│   ├── RankList '排行榜'模块
│   │   ├── RankPage.vue 官方榜
│   │   └── SongSheetCategory.vue 榜单排行（从官方榜内点进去）
│   ├── Search '搜索'模块
│   │   ├── SearchPage.vue '搜索'页面
│   │   ├── SearchSongNameList.vue 搜索历史
│   │   └── HotSearchList.vue 热搜榜
│   ├── SongSheetList '歌单'模块
│   │   ├── SongSheetPage.vue '歌单'页面（分类）
│   │   └── SongSheetList.vue 歌单
│   ├── TodayRecommend '每日推荐'模块
│   │   ├── Recommend.vue '推荐'页面
│   │   └── SongPlayList.vue 歌单列表
│   ├── UserCenter '我的'模块
│   │   └── UserPage.vue '我的'页面
│   ├── Video '视频'模块
│   │   ├── VideoPage.vue '视频'页面（分类）
│   │   ├── PlayVideo.vue 播放器
│   │   └── VideoPlay.vue 播放列表
│   ├── plugins 插件
│   │   └── axios.js ajax全局配置
│   ├── router 路由表
│   │   ├── index.js 播放器
│   │   └── routes.js 路由
│   ├── store 共享仓库
│   │   └── index.js 共享数据
│   ├── views 视图
│   │   └── Home.vue 主页面
├── App.vue 入口组件
└──main.js 项目核心文件
```

