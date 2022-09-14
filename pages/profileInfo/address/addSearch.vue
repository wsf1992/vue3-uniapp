<template>
	<view class="vw-100 w-flex-column">
		<view class="w-flex-row box w-flex-cross-center">
			<uni-easyinput class="w-flex-auto input" v-model="value" focus placeholder="请输入小区/写字楼/学校等" @input="input"></uni-easyinput>
			<button class="mini-btn" type="primary" size="mini">确认</button>
		</view>
		<uni-notice-bar single text="为了满足商家的送餐要求,建议您从列表中选择地址" />
		<view class="w-flex-auto w-flex-column w-flex-cross-center tips-box w-flex-jusify-center">
			<text class="tips">找不到地址？</text>
			<text class="tips">请尝试输入小区、写字楼或学校名</text>
			<text class="tips">详细地址（如门牌号）可稍后输入哦。</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped lang="scss">
.box {
	padding: 12px;
	background-color: #fff;
	.input {
		background-color: #f2f2f2;
		// line-height: 40px;
		::v-deep .uni-input-placeholder {
			color: #0009;
			font-weight: 400;
		}
	}
	.mini-btn {
		margin-left: 5px;
		line-height: 36px;
	}
}
.tips-box {
	.tips {
		font-size: 18px;
		color: #969696;
		margin-bottom: 10px;
	}
}
</style>
