<template>
	<view>
		<uni-section class="title" title="用户信息" titleFontSize="12px" titleColor="#666">
			<uni-list>
				<uni-list-item showArrow title="头像" class="l-h-52">
					<template v-slot:footer>
						<image src="../../static/user.jpg" class="user"></image>
					</template>
				</uni-list-item>
				<uni-list-item showArrow title="用户名" rightText="右侧文字" />
				<uni-list-item showArrow title="收货地址" />
			</uni-list>
		</uni-section>
		<uni-section class="title" title="账号绑定" titleFontSize="12px" titleColor="#666">
			<uni-list>
				<uni-list-item showArrow title="手机" thumb="../../static/phone.png" thumb-size="sm">
					<template v-slot:header>
						<image src="../../static/phone.png" class="mar-r-10 phone"></image>
					</template>
				</uni-list-item>
			</uni-list>
		</uni-section>
		<uni-section class="title" title="安全设置" titleFontSize="12px" titleColor="#666">
			<uni-list><uni-list-item showArrow title="登录密码" rightText="修改" /></uni-list>
		</uni-section>
		<button class="logout" type="warn">退出登录</button>
	</view>
</template>

<script setup></script>

<style scoped>
.user {
	width: 52px;
	height: 52px;
	border-radius: 50%;
}
.title {
	background-color: #f5f5f5;
}
.logout {
	margin: 33px 10px 0;
	line-height: 40px;
}
.phone {
	width: 20px;
	height: 22px;
}
.l-h-52 {
	line-height: 52px;
}
</style>
