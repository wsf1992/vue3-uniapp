<template>
	<view class="w-flex-row w-flex-auto">
		<view class="w-flex-column">
			<template v-for="(item, index) in menuArray" :key="item.id">
				<left-title :active="curIndex == index" @click="get(index, item.name)" :name="item.name" :icon_url="item.icon_url"></left-title>
			</template>
		</view>
		<view class="r-content w-flex-auto">
			<scroll-view scroll-with-animation scroll-y="true" id="scroll-box" :style="`height: ${boxHeight}px`" :scroll-top="scrollTop" @scroll="scroll">
				<view id="baseview">21321321</view>
				<template v-for="(item, index) in menuArray" :key="item.id">
					<right-contain-header :name="item.name" :description="item.description" :id="item.name"></right-contain-header>
					<template v-for="(f, index) in item.foods" :key="'food' + f.id">
						<right-contain-food :fill-data="f"></right-contain-food>
					</template>
				</template>
			</scroll-view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import leftTitle from './components/l-title.vue';
import rightContainHeader from './components/r-c-header.vue';
import rightContainFood from './components/r-c-food.vue';
import { getShopMenu } from '@/common/fetch.js';
import { ref, onMounted, nextTick } from 'vue';
const curIndex = ref(0);

const scrollTop = ref(100);
const oldScrollTop = ref(0);
function scroll(e) {
	oldScrollTop.value = e.detail.scrollTop;
}
function get(tar, id) {
	curIndex.value = tar;

	const query = uni.createSelectorQuery();
	query
		.select('#baseview')
		.boundingClientRect(data => {
			const boxTop = data.top;
			const query1 = uni.createSelectorQuery();
			query1
				.select(`#${id}`)
				.boundingClientRect(data => {
					scrollTop.value = oldScrollTop.value;
					nextTick(() => {
						scrollTop.value = data.top - boxTop;
					});
				})
				.exec();
		})
		.exec();
}

const boxHeight = ref(0);
function getScrollHeight(): void {
	const query = uni.createSelectorQuery().in(this);
	query
		.select('#scroll-box')
		.boundingClientRect(data => {
			let getWindowInfo = uni.getWindowInfo();
			boxHeight.value = getWindowInfo.windowHeight - data.top;
		})
		.exec();
}

let menuArray = ref([]);
function getMenu(): void {
	getShopMenu(2).then(res => {
		menuArray.value = res.data;
	});
}

onMounted(() => {
	getMenu();
	getScrollHeight();
});
</script>

<style lang="scss" scoped></style>
