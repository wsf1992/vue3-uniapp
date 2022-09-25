<template>
	<view class="w-flex-row rating">
		<image src="http://elm.cangdu.org/img/default.jpg" mode="" class="user mar-r-20"></image>
		<view class="w-flex-auto w-flex-column">
			<text class="f-s-13 c-666 mar-b-5">4**********b</text>
			<view class="w-flex-row w-flex-cross-center mar-b-5">
				<uni-rate allow-half :value="3.5" :size="10" readonly />
				<text class="f-s-12 c-666">按时送达</text>
			</view>
			<view class="w-flex-row mar-b-5">
				<image src="http://elm.cangdu.org/img/default.jpg" mode="" class="food_img mar-r-10"></image>
				<image src="http://elm.cangdu.org/img/default.jpg" mode="" class="food_img mar-r-10"></image>
			</view>
			<view class="mar-t-10">
				<text class="food-name c-999 f-s-13">超级至尊比萨-铁盘</text>
				<text class="food-name c-999 f-s-13">韩式炸鸡</text>
			</view>
		</view>
		<text class="f-s-12 c-999">2017-02-10</text>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
.rating {
	padding: 15px 12px;
	border-top: 1px solid #f1f1f1;

	.user {
		width: 36px;
		height: 36px;
		border-radius: 50%;
	}

	.food_img {
		width: 73px;
		height: 73px;
	}

	.food-name {
		border: 1px solid #ebebeb;
		border-radius: 4px;
		padding: 5px;
		margin-right: 5px;
	}
}
</style>
