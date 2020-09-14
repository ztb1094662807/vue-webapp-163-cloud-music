import Vue from 'vue'
import VueRouter from 'vue-router'

// vant ui组件库
import {
	Swipe,SwipeItem,//轮播
	Lazyload,//懒加载
	Tag,//标记
	Tab,Tabs,//标签页
	Image as VanImage,//图片
	Divider, //分割线
	Sticky, //粘性布局
	NavBar, //导航栏
	Field, //输入框
	Icon, //图标
	Slider, //滑块
} from 'vant'

Vue.use(Swipe).use(SwipeItem).use(Lazyload)
	.use(Tag).use(Tab).use(Tabs).use(VanImage).use(Divider)
	.use(Sticky).use(NavBar).use(Field)
	.use(Icon).use(Slider)

// 全局组件
import VideoPlay from "../components/Video/VideoPlay";
import Banner from "../components/Discover/DiscoverBanner"
import SongSheetCategory from "../components/RankList/SongSheetCategory.vue"
Vue.component('VideoPlay', VideoPlay)
Vue.component('Banner',Banner)
Vue.component('SongSheetCategory',SongSheetCategory)


Vue.use(VueRouter)

import {
	routes
} from './routes'

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router