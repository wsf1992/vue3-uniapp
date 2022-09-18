<template>
	<view>
		<text class="title c-666">
			成功兑换后将关联到当前账号：
			<text class="f-w-700">{{ user.username }}</text>
		</text>
		<view class="bg-fff">
			<uni-easyinput class="input" focus v-model="number" placeholderStyle="color: #999;font-size: 15px;" placeholder="请输入10位卡号" :inputBorder="false"></uni-easyinput>
			<view class="fgx"></view>
			<uni-easyinput class="input" v-model="password" placeholderStyle="color: #999;font-size: 15px;" placeholder="请输入6位卡密" :inputBorder="false"></uni-easyinput>
		</view>
		<button type="primary" class="btn" :disabled="!btnDisables" @click="bind">兑换</button>
		<uni-title align="center" type="h4" title="——温馨提示——" color="#aaa"></uni-title>
		<view class="w-flex-column mar-l-50 c-aaa f-s-13 mar-t-10">
			<text>新兑换的会员服务，权益以「会员说明」为准。</text>
			<text>月卡：30次免费配送。</text>
			<text>季卡：90次免费配送。</text>
			<text>年卡：360次免费配送。</text>
			<text>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</text>
		</view>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/pinia/index.js';
import { ref, computed } from 'vue';
import { bindVipCard } from '@/common/fetch.js';
const number = ref<String>('');
const password = ref<String>('');
const tipspop = ref<InstanceType<typeof TipsPop> | null>();
const user = useUserStore();
const btnDisables = computed(() => /^\d{10}$/.test(number.value) && /^\d{6}$/.test(password.value));

async function bind(): void {
	const result = await bindVipCard({
		user_id: user.user_id,
		number: number.value,
		password: password.value
	});
	console.log(111, result);
	if (!result.data.status) tipspop.value.openPop(result.data.message);
}
</script>

<style scoped lang="scss">
.title {
	line-height: 50px;
	margin-left: 17px;
}
.fgx {
	width: 100%;
	height: 1px;
	background-color: #f5f5f5;
}
.input {
	::v-deep .uni-easyinput__content {
		line-height: 48px;
		height: 48px;
	}
}
.btn {
	margin: 17px;
	line-height: 43px;
	background-color: #4cd964;
	&[disabled] {
		background-color: #ccc;
	}
	&::after {
		border: none;
	}
}
</style>
