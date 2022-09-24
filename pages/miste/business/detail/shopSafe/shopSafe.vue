<template>
	<view>
		<view class="bg-fff mar-t-10">
			<uni-section class="border-b" title="食品监督安全公示"></uni-section>
			<view class="w-flex-row c-666 f-s-13 padd-15 w-flex-cross-center">
				<uni-icons type="minus-filled" size="48" color="red" class="mar-r-10"></uni-icons>
				<view class="w-flex-column l-h-32">
					<text>
						监督检查结果：
						<text class="c-red">差</text>
					</text>
					<text>检查日期：</text>
				</view>
			</view>
		</view>
		<view class="bg-fff mar-t-10">
			<uni-section class="border-b" title="工商登记信息"></uni-section>
			<view class="w-flex-column box c-333 f-s-13">
				<text class="text">企业名称</text>
				<text class="text">工商执照注册号</text>
				<text class="text">注册资本</text>
				<text class="text">注册地址</text>
				<text class="text">属地监管所</text>
				<text class="text">法定代表人</text>
				<text class="text">经营范围</text>
			</view>
		</view>
		<view class="bg-fff mar-t-10">
			<uni-section class="border-b" title="餐饮许可证"></uni-section>
			<view class="w-flex-column box c-333 f-s-13">
				<text class="text">营业范围</text>
				<text class="text">许可证有效期</text>
				<text class="text">许可证号</text>
				<text class="text">发证时间</text>
				<text class="text">发证机关</text>
			</view>
		</view>
		<view class="bg-fff mar-t-10 pad-b-25">
			<uni-section class="border-b" title="许可证书"></uni-section>
			<view class="w-flex-row img_container w-flex-jusify-center">
				<image src="http://elm.cangdu.org/img/default.jpg" mode="" class="certificate"></image>
				<image src="http://elm.cangdu.org/img/default.jpg" mode="" class="certificate"></image>
			</view>
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
.border-b::after {
	content: '';
	display: block;
	border-bottom: 1px solid #f1f1f1;
}
.padd-15 {
	padding: 15px;
}
.l-h-32 {
	line-height: 32px;
}
.box {
	padding: 10px 24px;

	.text {
		display: block;
		line-height: 24px;
		margin-bottom: 10px;
	}
}
.img_container {
	background-color: #ebebeb;
	padding: 10px;
	width: 286px;
	margin: 10px auto;

	.certificate {
		width: 143px;
		height: 141px;
	}
}
</style>
