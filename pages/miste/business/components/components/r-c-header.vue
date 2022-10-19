<template>
	<view class="w-flex-row header">
		<text class="f-s-17 c-666 f-w-700">{{ name }}</text>
		<text class="f-s-12 c-999 w-align-s-end mar-l-5">{{ description }}</text>
	</view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
	name: String,
	description: String
});
</script>

<style lang="scss" scoped>
.header {
	padding: 10px;
}
</style>
