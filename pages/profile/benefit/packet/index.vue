<template>
	<view class="container">
		<view class="w-flex-row w-flex-jusify-between header f-s-12">
			<text>
				有
				<text class="c-ff5340">{{ list.length }}</text>
				个红包即将到期
			</text>
			<view>
				<navigator url="/pages/profile/benefit/hbDescription/hbDescription" hover-class="none" class="w-flex-row w-flex-cross-center">
					<uni-icons type="help-filled" size="16" color="#3190e8"></uni-icons>
					<text class="c-3190e8">红包说明</text>
				</navigator>
			</view>
		</view>
		<view v-for="item in list" :key="item.id" class="mar-b-15">
			<hong-bao
				:phone="item.phone"
				:sum-condition="item.sum_condition"
				:amount="item.amount"
				:limit-map="item.limit_map"
				:name="item.name"
				:end-date="item.end_date"
				:begin-date="item.begin_date"
			></hong-bao>
		</view>
		<view class="text-center c-999 f-s-12 mar-t-10">
			<navigator url="/pages/profile/benefit/hbHistory/hbHistory" hover-class="none"><text>查看历史红包&nbsp;&nbsp;></text></navigator>
		</view>
		<view class="footer bg-fff w-flex-row">
			<view class="w-flex-auto c-555 f-s-18"><navigator url="/pages/profile/benefit/exchangePacket/exchangePacket">兑换红包</navigator></view>
			<view class="fgx"></view>
			<view class="w-flex-auto c-555 f-s-18"><navigator url="/pages/profile/benefit/recommend/recommend">推荐有奖</navigator></view>
		</view>
	</view>
</template>

<script setup lang="ts">
import HongBao from '../../components/hongbao.vue';
import { getHongbao } from '@/common/fetch.js';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/store/pinia/index.js';
const list = ref([]);
const user = useUserStore();
async function hongbaoList() {
	const result = await getHongbao(user.user_id);
	if (result.data.length) {
		list.value = result.data;
	}
}
onMounted(async () => {
	hongbaoList();
});
</script>

<style scoped lang="scss">
.container {
	padding: 0 17px 70px;
	position: relative;
	.header {
		line-height: 50px;
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		line-height: 50px;
		text-align: center;

		.fgx {
			width: 1px;
			align-self: stretch;
			border-right: 1px solid #f5f5f5;
		}
	}
}
</style>
