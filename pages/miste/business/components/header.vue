<template>
	<view class="w-flex-column container c-fff">
		<view class="cover"></view>
		<view class="header">
			<view class="w-flex-row w-flex-cross-center" @click="openDetail">
				<image :src="imgurl" mode="" class="logo"></image>
				<view class="w-flex-column w-flex-auto f-s-12">
					<text class="f-w-700 f-s-18 mar-b-7">{{ name }}</text>
					<text class="mar-b-7">商家配送/{{ order_lead_time }}分钟配送/配送费¥{{ float_delivery_fee }}</text>
					<text>公告：{{ promotion_info }}</text>
				</view>
				<text>></text>
			</view>
			<view class="w-flex-row w-flex-jusify-between f-s-12 mar-t-10" @click="open" v-if="activities.length">
				<text>{{ activities[0].description }}（APP专享）</text>
				<text>{{ activities.length }}个活动 ></text>
			</view>
		</view>
		<!-- background-color="#262626"  :mask-click="false" -->
		<uni-popup ref="popup" :mask-click="false">
			<view class="pop-box w-flex-column w-flex-cross-center f-s-12">
				<text class="f-s-18 mar-b-30">{{ name }}</text>
				<text class="title mar-b-15">优惠信息</text>
				<template v-for="item in activities" key="item.id">
					<text class="w-align-s-start">{{ item.description }}（APP专享）</text>
				</template>
				<text class="title mar-b-15 mar-t-30">商家公告</text>
				<text class="w-align-s-start">{{ promotion_info }}</text>
				<uni-icons type="close" color="#fff" @click="close" size="50" class="close-btn"></uni-icons>
			</view>
		</uni-popup>
	</view>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
	image_path: String,
	name: String,
	order_lead_time: String,
	float_delivery_fee: String,
	promotion_info: String,
	activities: {
		type: Array,
		default: function() {
			return [];
		}
	}
});

const imgurl = computed(() => `http://120.48.75.81:8001/img/${props.image_path}`);
const imgurlCss = computed(() => `url(http://120.48.75.81:8001/img/${props.image_path})`);

const popup = ref<InstanceType<typeof uniPopup> | null>();
function open(): void {
	popup.value.open();
}
function close(): void {
	popup.value.close();
}
function openDetail(): void {
	uni.navigateTo({
		url: '/pages/miste/business/detail/detail'
	});
}
</script>

<style scoped lang="scss">
.container {
	padding: 10px;
	background-color: rgba(119, 103, 137, 0.3);
	position: relative;
	overflow: hidden;
	.header {
		z-index: 10;
	}

	.cover {
		position: absolute;
		z-index: 9;
		top: 0;
		left: 0;
		&::before {
			content: '';
			display: block;
			width: 390px;
			height: 350px;
			background-image: v-bind('imgurlCss');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			filter: blur(10px);
		}
	}

	.logo {
		width: 70px;
		height: 70px;
		margin-right: 7px;
	}
}

.pop-box {
	width: 100vw;
	padding: 90px 30px 0px;
	background-color: #262626;
	height: 100vh;
	position: relative;
	box-sizing: border-box;

	.title {
		border: 1px solid #555;
		border-radius: 112px;
		padding: 5px 10px;
	}

	.close-btn {
		position: fixed;
		bottom: 30px;
		// left: 0;
		// right: 0;
	}
}
</style>
