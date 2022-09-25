<template>
	<view class="">
		<view class="w-flex-row bg-fff header-box">
			<view class="w-flex-column w-flex-cross-center mar-r-30">
				<text class="f-s-30 c-f60">4.1</text>
				<text class="f-s-16 c-666 mar-b-5">综合评价</text>
				<text class="c-999 f-s-12">高于周边商家76.9%</text>
			</view>
			<view class="w-flex-column w-flex-auto w-align-self-c">
				<view class="w-flex-row w-flex-cross-center mar-b-5">
					<text class="c-666 mar-r-10">服务态度</text>
					<uni-rate allow-half :value="3.5" :size="10" readonly />
					<text class="c-f60 mar-l-5 f-s-13">{{ 3.6 }}</text>
				</view>
				<view class="w-flex-row w-flex-cross-center mar-b-5">
					<text class="c-666 mar-r-10">菜品评价</text>
					<uni-rate allow-half :value="3.5" :size="10" readonly />
					<text class="c-f60 mar-l-5 f-s-13">{{ 3.6 }}</text>
				</view>
				<view class="w-flex-row w-flex-cross-center">
					<text class="c-666 mar-r-10">送达时间</text>
					<text class="f-s-13">10分钟</text>
				</view>
			</view>
		</view>
		<view class="bg-fff pad-12 mar-t-10">
			<view class="w-flex-row w-flex-wrap">
				<template v-for="(item, i) in tagList" :key="i">
					<text class="tags-box">{{ item }}</text>
				</template>
			</view>
		</view>
		<view class="bg-fff">
			<template v-for="item in 10">
				<rating></rating>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import rating from './components/rating.vue';

const tagList = ref(['全部(473)', '满意(453)', '不满意(20)', '有图(2)', '味道好(47)', '送货快(32)', '分量足(18)', '包装精美(15)']);
</script>

<style lang="scss" scoped>
.header-box {
	padding: 20px 12px;
}
.tags-box {
	padding: 7px;
	margin: 0 10px 5px 0;
	background-color: #ebf5ff;
	border-radius: 5px;
	color: #6d7885;
	font-size: 14px;
}
.pad-12 {
	padding: 12px;
}
</style>
