<template>
	<view>
		<user :user="userForm"></user>
		<text class="c-000">123123123</text>
	</view>
</template>

<script setup>
import user from './components/user.vue';
import { getUserInfo } from '@/common/fetch.js';
import { reactive } from 'vue';

import { onShow } from '@dcloudio/uni-app';

let userForm = reactive({
	user_id: '',
	username: '',
	mobile: ''
});

function getUser() {
	const local_user_id = uni.getStorageSync('user_id');
	getUserInfo(local_user_id).then(res => {
		console.log(111, res);
		if (res.data.user_id) {
			userForm.user_id = res.data.user_id;
			userForm.username = res.data.username;
			userForm.mobile = res.data.mobile;
		} else {
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
