<template>
	<view>
		<text>为账户{{ user.username }}购买会员</text>
		<uni-section class="mb-10" title="会员特权">
			<template v-slot:right>
				<text class="c-999">会员说明 ></text>
			</template>
		</uni-section>
		<uni-list>
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
	</view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useUserStore } from '@/store/pinia/index.js';

const user = useUserStore();
</script>

<style scoped lang="scss">
.left-icon {
	width: 39px;
	height: 43px;
	margin-right: 15px;
}
</style>
