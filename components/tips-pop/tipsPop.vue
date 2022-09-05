<template>
	<uni-popup ref="popup" :mask-click="false">
		<view class="pop-box w-flex-column w-flex-cross-center">
			<uni-icons type="info" size="100" color="#f8cb86"></uni-icons>
			<text>{{ popTxt }}</text>
		</view>
		<button type="primary" class="pop-btn" @click="submit">确定</button>
	</uni-popup>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const callback = ref(null);

defineProps({
	popTxt: String
});

function openPop() {
	this.$refs.popup.open('center');
}
function submit() {
	this.callback();
}
</script>

<style scoped>
.pop-box {
	padding: 10px 30px;
	background-color: #fff;
	border-radius: 6px 6px 2px 2px;
}
.pop-btn {
	width: 100%;
	background-color: #4cd964;
}
</style>
