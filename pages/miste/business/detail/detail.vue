<template>
	<view>
		<view class="bg-fff mar-t-10">
			<uni-section class=" border-b" title="活动与属性"></uni-section>
			<view class="bg-fff c-666 f-s-13 activity">
				<text class="text-box c-fff bg-f07373">减</text>
				<text>满30减5，满60减8(APP专享)</text>
			</view>
			<view class="bg-fff c-666 f-s-13 activity">
				<text class="text-box c-fff">保</text>
				<text>已加入“外卖保”计划，食品安全有保障(APP专享)</text>
			</view>
			<view class="bg-fff c-666 f-s-13 activity">
				<text class="text-box c-fff bg-57a9ff">准</text>
				<text>准时必达，超时秒赔(APP专享)</text>
			</view>
			<view class="bg-fff c-666 f-s-13 activity pad-b-10">
				<text class="text-box c-fff">票</text>
				<text>该商家支持开发票，请在下单时填写好发票抬头(APP专享)</text>
			</view>
		</view>
		<view class="bg-fff mar-t-10">
			<uni-section class="border-b" title="食品监督安全公示" @click="goSafe">
				<template v-slot:right>
					<text class="c-bbb f-s-17">企业认证详情 ></text>
				</template>
			</uni-section>
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
			<uni-section class="" title="商家信息"></uni-section>
			<uni-list class="shop_status_info">
				<uni-list-item title="商铺2"></uni-list-item>
				<uni-list-item title="地址: 北京市朝阳区安贞路2号"></uni-list-item>
				<uni-list-item title="营业时间: [8:30/20:30]"></uni-list-item>
				<uni-list-item title="营业执照" showArrow></uni-list-item>
				<uni-list-item title="餐饮服务许可证" showArrow></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script setup lang="ts">
function goSafe(): void {
	uni.navigateTo({
		url: '/pages/miste/business/detail/shopSafe/shopSafe'
	});
}
</script>

<style scoped lang="scss">
.border-b::after {
	content: '';
	display: block;
	border-bottom: 1px solid #f1f1f1;
	margin-bottom: 7px;
}
.activity {
	padding: 0 15px;
	margin-bottom: 5px;

	.text-box {
		background-color: #999;
		padding: 0 2px;
		border-radius: 3px;
		line-height: 32px;
		margin-right: 10px;
	}
}
.bg-f07373 {
	background-color: #f07373 !important;
}
.bg-57a9ff {
	background-color: #57a9ff !important;
}
.padd-15 {
	padding: 15px;
}
.l-h-32 {
	line-height: 32px;
}
.shop_status_info {
	::v-deep span {
		color: #666 !important;
	}
}
</style>
