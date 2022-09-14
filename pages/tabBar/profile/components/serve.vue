<template>
	<view class="mar-t-10">
		<uni-list>
			<uni-list-item title="我的订单" showArrow class="list-item" link="switchTab" to="/pages/tabBar/order/order">
				<template v-slot:header>
					<image src="../../../../static/phone.png" class="mar-r-10 phone"></image>
				</template>
			</uni-list-item>
			<uni-list-item title="积分商城" showArrow class="list-item" link to="/pages/tabBar/order/order">
				<template v-slot:header>
					<image src="../../../../static/phone.png" class="mar-r-10 phone"></image>
				</template>
			</uni-list-item>
			<uni-list-item title="饿了么会员卡" showArrow class="list-item" link to="/pages/profile/vipcard/vipcard">
				<template v-slot:header>
					<image src="../../../../static/phone.png" class="mar-r-10 phone"></image>
				</template>
			</uni-list-item>
		</uni-list>
		<view class="mar-t-10">
			<uni-list>
				<uni-list-item title="服务中心" showArrow class="list-item" link to="/pages/profile/service/service">
					<template v-slot:header>
						<image src="../../../../static/phone.png" class="mar-r-10 phone"></image>
					</template>
				</uni-list-item>
				<uni-list-item title="下载饿了么APP" showArrow class="list-item" link to="/pages/profile/download/download">
					<template v-slot:header>
						<image src="../../../../static/phone.png" class="mar-r-10 phone"></image>
					</template>
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.phone {
	width: $px-20;
	height: 22px;
	vertical-align: middle;
}

.list-item {
	::v-deep .uni-list-item__container {
		padding: 7px 0px 7px 15px;
		line-height: 34px;
		align-items: center;
	}
}
</style>
