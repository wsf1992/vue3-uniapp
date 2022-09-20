<template>
	<uni-grid :column="4" :highlight="true" :showBorder="false" class="bg-fff">
		<uni-grid-item v-for="(item, index) in data" :index="index" :key="index">
			<view class="w-flex-column w-flex-cross-center w-flex-jusify-center h-100">
				<image class="pic" :src="`https://fuss10.elemecdn.com/${item.image_url}`" mode=""></image>
				<text class="text f-s-13 c-666">{{ item.title }}</text>
			</view>
		</uni-grid-item>
	</uni-grid>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
	data: {
		type: Array,
		default: function() {
			return [];
		}
	}
});
</script>

<style lang="scss" scoped>
.pic {
	width: 43px;
	height: 43px;
	margin-bottom: 7px;
}
</style>
