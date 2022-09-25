<template>
	<view class="search-container">
		<view class="w-flex-row bg-fff w-flex-cross-center">
			<uni-search-bar class="w-flex-auto" placeholder="请输入商家或美食名称" :focus="true" v-model="searchValue" @clear="clear" cancelButton="none"></uni-search-bar>
			<button type="primary" size="mini" class="btn">提交</button>
		</view>
		<text class="shop-title c-666 f-w-700">商家</text>
		<view class="bg-fff">
			<template v-for="item in 10">
				<shops></shops>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import shops from '@/pages/search/shop.vue';

const searchValue = ref();
</script>

<style lang="scss" scoped>
.search-container {
	padding-bottom: 49px;
	box-sizing: border-box;
}
.btn {
	height: 34px;
	line-height: 34px;
	margin-right: 10px;
}
.shop-title {
	line-height: 50px;
	padding-left: 15px;
}
</style>
