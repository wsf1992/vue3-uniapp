<template>
	<view class="w-flex-row w-flex-cross-center container" @click="jump">
		<image :src="`http://120.48.75.81:8001/img/${user.avatar}`" mode="" class="user"></image>
		<view class="w-flex-auto w-flex-column mar-l-12">
			<text class="user-name">{{ user.username }}</text>
			<view class="w-flex-row w-flex-cross-center">
				<i class="iconfont icon-shouji"></i>
				<text v-if="!user.mobile">暂无绑定手机号</text>
				<text v-else>{{ user.mobile }}</text>
			</view>
		</view>
		<text class="f-s-18">></text>
	</view>
</template>

<script setup lang="ts">
interface Props {
	user: Object;
}
const props = withDefaults(defineProps<Props>(), {
	user: () => {
		user_id: '';
	}
});

function jump(): void {
	if (props.user.user_id) {
		uni.navigateTo({
			url: '/pages/profileInfo/profileInfo'
		});
	} else {
		uni.navigateTo({
			url: '/pages/login/login'
		});
	}
}
</script>

<style scoped lang="scss">
.container {
	/* border-top: 1px solid #fff; */
	padding: 18px 16px;
	background-color: #3190e8;
	color: #fff;
}

.user {
	width: 65px;
	height: 65px;
	border-radius: 50%;
}

.user-name {
	font-size: 20px;
	font-weight: 700;
	margin-bottom: 4px;
}

.icon-shouji {
	vertical-align: middle;
	margin-right: 5px;
}
</style>
