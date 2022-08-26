<template>
	<view>
		<view class="login-box">
			<uni-easyinput :inputBorder="false" placeholder="账号" class="input-content border-b font-16" styles="{}"></uni-easyinput>
			<uni-easyinput :inputBorder="false" placeholder="密码" class="input-content border-b font-16" type="password"></uni-easyinput>
			<view class="uni-flex w-flex-cross-center">
				<uni-easyinput :inputBorder="false" placeholder="验证码" class="input-content font-16"></uni-easyinput>
				<image :src="captcha" mode="scaleToFill" class="captcha"></image>
				<view class="change-cap" @click="getCaptcha">
					<text>看不清</text>
					<br />
					<text class="color-3b95e9">换一张</text>
				</view>
			</view>
		</view>
		<view><text class="login-tips">温馨提示：未注册过的账号，登录时将自动注册</text></view>
		<view><text class="login-tips">注册过的用户可凭账号密码登录</text></view>
		<button type="primary" class="login-btn">登录</button>
		<view class="">
			<!-- <navigator url=""></navigator> -->
			<text class="forget-pass">重置密码?</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			captcha: ''
		};
	},
	methods: {
		getCaptcha() {
			uni.request({
				url: 'http://120.48.75.81:8001/v1/captchas',
				method: 'POST',
				data: {
					type: 'group'
				},
				success: res => {
					console.log(123, res);
					this.captcha = res.data.code;
				}
			});
		}
	},
	created() {
		this.getCaptcha();
	}
};
</script>

<style scoped>
.input-content >>> .uni-easyinput__content {
	height: 55px;
}
.border-b {
	border-bottom: 1px solid #f1f1f1;
}
.login-box {
	margin-top: 15px;
	background-color: #fff;
}
.captcha {
	width: 90px;
	height: 40px;
}
.change-cap {
	margin: 0 10px;
}
.color-3b95e9 {
	color: #3b95e9;
}

.font-16 >>> .uni-input-placeholder,
.font-16 >>> .uni-input-input {
	font-size: 16px;
}

.login-tips {
	display: block;
	font-size: 12px;
	color: red;
	padding: 8px 15px;
}
.login-btn {
	margin: 0 10px;
	background-color: #4cd964;
}
.forget-pass {
	display: block;
	margin-top: 20px;
	margin-right: 10px;
	color: #3b95e9;
	text-align: right;
}
</style>
