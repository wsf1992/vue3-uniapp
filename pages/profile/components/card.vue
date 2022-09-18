<template>
	<view class="container">
		<view class="content bg-fff">
			<view class="w-flex-row w-flex-jusify-between">
				<text class="c-666">{{ leftTips }}</text>
				<view class="w-flex-row w-flex-cross-center" @click="rightClick">
					<uni-icons type="help-filled" size="16" color="#3190e8"></uni-icons>
					<text class="c-3190e8">{{ rightTips }}</text>
				</view>
			</view>
			<view>
				<text class="main-number"><slot>0.00</slot></text>
				<text>&nbsp;{{ unit }}</text>
			</view>
			<button type="primary" class="btn" @click="$emit('btnClick')">{{ btnTips }}</button>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
	leftTips: {
		type: String,
		default: '当前余额'
	},
	rightTips: {
		type: String,
		default: '余额说明'
	},
	unit: {
		type: String,
		default: '元'
	},
	btnTips: {
		type: String,
		default: '提现'
	},
	btnColor: {
		type: String,
		default: '#ccc'
	}
});
const emit = defineEmits(['rightClick', 'btnClick']);
function rightClick(): void {
	emit('rightClick');
}
</script>

<style lang="scss" scoped>
.container {
	background-color: #3190e8;
	padding: 7px;
	.content {
		padding: 9px;
		border-radius: 4px;

		.main-number {
			font-size: 43px;
		}
	}
	.btn {
		margin-top: 25px;
		background-color: v-bind('btnColor');
		&::after {
			border: none;
		}
	}
}
</style>
