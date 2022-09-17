<template>
	<view>
		<image class="logo_img" src="../../../static/eleme.jpg" mode=""></image>
		<text class="down_tips">下载饿了么APP</text>
		<button type="primary" class="btn" @click="download">下载</button>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const tipspop = ref<InstanceType<typeof TipsPop> | null>();
const tips = ref<String>();
function download(): void {
	tipspop.value.openPop(tips.value);
}
onMounted(() => {
	const info = uni.getSystemInfoSync();
	if (info.osName === 'ios') {
		tips.value = '请前往AppStore下载';
	} else {
		tips.value = '请前往应用商店下载';
	}
});
</script>

<style lang="scss" scoped>
.logo_img {
	display: block;
	width: 180px;
	height: 180px;
	border-radius: 25px;
	margin: 25px auto 0;
}
.down_tips {
	display: block;
	font-size: 20px;
	color: #666;
	margin: 5px 0 25px;
	text-align: center;
}
.btn {
	background-color: #4cd964;
	margin: 0 17px 0;
	box-sizing: border-box;
	line-height: 43px;
}
</style>
