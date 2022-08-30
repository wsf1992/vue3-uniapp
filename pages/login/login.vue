<template>
	<view>
		<view class="login-box">
			<uni-easyinput :inputBorder="false" placeholder="账号" clearSize="18px" class="input-content border-b font-16" v-model="form.username"></uni-easyinput>
			<uni-easyinput :inputBorder="false" placeholder="密码" class="input-content border-b font-16" type="password" v-model="form.password"></uni-easyinput>
			<view class="uni-flex w-flex-cross-center">
				<uni-easyinput
					type="number"
					:inputBorder="false"
					placeholder="验证码"
					clearSize="18px"
					class="input-content font-16 flex-auto"
					v-model="form.captcha_code"
				></uni-easyinput>
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
		<button type="primary" class="login-btn" @click="login">登录</button>
		<view class="">
			<!-- <navigator url=""></navigator> -->
			<text class="forget-pass">重置密码?</text>
		</view>
		<uni-popup ref="popup" :mask-click="false">
			<view class="pop-box w-flex-column w-flex-cross-center">
				<uni-icons type="info" size="100" color="#f8cb86"></uni-icons>
				<text>{{ popTxt }}</text>
			</view>
			<button type="primary" class="pop-btn" @click="$refs.popup.close()">确定</button>
		</uni-popup>
	</view>
</template>

<script>
import { getCaptcha, login } from '@/common/fetch.js';
export default {
	data() {
		return {
			captcha: '',
			form: {
				username: '',
				password: '',
				captcha_code: ''
			},
			popTxt: ''
		};
	},
	methods: {
		getCaptcha() {
			getCaptcha().then(res => {
				this.captcha = res.data.code;
			});
		},
		login() {
			if (this.form.username === '') {
				this.popTxt = '请输入手机号/邮箱/用户名';
				return this.openPop();
			}
			if (this.form.password === '') {
				this.popTxt = '请输入密码';
				return this.openPop();
			}
			if (this.form.captcha_code === '') {
				this.popTxt = '请输入验证码';
				return this.openPop();
			}
			login(this.form).then(res => {
				if (!res.data.user_id) {
					// 登录不成功
					if (res.data.type === 'ERROR_CAPTCHA') this.getCaptcha();
					this.popTxt = res.data.message;
					return this.openPop();
				} else {
					uni.navigateBack();
				}
			});
		},
		openPop() {
			this.$refs.popup.open('center');
		},
		close() {
			this.$refs.popup.close();
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
	padding: 0 10px;
	width: 65px;
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
.flex-auto {
	flex: 1 1 auto;
}
.pop-box {
	padding: 10px 30px;
	background-color: #fff;
	border-radius: 6px 6px 2px 2px;
}
.pop-btn {
	width: 100%;
	background-color: #4cd964;
}
</style>
