<template>
	<view class="bg-fff container">
		<uni-title class="title" type="h3" title="Q1: 使用余额的条件"></uni-title>
		<text class="content">为了保护账户安全，使用余额前必须先绑定手机号。</text>
		<uni-title class="title" type="h3" title="Q2: 余额可以怎么用？"></uni-title>
		<text class="content">余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</text>
		<uni-title class="title" type="h3" title="Q3:我要如何提现？"></uni-title>
		<text class="content">
			为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。
		</text>
		<uni-title class="title" type="h3" title="Q4:为什么会提现失败？"></uni-title>
		<text class="content">可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</text>
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
	}
}
</style>
