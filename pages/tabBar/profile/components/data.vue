<template>
	<view class="w-flex-row c-666 text-center bg-fff">
		<view class="w-flex-auto">
			<navigator url="/pages/profile/balance/balance">
				<view class="pad-t-20 pad-b-10">
					<text class="f-s-30 f-w-700 c-f90">0.00</text>
					<text>元</text>
				</view>
				<view class="pad-b-10"><text>我的余额</text></view>
			</navigator>
		</view>
		<view class="w-flex-auto border-l-r">
			<navigator url="/pages/profile/benefit/benefit">
				<view class="pad-t-20 pad-b-10">
					<text class="f-s-30 f-w-700 c-ff5f3e">3</text>
					<text>个</text>
				</view>
				<view class="pad-b-10"><text>我的优惠</text></view>
			</navigator>
		</view>
		<view class="w-flex-auto">
			<navigator url="/pages/profile/points/points">
				<view class="pad-t-20 pad-b-10">
					<text class="f-s-30 f-w-700 c-6ac20b">0</text>
					<text>分</text>
				</view>
				<view class="pad-b-10"><text>我的积分</text></view>
			</navigator>
		</view>
	</view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.c-f90 {
	color: #f90;
}

.c-ff5f3e {
	color: #ff5f3e;
}

.c-6ac20b {
	color: #6ac20b;
}

.border-l-r {
	border-right: 1px solid #f1f1f1;
	border-left: 1px solid #f1f1f1;
}
</style>
