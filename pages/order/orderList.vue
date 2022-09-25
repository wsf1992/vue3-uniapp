<template>
	<view class="w-flex-row shops-box bg-fff">
		<image class="pic" src="http://120.48.75.81:8001/img/182c9c87dfa2.png" mode=""></image>
		<view class="w-flex-column right-box w-flex-auto f-s-13 c-333">
			<view class="mar-b-5 w-flex-row w-flex-jusify-between">
				<text class="mar-r-5">商铺1></text>
				<text>支付超时</text>
			</view>
			<text class="mar-b-5 c-999 f-s-12">2022-09-20 21:58</text>
			<view class="border"></view>
			<view class="w-flex-row w-flex-jusify-between food">
				<text>食品1</text>
				<text class="c-f60 f-w-700">28.00</text>
			</view>
			<view class="border"></view>
			<button type="primary" plain size="mini" class="btn w-align-s-end">再来一单</button>
		</view>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
.shops-box {
	padding: 12px;
	border-bottom: 1px solid #e4e4e4;
	.pic {
		width: 42px;
		height: 42px;
		margin-right: 10px;
	}
}
.border {
	border-bottom: 1px solid #e4e4e4;
}

.btn {
	line-height: 22px;
	padding: 2px 5px;
	margin-top: 10px;
	margin-left: 0;
	margin-right: 0;
}

.food {
	line-height: 48px;
}
</style>
