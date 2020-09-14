<template>
    <video
        width="100%"
        height="100%"
        class="video"
        :poster="poster"
        :src="video.url"
        controls
    ></video>
</template>

<script>
    import {getVideoCatePlayUrl} from '../../common/api'
	export default {
		name: "PlayVideo",
        data(){
		    return {
		    	video: ''
            }
        },
        props: ['poster','vid'],
        async created() {
            const video = await getVideoCatePlayUrl(this.vid)
	        // console.log(video.data.urls)
            this.video = video.data.urls[0]
        }
	}
</script>

<style scoped>

</style>
