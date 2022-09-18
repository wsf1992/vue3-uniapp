<template>
	<view class="container">
		<view class="w-flex-column  w-flex-cross-center">
			<view class="f-s-12 w-align-s-end l-h-50">
				<navigator url="/pages/profile/benefit/voucher/voucjerDescription/voucjerDescription" hover-class="none" class="w-flex-row w-flex-cross-center">
					<uni-icons type="help-filled" size="16" color="#3190e8"></uni-icons>
					<text class="c-3190e8">商家代金券</text>
				</navigator>
			</view>
			<image src="../../../../static/norecord.png" mode="" class="img"></image>
			<view class="mar-t-10 c-666 text-center f-s-17"><text>无法使用代金券</text></view>
			<view class="c-999 text-center f-s-12 mar-t-b-7"><text>非客户端或客户端版本过低</text></view>
			<navigator url="/pages/profile/download/download"><button type="primary" class="btn">下载或升级客户端</button></navigator>
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
.container {
	padding: 0 17px;
	.img {
		width: 164px;
		height: 82px;
		margin-top: 90px;
	}
}
.l-h-50 {
	line-height: 50px;
}
.mar-t-b-7 {
	margin: 7px 0;
}
.btn {
	background-color: #56d176;
	line-height: 36px;
	font-size: 16px;
}
</style>
