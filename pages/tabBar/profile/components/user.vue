<template>
	<view class="w-flex-row w-flex-cross-center container" @click="jump">
		<image src="../../../../static/user.jpg" mode="" class="user"></image>
		<view class="w-flex-auto w-flex-column mar-l-12">
			<text class="user-name">123</text>
			<view>
				<i class="iconfont icon-shouji"></i>
				<text>暂无绑定手机号</text>
			</view>
		</view>
		<text class="f-s-18">></text>
	</view>
</template>

<script setup>
function jump() {
	uni.navigateTo({
		url: '/pages/profileInfo/profileInfo'
	});
}
</script>

<style scoped>
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
}
.icon-shouji {
	vertical-align: middle;
}
</style>
