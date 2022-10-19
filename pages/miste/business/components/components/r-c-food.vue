<template>
	<view class="food-box bg-fff w-flex-row">
		<image class="left-pic" :src="`http://120.48.75.81:8001/img/${fillData.image_path}`" mode=""></image>
		<view class="w-flex-column mar-l-10 w-flex-auto">
			<text class="f-s-17 c-333 f-w-700">{{ fillData.name }}</text>
			<text class="f-s-12 c-999">{{ fillData.description }}</text>
			<text class="f-s-12 c-333 l-h-25">{{ fillData.tips }}</text>
			<view class="w-flex-row">
				<text class="food-activity">{{ fillData.activity.image_text }}</text>
			</view>
			<view class="w-flex-row w-flex-jusify-between mar-t-10">
				<view class="c-f60">
					<text class="f-s-12">¥</text>
					<text class=" f-s-17 f-w-700">{{ fillData.specfoods[0].price }}</text>
				</view>
				<uni-icons type="plusempty" size="19" color="#fff" class="w-align-s-end plus-icon"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed } from 'vue';
interface Activity {
	icon_color: String;
	image_text: String;
	image_text_color: String;
}
interface FillData {
	name: String;
	description: String;
	tips: String;
	image_path: String;
	activity: Activity;
	specfoods: Array;
}
const props = defineProps({
	fillData: Object
});
const color = computed<String>(() => `#${props.fillData.activity.image_text_color}`);
const bcolor = computed<String>(() => `#${props.fillData.activity.icon_color}`);
console.log(111, color.value);
</script>

<style lang="scss" scoped>
.food-box {
	border-bottom: 1px solid #f8f8f8;
	padding: 15px 10px;
	.left-pic {
		width: 48px;
		height: 48px;
	}
	.food-activity {
		display: block;
		color: v-bind('color');
		border: 1px solid v-bind('bcolor');
		border-radius: 50%;
	}
	.plus-icon {
		width: 19px;
		height: 19px;
		border-radius: 50%;
		background-color: #3190e8;
	}
}
.l-h-25 {
	line-height: 25px;
}
</style>
