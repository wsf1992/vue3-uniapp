<template>
	<view class="food-box bg-fff w-flex-row">
		<image class="left-pic" src="http://120.48.75.81:8001/img/182c9ccf52912.png" mode=""></image>
		<view class="w-flex-column mar-l-10 w-flex-auto">
			<text class="f-s-17 c-333 f-w-700">食品1</text>
			<text class="f-s-12 c-999">食品1</text>
			<text class="f-s-12 c-333 l-h-25">月售483份 好评率40%</text>
			<view class="w-flex-row"><text class="c-f1884f food-activity">10-5</text></view>
			<view class="w-flex-row w-flex-jusify-between mar-t-10">
				<view class="c-f60">
					<text class="f-s-12">¥</text>
					<text class=" f-s-17 f-w-700">22</text>
				</view>
				<uni-icons type="plusempty" size="19" color="#fff" class="w-align-s-end plus-icon"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
.food-box {
	border-bottom: 1px solid #f8f8f8;
	padding: 15px 10px;
	.left-pic {
		width: 48px;
		height: 48px;
	}
	.food-activity {
		display: block;
		border: 1px solid #f07373;
		border-radius: 50%;
	}
	.plus-icon {
		width: 19px;
		height: 19px;
		border-radius: 50%;
		background-color: #3190e8;
	}
}
.l-h-25 {
	line-height: 25px;
}
</style>
