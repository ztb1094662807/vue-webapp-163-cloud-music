import {numberFormat} from 'js-num-format'
import MusicUtils from "./MusicUtils"
export default {
	filters:{
		handleNumFormat: numberFormat,
		handleTimeFormat: MusicUtils.timeFormat
	}
}
