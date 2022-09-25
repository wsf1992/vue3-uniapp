<template>
	<view class="w-flex-row shops-box bg-fff">
		<image class="pic" src="http://120.48.75.81:8001/img/182c9c87dfa2.png" mode=""></image>
		<view class="w-flex-column right-box w-flex-auto f-s-13 c-333">
			<view class="mar-b-5">
				<text class="mar-r-5">商铺1</text>
				<text class="pay">支付</text>
			</view>
			<text class="mar-b-5">月售 615 单</text>
			<text class="mar-b-5 pad-b-5">20元起送 / 距离1175.8公里</text>
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

	.right-box {
		border-bottom: 1px solid #e4e4e4;

		.pay {
			font-weight: bold;
			font-size: 9px;
			border: 1px solid rgb(255, 96, 0);
			border-bottom-width: 3px;
			color: rgb(255, 96, 0);
		}
	}
}
</style>
