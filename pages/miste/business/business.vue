<template>
	<view class="">
		<header-part></header-part>
		<uni-segmented-control class="bg-fff segmented" :current="current" :values="['商品', '评价']" style-type="text" :active-color="activeColor" @clickItem="onClickItem" />
		<view class="border-b"></view>
		<template v-if="current === 0">
			<goods></goods>
		</template>
		<template v-else-if="current === 1">
			<evaluate></evaluate>
		</template>
	</view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';
import headerPart from './components/header.vue';
import goods from './components/goods.vue';
import evaluate from './components/evaluate.vue';

const current = ref<Number>(0);
function onClickItem(e: Event): void {
	if (current.value !== e.currentIndex) {
		current.value = e.currentIndex;
	}
}

onShow(() => {
	uni.setNavigationBarTitle({
		title: '商铺2'
	});
});
</script>

<style scoped lang="scss">
.segmented {
	padding-bottom: 5px;
	height: 54px;

	::v-deep .segmented-control__text {
		color: #666 !important;
	}
	::v-deep .segmented-control {
		height: 54px;
		background-color: #fff;
	}
	::v-deep .segmented-control__item--text {
		color: #3190e8 !important;
	}
}

.border-b {
	display: block;
	border-bottom: 1px solid #f1f1f1;
}
</style>
