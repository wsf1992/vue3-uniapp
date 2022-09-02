<template>
	<view>
		<view class="login-box">
			<uni-easyinput :inputBorder="false" placeholder="账号" clearSize="18px" class="input-content border-b font-16" v-model="form.username"></uni-easyinput>
			<uni-easyinput :inputBorder="false" placeholder="旧密码" class="input-content border-b font-16" type="password" v-model="form.oldpassWord"></uni-easyinput>
			<uni-easyinput :inputBorder="false" placeholder="请输入新密码" class="input-content border-b font-16" type="password" v-model="form.newpassword"></uni-easyinput>
			<uni-easyinput :inputBorder="false" placeholder="请确认密码" class="input-content border-b font-16" type="password" v-model="form.confirmpassword"></uni-easyinput>
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

		<button type="primary" class="login-btn" @click="login">确认修改</button>
		<!-- 		<uni-popup ref="popup" :mask-click="false">
			<view class="pop-box w-flex-column w-flex-cross-center">
				<uni-icons type="info" size="100" color="#f8cb86"></uni-icons>
				<text>{{ popTxt }}</text>
			</view>
			<button type="primary" class="pop-btn" @click="$refs.popup.close()">确定</button>
		</uni-popup> -->
	</view>
</template>

<script>
import { getCaptcha, changePassword } from '@/common/fetch.js';
export default {
	data() {
		return {
			captcha: '',
			form: {
				username: '',
				oldpassWord: '',
				newpassword: '',
				confirmpassword: '',
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
				this.popTxt = '请输入正确的账号';
				return this.$tipPop('123');
				return this.openPop();
			} else if (this.form.oldpassWord === '') {
				this.popTxt = '请输入旧密码';
				return this.openPop();
			} else if (this.form.newpassword === '') {
				this.popTxt = '请输入新密码';
				return this.openPop();
			} else if (this.form.confirmpassword === '') {
				this.popTxt = '请输确认密码';
				return this.openPop();
			} else if (this.form.newpassword !== this.form.confirmpassword) {
				this.popTxt = '两次输入的密码不一致';
				return this.openPop();
			} else if (this.form.captcha_code === '') {
				this.popTxt = '请输验证码';
				return this.openPop();
			}
			changePassword(this.form).then(res => {
				console.log(123456, res);
				if (res.data.message) {
					// 登录不成功
					if (res.data.type === 'ERROR_CAPTCHA') this.getCaptcha();
					this.popTxt = res.data.message;
					return this.openPop();
				} else {
					this.popTxt = res.data.success;
					return this.openPop();
					uni.navigateBack();
				}
			});
		},
		openPop() {
			this.$refs.popup.open('center');
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
	margin: 20px 10px;
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
</style>
