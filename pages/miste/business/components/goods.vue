<template>
	<view class="w-flex-row">
		<view class=" w-flex-column">
			<left-title :active="curIndex == 0" @click="get(0)"></left-title>
			<left-title :active="curIndex == 1" @click="get(1)"></left-title>
		</view>
		<view class="r-content w-flex-auto">
			<scroll-view scroll-y="true" class="scroll-Y">
				<right-contain-header></right-contain-header>
				<right-contain-food></right-contain-food>
				<right-contain-header></right-contain-header>
				<right-contain-food></right-contain-food>
				<right-contain-header></right-contain-header>
				<right-contain-food></right-contain-food>
				<right-contain-header></right-contain-header>
				<right-contain-food></right-contain-food>
			</scroll-view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import leftTitle from './components/l-title.vue';
import rightContainHeader from './components/r-c-header.vue';
import rightContainFood from './components/r-c-food.vue';
import { ref } from 'vue';

const curIndex = ref(0);

function get(tar) {
	curIndex.value = tar;
}
</script>

<style lang="scss" scoped>
.scroll-Y {
	height: auto;
}
</style>
