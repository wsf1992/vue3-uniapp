<template>
	<view>
		<swiper class="swiper bg-fff" circular indicator-dots indicator-active-color="#007aff">
			<template v-for="(item, index) in list" :index="index">
				<swiper-item><swiper-container :data="item"></swiper-container></swiper-item>
			</template>
		</swiper>
	</view>
</template>

<script setup lang="ts">
import swiperContainer from '@/pages/miste/swiper.vue';
import { getCategory } from '@/common/fetch.js';
import { onMounted, ref } from 'vue';

const list = ref([]);
function getList(): void {
	getCategory({
		group_type: 1,
		geohash: '31.22299,121.36025',
		flags: ['F']
	}).then(res => {
		list.value = res.data.reduce(
			(a, b, i) => {
				if (i < 8) {
					a[0].push(b);
				} else {
					a[1].push(b);
				}
				return a;
			},
			[[], []]
		);
	});
}

onMounted(() => {
	getList();
});
</script>

<style>
.swiper {
	height: 206px;
}
</style>
