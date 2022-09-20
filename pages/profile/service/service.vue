<template>
	<view class="container">
		<view class="w-flex-row">
			<view class="w-flex-auto head-box w-flex-column w-flex-cross-center" @click="tipsNo" hover-class="button-hover">
				<uni-icons type="person-filled" size="24" color="#ff7b52"></uni-icons>
				<text class="tips">在线客服</text>
			</view>
			<view class="border"></view>
			<view class="w-flex-auto head-box w-flex-column w-flex-cross-center" @click="call" hover-class="button-hover">
				<uni-icons type="phone-filled" size="24" color="#6bc20a"></uni-icons>
				<text class="tips">在线客服</text>
			</view>
		</view>
		<view class="border-line"></view>
		<uni-section title="热门问题" title-font-size="18px" class="hot-question"></uni-section>
		<uni-list>
			<template v-for="item in caption" :key="item.name">
				<uni-list-item :title="item.name" showArrow clickable @click="showDetails(item.name, item.content)" />
			</template>
		</uni-list>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { useServeStore } from '@/store/pinia/index.js';
import { profileExplain } from '@/common/fetch.js';
const tipspop = ref<InstanceType<typeof TipsPop> | null>();
interface Caption {}
const caption = reactive({});
function tipsNo(): void {
	tipspop.value.openPop('该功能暂未开通');
}
function call(): void {
	uni.makePhoneCall({
		phoneNumber: '10086'
	});
}
async function getExplain(): void {
	const result = await profileExplain();
	for (const item in result.data) {
		if (/(.+)(Caption)$/.test(item)) {
			const lable: String = item.replace('Caption', '');
			if (caption[lable]) {
				caption[lable].name = result.data[item];
			} else {
				caption[lable] = {
					name: result.data[item]
				};
			}
		} else if (/(.+)(Content)$/.test(item)) {
			const lable: String = item.replace('Content', '');
			if (caption[lable]) {
				caption[lable].content = result.data[item];
			} else {
				caption[lable] = {
					content: result.data[item]
				};
			}
		}
	}
}
const serve = useServeStore();
function showDetails(name: String, content: String): void {
	serve.reset(name, content);
	uni.navigateTo({
		url: '/pages/profile/service/details'
	});
}
onMounted(() => {
	getExplain();
});
</script>

<style lang="scss" scoped>
.container {
	background-color: #fff;
	.head-box {
		padding: 20px 0;
		.tips {
			color: #666;
			font-size: 15px;
			margin-top: 10px;
		}
	}
	.border-line {
		width: 100%;
		height: 1px;
		background-color: #e5e5e5;
	}
	.border {
		width: 1px;
		height: 94px;
		background-color: #e5e5e5;
	}
	.hot-question {
		// line-height: 50px;
		// padding-left: 2px;
		::v-deep .uni-section {
			line-height: 50px;
			padding-left: 2px;
		}
	}
}
</style>
