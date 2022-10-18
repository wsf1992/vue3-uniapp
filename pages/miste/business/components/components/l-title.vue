<template>
	<view class="l-titile w-flex-row w-flex-cross-center" :class="{ active: active }">
		<image class="icon" src="https://fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg" mode=""></image>
		<text class="f-s-15 c-666 f-w-700">12312</text>
	</view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
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
