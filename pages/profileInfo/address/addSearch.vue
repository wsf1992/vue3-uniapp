<template>
	<view class="vw-100 w-flex-column">
		<scroll-view>
			<view class="w-flex-row box w-flex-cross-center">
				<uni-easyinput class="w-flex-auto input" v-model="keyword" focus placeholder="请输入小区/写字楼/学校等" @input="input"></uni-easyinput>
				<button class="mini-btn" type="primary" size="mini" @click="search">确认</button>
			</view>
			<uni-notice-bar class="mar-b-0" single text="为了满足商家的送餐要求,建议您从列表中选择地址" />
			<view class="w-flex-auto w-flex-column w-flex-cross-center tips-box w-flex-jusify-center" v-if="!addressList.length">
				<text class="tips">找不到地址？</text>
				<text class="tips">请尝试输入小区、写字楼或学校名</text>
				<text class="tips">详细地址（如门牌号）可稍后输入哦。</text>
			</view>
			<uni-list v-else>
				<template v-for="item of addressList" :key="item.geohash">
					<uni-list-item :title="item.name" :note="item.address" class="address-item" clickable @click="backPage(item)" />
				</template>
			</uni-list>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
import { addressSearch } from '@/common/fetch.js';
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const keyword = ref<String>('');
let addressList = ref([]);
function search(): void {
	if (!keyword) return;
	addressSearch({
		keyword: keyword.value
	}).then(res => {
		if (res.data) {
			addressList.value = res.data;
		}
	});
}

function backPage(item: Object): void {
	uni.setStorageSync('geohash', item.geohash);
	uni.setStorageSync('address', item.name);
	uni.navigateBack();
}
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

.address-item {
	background-color: #f5f5f5;
	::v-deep .uni-list-item__content-title,
	::v-deep .uni-list-item__content-note {
		color: #969696;
		font-size: 16px;
	}
}
.mar-b-0 {
	margin-bottom: 0 !important;
}
</style>
