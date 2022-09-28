<template>
	<view class="box">
		<swiper class="swiper bg-fff" circular indicator-dots indicator-active-color="#007aff">
			<template v-for="(item, index) in list" :index="index">
				<swiper-item><swiper-container :data="item"></swiper-container></swiper-item>
			</template>
		</swiper>
		<view class="bg-fff header mar-t-10"><text class="c-999 f-s-14">附近商家</text></view>
		<template v-for="item in shopList" :index="item.id">
			<shop :data="item"></shop>
		</template>
	</view>
</template>

<script setup lang="ts">
import swiperContainer from '@/pages/miste/swiper.vue';
import shop from '@/pages/miste/shop.vue';
import { getCategory, getShop, getTailByPois } from '@/common/fetch.js';
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/store/pinia/index.js';
const user = useUserStore();

const list = ref([]);
const shopList = ref([]);
function getList(): void {
	getCategory({
		group_type: 1,
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

function getShopList(): void {
	getShop({
		offset: 0,
		limit: 20,
		extras: 'activities',
		keyword: '',
		restaurant_category_id: '',
		restaurant_category_ids: '',
		order_by: '',
		delivery_mode: ''
	}).then(res => {
		shopList.value = res.data;
	});
}

function getAddress(): void {
	getTailByPois().then(res => {
		uni.setNavigationBarTitle({ title: res.data.name });
	});
}
onMounted(() => {
	getAddress();
	getList();
	getShopList();
});
</script>

<style scoped lang="scss">
.box {
	margin-bottom: 50px;

	.swiper {
		height: 206px;
	}
	.header {
		line-height: 41px;
		padding-left: 14px;
	}
}
</style>
