<template>
	<view class="w-flex-column">
		<view class="uni-flex w-flex-jusify-between w-header">
			<view>ele.me</view>
			<view>登陆|注册</view>
		</view>
		<view class="w-flex-column mar-t-10 mar-b-10">
			<view class="uni-flex w-flex-jusify-between w-city-nav">
				<view class="f-s-13 c-666">当前定位城市：</view>
				<view class="f-s-12 f-w-900 c-9f9f9f">定位不准时，请在城市列表中选择</view>
			</view>
			<view class="uni-flex w-flex-jusify-between w-city-tips">
				<view class="f-s-18 c-3190e8">北京</view>
				<view class="f-s-18 c-999">></view>
			</view>
		</view>
		<view class="w-flex-column">
			<view class="city-title">热门城市</view>
			<view class="uni-flex" style="flex-wrap:wrap;border-bottom: 1px solid #e4e4e4;">
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
				<view class="city-item">1</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.w-header {
	height: 48px;
	background-color: #3190e8;
	color: #fff;
	align-items: center;
	padding: 0 10px;
}
.w-city-nav {
	height: 36px;
	margin: 0 11px;
	align-items: center;
}
.w-city-tips {
	height: 41px;
	padding: 0 11px;
	align-items: center;
	border-top: 1px solid #e4e4e4;
	border-bottom: 2px solid #e4e4e4;
}
.city-title {
	height: 36px;
	line-height: 36px;
	border-top: 2px solid #e4e4e4;
	border-bottom:1px solid #e4e4e4;
	padding-left: 11px;

}
.city-item {
	box-sizing: border-box;
	height: 43px;
	line-height: 43px;
	flex: 0 0 25%;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	border-bottom: 1px solid #e4e4e4;
	border-right: 1px solid #e4e4e4;
}
.city-item:nth-child(4n) {
	border-right-width: 0px;
}
</style>
