<template>
	<view class="bg-fff container">
		<uni-title class="title" type="h3" title="Q1: 什么是商家代金券？"></uni-title>
		<text class="content">商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</text>
		<uni-title class="title" type="h3" title="Q2: 怎么获得商家代金券？"></uni-title>
		<text class="content">进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</text>
		<text class="content">「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</text>
		<uni-title class="title" type="h3" title="Q3: 商家代金券使用条件"></uni-title>
		<text class="content">商家代金券仅限在指定商家使用</text>
		<text class="content">商家代金券仅限在线支付使用</text>
		<text class="content">每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</text>
	</view>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
	padding: 0 12px 12px;
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
