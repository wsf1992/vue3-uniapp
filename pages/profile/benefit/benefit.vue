<template>
	<view>
		<uni-segmented-control class="bg-fff header" :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#3190e8"></uni-segmented-control>
		<view v-if="current === 0"><packet></packet></view>
		<view v-else-if="current === 1"><voucher></voucher></view>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Packet from './packet/index.vue';
import Voucher from './voucher/voucher.vue';

const items = reactive(['红包', '商家代金券']);
const current = ref<Number>(0);

function onClickItem(e: Event): void {
	if (current.value !== e.currentIndex) {
		current.value = e.currentIndex;
	}
}
</script>

<style scoped lang="scss">
.header {
	line-height: 48px;
	height: 48px;
}
</style>
