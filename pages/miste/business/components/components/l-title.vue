<template>
	<view class="l-titile w-flex-row w-flex-cross-center" :class="{ active: active }">
		<image class="icon" :src="`https://fuss10.elemecdn.com${getPath(icon_url)}`" mode=""></image>
		<text class="f-s-15 c-666 f-w-700">{{ name }}</text>
	</view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { getPath } from '@/common/util.js';

defineProps({
	name: String,
	icon_url: String,
	active: Boolean
});
</script>

<style lang="scss" scoped>
.l-titile {
	box-sizing: border-box;
	padding: 17px 7px;
	width: 90px;
	border-bottom: 1px solid #ededed;
	border-left: 3px solid #f5f5f5;
	&.active {
		border-left: 3px solid #3190e8;
		background-color: #fff;
	}
	.icon {
		width: 12px;
		height: 14px;
		margin-right: 5px;
	}
}
</style>
