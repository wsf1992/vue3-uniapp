<template>
	<view>
		<view class="time-container bg-fff">
			<text class="time-tips c-666">支付剩余时间</text>
			<uni-countdown class="w-flex-jusify-center" :font-size="36" :show-day="false" :minute="15" :second="0" @timeup="timeup" />
		</view>
		<uni-section title="选择支付方式" class="bg-f5f5f5 block"></uni-section>
		<radio-group>
			<uni-list>
				<label>
					<uni-list-item title="">
						<template v-slot:header>
							<image class="pay-pic" src="../../../../static/zhifubao.png" mode=""></image>
						</template>
						<template v-slot:body>
							<text class="w-flex-auto w-align-self-c mar-l-10">支付宝</text>
						</template>
						<template v-slot:footer>
							<radio class="w-align-self-c" :value="1" :checked="true" />
						</template>
					</uni-list-item>
				</label>
				<label>
					<uni-list-item title="">
						<template v-slot:header>
							<image class="pay-pic" src="../../../../static/weixin.jpeg" mode=""></image>
						</template>
						<template v-slot:body>
							<text class="w-flex-auto w-align-self-c mar-l-10">微信</text>
						</template>
						<template v-slot:footer>
							<radio class="w-align-self-c" :value="2" :checked="true" />
						</template>
					</uni-list-item>
				</label>
			</uni-list>
		</radio-group>
		<button type="primary" class="pay-btn" @click="pay">确认支付</button>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const tipspop = ref<InstanceType<typeof TipsPop> | null>();
function timeup(): void {
	tipspop.value.openPop('支付超时');
}
function pay(): void {
	tipspop.value.openPop('当前环境无法支付');
}
</script>

<style lang="scss" scoped>
.time-container {
	height: 150px;
	text-align: center;
	.time-tips {
		display: block;
		padding: 35px 0 7px;
	}
}
.pay-pic {
	width: 49px;
	height: 49px;
	border-radius: 25%;
}
.pay-btn {
	background-color: #4cd964;
	line-height: 43px;
	margin: 13px 13px 0;
}
.bg-f5f5f5 {
	::v-deep .uni-section {
		background-color: #f5f5f5;
	}
}
.w-flex-jusify-center {
	::v-deep .uni-countdown {
		justify-content: center;
	}
}
</style>
