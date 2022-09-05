<template>
	<uni-popup ref="popup" :mask-click="false">
			<view class="pop-box w-flex-column w-flex-cross-center">
				<uni-icons type="info" size="100" color="#f8cb86"></uni-icons>
				<text class="text-center">{{ popTxt }}</text>
			</view>
			<button type="primary" class="pop-btn" @click="submit">确定</button>
	</uni-popup>
</template>

<script setup>
import {ref, defineExpose, onMounted } from 'vue';

const callback = ref(null);
const popup = ref()

defineProps({
	popTxt: String
});

function openPop() {
	popup.value.open('center');
}
function submit() {
	callback.value();
}
defineExpose({
	callback,
	openPop
})
</script>

<style scoped>
.pop-box {
	width: 130px;
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
