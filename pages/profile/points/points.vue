<template>
	<view>
		<card @right-click="openDeatil" @btn-click="tips" left-tips="当前积分" right-tips="积分说明" unit="分" btn-tips="积分兑换商品" btn-color="#fe6d47">0</card>
		<view class="detail"><text>最近30天积分记录</text></view>
		<view class="no-record">
			<image src="../../../static/norecord.png" class="img"></image>
			<view class="text-center f-s-18"><text>最近30天无积分记录</text></view>
			<view class="c-999 text-center f-s-12 mar-t-10"><text>快去下单赚取大量积分吧</text></view>
		</view>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script lang="ts" setup>
import Card from '../components/card.vue';
import { ref } from 'vue';
const tipspop = ref<InstanceType<typeof TipsPop> | null>();
function openDeatil(): void {
	uni.navigateTo({
		url: '/pages/profile/points/detail/detail'
	});
}
function tips(): void {
	tipspop.value.openPop('快去下单赚取大量积分吧');
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
