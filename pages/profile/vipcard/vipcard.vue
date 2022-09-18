<template>
	<view>
		<text class="title c-666">
			为账户
			<text class="f-w-700">{{ user.username }}</text>
			购买会员
		</text>
		<navigator url="/pages/profile/vipcard/vipDescription/vipDescription" hover-class="none">
			<uni-section title="会员特权">
				<template v-slot:right>
					<text class="c-999">会员说明 ></text>
				</template>
			</uni-section>
		</navigator>
		<uni-list class="m-b-15 block">
			<uni-list-item
				title="减免配送费"
				note="每月减免30单,每日可减免30单,每单最高减4元
				蜂鸟专送专享"
			>
				<template v-slot:header>
					<image src="../../../static/sheng.jpg" mode="" class="left-icon"></image>
				</template>
			</uni-list-item>
			<uni-list-item title="身份标识" note="饿了么会员服务有效期内,享有专属皇冠标识">
				<template v-slot:header>
					<image src="../../../static/huanguang.jpg" mode="" class="left-icon"></image>
				</template>
			</uni-list-item>
		</uni-list>
		<uni-section title="开通会员"></uni-section>
		<uni-list class="m-b-15 block">
			<uni-list-item>
				<template v-slot:header>
					<text class="money">
						一个月
						<text class="color-red">￥20</text>
					</text>
				</template>
				<template v-slot:footer>
					<button type="warn" plain size="mini" @click="nextPage('/pages/profile/vipcard/payment/payment')">购买</button>
				</template>
			</uni-list-item>
		</uni-list>
		<uni-list class="m-b-15 block">
			<uni-list-item title="兑换会员" clickable @click="nextPage('/pages/profile/vipcard/vipexchange/vipexchange')">
				<template v-slot:footer>
					<text class="c-999 f-s-14">使用卡号卡密 ></text>
				</template>
			</uni-list-item>
		</uni-list>
		<uni-list>
			<uni-list-item title="购买记录" clickable @click="nextPage('/pages/profile/vipcard/viprecord/viprecord')">
				<template v-slot:footer>
					<text class="c-999 f-s-14">开发票 ></text>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useUserStore } from '@/store/pinia/index.js';

const user = useUserStore();

function nextPage(url: String): void {
	uni.navigateTo({
		url: url
	});
}
</script>

<style scoped lang="scss">
.title {
	line-height: 50px;
	margin-left: 17px;
}
.left-icon {
	width: 39px;
	height: 43px;
	margin-right: 15px;
}
.m-b-15 {
	margin-bottom: 15px;
}
.money {
	line-height: 31px;
	.color-red {
		color: red;
		font-weight: 700;
	}
}
.jg {
	width: 100%;
	height: 15px;
	background-color: #f5f5f5;
}
</style>
