<template>
	<view class="bg-fff container">
		<uni-title class="title" type="h3" title="Q1: 怎么获得积分？"></uni-title>
		<text class="content">在线支付的订单将获得订单积分奖励：</text>
		<text class="content">积分将在用户完成评价后获得。</text>
		<text class="content">可获得积分=订单金额×10（即1元=10点积分）。</text>
		<text class="content">订单金额指实际付款金额，不包含活动优惠金额。</text>
		<text class="content">每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</text>
		<uni-title class="title" type="h3" title="Q2: 积分用来做什么？"></uni-title>
		<text class="content">可以在积分商城兑换各种礼品。</text>
		<uni-title class="title" type="h3" title="Q3: 礼品兑换很多天了还没有收到，该怎么办？"></uni-title>
		<text class="content">礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</text>
		<uni-title class="title" type="h3" title="Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？"></uni-title>
		<text class="content">不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</text>
	</view>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
	padding: 0 12px;
	height: 100vh;
	.title {
		font-weight: 400 !important;
		line-height: 32px;
		color: #333;
	}
	.content {
		color: #666;
		display: block;
	}
}
</style>
