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
				<view class="change-cap" @click="getCapt">
					<text>看不清</text>
					<br />
					<text class="color-3b95e9">换一张</text>
				</view>
			</view>
		</view>
		<button type="primary" class="login-btn" @click="login">确认修改</button>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script setup>
import { changePassword } from '@/common/fetch.js';
import { useCaptcha } from '@/common/composables/useCaptcha';
const { captcha, getCapt } = useCaptcha();
import { ref, reactive, onMounted } from 'vue';

const tipspop = ref();
const form = reactive({
	username: '',
	oldpassWord: '',
	newpassword: '',
	confirmpassword: '',
	captcha_code: ''
});

function login() {
	let popTxt = '';
	if (form.username === '') {
		popTxt = '请输入正确的账号';
	} else if (form.oldpassWord === '') {
		popTxt = '请输入旧密码';
	} else if (form.newpassword === '') {
		popTxt = '请输入新密码';
	} else if (form.confirmpassword === '') {
		popTxt = '请输确认密码';
	} else if (form.newpassword !== form.confirmpassword) {
		popTxt = '两次输入的密码不一致';
	} else if (form.captcha_code === '') {
		popTxt = '请输验证码';
	}
	if (popTxt) return tipspop.value.openPop(popTxt);
	changePassword(form).then(res => {
		if (res.data.message) {
			// 登录不成功
			if (res.data.type === 'ERROR_CAPTCHA') getCapt();
			return tipspop.value.openPop(res.data.message);
		} else {
			tipspop.value.openPop(res.data.success).then(() => {
				uni.navigateBack();
			});
		}
	});
}
</script>

<style scoped lang="scss">
.input-content {
	::v-deep .uni-easyinput__content {
		height: 55px;
	}
}

.border-b {
	display: block;
	border-bottom: 1px solid #f1f1f1;
}

.login-box {
	margin-top: 15px;
	background-color: $color-fff;
}

.captcha {
	width: 90px;
	height: 40px;
}

.change-cap {
	padding: 0 $px-10;
	width: 60px;
	text-align: end;
}

.color-3b95e9 {
	color: #3b95e9;
}

.font-16 {
	::v-deep .uni-input-placeholder,
	::v-deep .uni-input-input {
		font-size: 16px;
	}
}

.login-tips {
	display: block;
	font-size: 12px;
	color: red;
	padding: 8px 15px;
}

.login-btn {
	margin: $px-20 $px-10;
	background-color: #4cd964;
}

.forget-pass {
	display: block;
	margin-top: $px-20;
	margin-right: $px-10;
	color: #3b95e9;
	text-align: right;
}

.flex-auto {
	flex: 1 1 auto;
}
</style>
