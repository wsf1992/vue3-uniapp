<template>
	<view class="container">
		<view v-for="item in list" :key="item.id" class="mar-b-15">
			<hong-bao
				:themeColor="null"
				:phone="item.phone"
				:sum-condition="item.sum_condition"
				:amount="item.amount"
				:limit-map="item.limit_map"
				:name="item.name"
				:end-date="item.end_date"
				:begin-date="item.begin_date"
			></hong-bao>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HongBao from '../../components/hongbao.vue';
import { useUserStore } from '@/store/pinia/index.js';
import { gethbHistory } from '@/common/fetch.js';
const list = ref([]);
const user = useUserStore();
import { onShow } from '@dcloudio/uni-app';
async function getList(): void {
	const result = await gethbHistory(user.user_id);
	if (result.data.length) {
		list.value = result.data;
	}
	console.log(list);
}
onShow(() => {
	getList();
});
</script>

<style scoped lang="scss">
.container {
	padding: 17px;
}
</style>
