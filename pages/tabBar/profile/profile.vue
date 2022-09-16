<template>
	<view>
		<user :user="userForm"></user>
		<user-data></user-data>
		<serve></serve>
	</view>
</template>

<script setup>
import user from './components/user.vue';
import UserData from './components/data.vue';
import serve from './components/serve.vue';
import { getUserInfo } from '@/common/fetch.js';
import { reactive } from 'vue';

import { onShow } from '@dcloudio/uni-app';

let userForm = reactive({
	user_id: '',
	username: '',
	mobile: '',
	avatar: ''
});

function getUser() {
	const local_user_id = uni.getStorageSync('user_id');
	getUserInfo(local_user_id).then(res => {
		if (res.data.user_id) {
			userForm.avatar = res.data.avatar;
			userForm.user_id = res.data.user_id;
			userForm.username = res.data.username;
			userForm.mobile = res.data.mobile;
		} else {
			userForm.avatar = 'default.jpg';
			userForm.user_id = '';
			userForm.username = '登录/注册';
			userForm.mobile = '';
		}
	});
}
onShow(() => {
	getUser();
});
</script>

<style lang="scss"></style>
