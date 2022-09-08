<template>
	<uni-popup ref="popup" :mask-click="false">
		<view class="pop-box w-flex-column w-flex-cross-center">
			<uni-icons type="info" size="100" color="#f8cb86"></uni-icons>
			<text class="text-center">{{ popText }}</text>
		</view>
		<button type="primary" class="pop-btn" @click="submit">确定</button>
	</uni-popup>
</template>

<script setup>
	import {
		ref,
		defineExpose,
		onMounted
	} from 'vue';

	const callback = ref(null);
	const popup = ref();
	const popText = ref();

	function openPop(tips) {
		popText.value = tips;
		popup.value.open('center');
		return new Promise((resolve, reject) => {
			callback.value = () => {
				resolve();
				popup.value.close();
			};
		});
	}

	function submit() {
		callback.value();
	}
	defineExpose({
		callback,
		openPop
	});
</script>

<style scoped lang="scss">
	.pop-box {
		width: 190px;
		padding: 10px 30px;
		background-color: #fff;
		border-radius: 6px 6px 0px 0px;
	}

	.pop-btn {
		width: 100%;
		background-color: #4cd964;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}
</style>
