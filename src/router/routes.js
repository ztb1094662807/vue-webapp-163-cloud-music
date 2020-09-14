import Home from "../views/Home";

export const routes =  [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: '',
		}
	},
	{
		path: '/video',
		component:()=>import('../components/Video/VideoPage.vue'),
		meta: {
			title: '视频',
		}
	},
	{
		path: '/recommend',
		component:()=>import('../components/TodayRecommend/Recommend.vue'),
		meta: {
			title: '每日推荐',
		}
	},
	{
		path: '/songsheet',
		component:()=>import('../components/SongSheetList/SongSheetPage.vue'),
		meta: {
			title: '歌单广场',
		}
	},
	{
		path: '/rank',
		component:()=>import('../components/RankList/RankPage.vue'),
		meta: {
			title: '排行榜',
		}
	},
	{
		path: '/dj',
		component:()=>import('../components/Dj/DjPage.vue'),
		meta: {
			title: '电台',
		}
	},
	{
		path: '/search',
		component:()=>import('../components/Search/SearchPage.vue'),
		meta: {
			title: '搜索',
		}
	},
	{
		path: '/user',
		component:()=>import('../components/UserCenter/UserPage.vue'),
		meta: {
			title: '个人中心',
		}
	},
	{
		path: '/play',
		component:()=>import('../components/Play/PlayPage.vue'),
		meta: {
			title: '音乐播放',
		}
	},
	{
		path: '/login',
		component:()=>import('../components/Login/LoginPage.vue'),
		meta: {
			title: '登录',
		}
	},
]