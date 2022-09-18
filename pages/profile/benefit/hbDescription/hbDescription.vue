<template>
	<view class="bg-fff container">
		<uni-title class="title" type="h3" title="Q1: 怎么获得红包？"></uni-title>
		<text class="content">通过邀请好友获得</text>
		<text class="content">在下单返红包的商家下单获得</text>
		<text class="content">抢微信朋友分享的红包获得</text>
		<uni-title class="title" type="h3" title="Q2: 红包可以做什么？"></uni-title>
		<text class="content">可以抵扣在线支付时的实际支付金额。</text>
		<uni-title class="title" type="h3" title="Q3: 红包的门槛金额按照什么金额计算？？"></uni-title>
		<text class="content">
			红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。
		</text>
		<uni-title class="title" type="h3" title="Q4: 一个红包能拆开多次使用吗？"></uni-title>
		<text class="content">不能，一个红包只能一次性使用，不能分开使用。</text>
		<uni-title class="title" type="h3" title="Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？"></uni-title>
		<text class="content">会的，订单无效后红包会自动返还到您的账户里。</text>
		<uni-title class="title" type="h3" title="Q6: 红包兑换码怎样兑换成红包，怎样查看红包？"></uni-title>
		<text class="content">在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</text>
		<uni-title class="title" type="h3" title="Q7: 邀请好友了，为什么没获得红包？？"></uni-title>
		<text class="content">
			先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。
		</text>
		<uni-title class="title" type="h3" title="Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？"></uni-title>
		<text class="content">预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</text>
		<text class="content">预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</text>
		<uni-title class="title" type="h3" title="Q9: 互斥红包怎么使用？"></uni-title>
		<text class="content">互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</text>
		<uni-title class="title" type="h3" title="Q10: 返红包活动， 红包领取规则是什么?"></uni-title>
		<text class="content">同一个手机号一天限领取三个。</text>
		<text class="content">同一注册用户一天限领取三个。</text>
		<text class="content">注册用户红包直接发送至用户账户里。</text>
		<text class="content">非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</text>
		<text class="content">红包的使用周期为1周，自红包发放的第2天开始计算。</text>
		<text class="content">同一个手机号一天最多使用两个红包。</text>
		<text class="content">未收到红包短信的用户注意查看手机里的拦截短信。</text>
		<text class="content">有任何问题请拨打客服电话：10105757。。</text>
	</view>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
	padding: 0 12px 12px;
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
