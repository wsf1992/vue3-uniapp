<template>
	<view>
		<card @right-click="openDeatil"></card>
		<view class="detail"><text>交易明细</text></view>
		<view class="no-record">
			<image src="../../../static/norecord.png" class="img"></image>
			<view class="c-999 text-center"><text>暂无明细记录</text></view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import Card from '../components/card.vue';

function openDeatil(): void {
	uni.navigateTo({
		url: '/pages/profile/balance/detail/detail'
	});
}
</script>

<style lang="scss" scoped>
.detail {
	color: #999;
	padding-left: 12px;
	line-height: 48px;
}
.no-record {
	padding-top: 25px;
	.img {
		display: block;
		width: 195px;
		height: 121px;
		margin: 0 auto 20px;
	}
}
</style>
