<template>
	<view class="record">
		<image src="../../../../static/norecord.png" mode="" class="img"></image>
		<view class="c-999 text-center"><text>没有购买记录</text></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.record {
	padding-top: 122px;
	.img {
		display: block;
		width: 195px;
		height: 121px;
		margin: 0 auto 20px;
	}
}
</style>
