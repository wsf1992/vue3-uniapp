<template>
	<view class="container">
		<view class="bg-fff m-b-18"><uni-easyinput v-model="exchange_code" class="input" :inputBorder="false" placeholder="请输入兑换码"></uni-easyinput></view>
		<view class="w-flex-row">
			<uni-easyinput v-model="captcha_code" class="input bg-fff w-flex-auto" :inputBorder="false" placeholder="验证码" type="number"></uni-easyinput>
			<view class="w-flex-row w-flex-cross-center bg-fff mar-l-10 cap-box">
				<image :src="captcha" mode="scaleToFill" class="captcha"></image>
				<view @click="getCapt">
					<text>看不清</text>
					<br />
					<text class="color-3b95e9">换一张</text>
				</view>
			</view>
		</view>
		<button type="primary" :disabled="!active" :class="['btn', { active: active }]" @click="save">兑换</button>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { getCaptcha, exchangeHongbao } from '@/common/fetch.js';
import { useUserStore } from '@/store/pinia/index.js';
const exchange_code = ref('');
const captcha_code = ref('');
const user = useUserStore();
const tipspop = ref();
const active = computed(() => exchange_code.value.length && captcha_code.value.length === 4);

const captcha = ref();
function getCapt(): void {
	getCaptcha().then(res => {
		captcha.value = res.data.code;
	});
}

function save(): void {
	exchangeHongbao({ exchange_code: exchange_code.value, captcha_code: captcha_code.value, user_id: user.user_id }).then(res => {
		tipspop.value.openPop(res.data.message);
	});
}
onMounted(() => {
	getCapt();
});
</script>

<style lang="scss" scoped>
.container {
	padding: 18px 13px 0;
	.input {
		::v-deep .uni-easyinput__content {
			line-height: 54px;
			height: 54px;
			font-size: 25px;
		}

		::v-deep .uni-input-placeholder {
			font-size: 20px;
		}
	}

	.captcha {
		width: 88px;
		height: 38px;
	}

	.cap-box {
		padding: 0 10px;
	}

	.btn {
		margin-top: 18px;
		background-color: #ccc;
		color: #fff !important;
		&::after {
			border: none;
		}

		&.active {
			background-color: #4cd964;
		}
	}
}

.m-b-18 {
	margin-bottom: 18px;
}
.color-3b95e9 {
	color: #3b95e9;
}
</style>
