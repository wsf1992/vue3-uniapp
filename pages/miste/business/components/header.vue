<template>
	<view class="w-flex-column container c-fff">
		<view class="cover"></view>
		<view class="header">
			<view class="w-flex-row w-flex-cross-center" @click="openDetail">
				<image src="http://120.48.75.81:8001/img/182c9c87dfa2.png" mode="" class="logo"></image>
				<view class="w-flex-column w-flex-auto f-s-12">
					<text class="f-w-700 f-s-18 mar-b-7">商铺2</text>
					<text class="mar-b-7">商家配送/分钟配送/配送费5</text>
					<text>公告：商铺2</text>
				</view>
				<text>></text>
			</view>
			<view class="w-flex-row w-flex-jusify-between f-s-12 mar-t-10" @click="open">
				<text>满30减5，满60减8（APP专享）</text>
				<text>1个活动 ></text>
			</view>
		</view>
		<!-- background-color="#262626"  :mask-click="false" -->
		<uni-popup ref="popup" :mask-click="false">
			<view class="pop-box w-flex-column w-flex-cross-center f-s-12">
				<text class="f-s-18 mar-b-30">商铺6</text>
				<text class="title mar-b-15">优惠信息</text>
				<text class="mar-b-30 w-align-s-start">满满30减5，满60减8（APP专享）</text>
				<text class="title mar-b-15">商家公告</text>
				<text class="w-align-s-start">店铺6</text>
				<uni-icons type="close" color="#fff" @click="close" size="50" class="close-btn"></uni-icons>
			</view>
		</uni-popup>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
			background-image: url('http://120.48.75.81:8001/img/182c9c87dfa2.png');
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
