<template>
	<view>
		<uni-section class="title" title="用户信息" titleFontSize="12px" titleColor="#666">
			<uni-list>
				<uni-list-item showArrow title="头像" class="l-h-52" clickable @click="setPicture">
					<template v-slot:footer>
						<image :src="`http://120.48.75.81:8001/img/${userForm.avatar}`" class="user"></image>
					</template>
				</uni-list-item>
				<uni-list-item showArrow title="用户名" :rightText="userForm.username" class="list-item" link
					to="/pages/setusername/setusername" />
				<uni-list-item showArrow title="收货地址" class="list-item" link to="/pages/address/address" />
			</uni-list>
		</uni-section>
		<uni-section class="title" title="账号绑定" titleFontSize="12px" titleColor="#666">
			<uni-list>
				<uni-list-item showArrow title="手机" thumb="../../static/phone.png" thumb-size="sm" class="list-item"
					clickable @click="setPhone">
					<template v-slot:header>
						<image src="../../static/phone.png" class="mar-r-10 phone"></image>
					</template>
				</uni-list-item>
			</uni-list>
		</uni-section>
		<uni-section class="title" title="安全设置" titleFontSize="12px" titleColor="#666">
			<uni-list>
				<uni-list-item showArrow title="登录密码" rightText="修改" class="list-item" link to="/pages/forget/forget" />
			</uni-list>
		</uni-section>
		<button class="logout" type="warn" @click="logout">退出登录</button>
		<tips-pop ref="tipspop"></tips-pop>
		<dialog-pop ref="dialog"></dialog-pop>
	</view>
</template>

<script setup>
	import {
		getUserInfo,
		signout,
		avatar
	} from '@/common/fetch.js';
	import {
		ref,
		reactive,
		onMounted
	} from 'vue';
	let userForm = reactive({
		username: '',
		mobile: '',
		avatar: '../../static/user.jpg'
	});
	const tipspop = ref();
	const dialog = ref();

	function getUser() {
		const local_user_id = uni.getStorageSync('user_id');
		getUserInfo(local_user_id).then(res => {
			console.log(111, res);
			userForm.username = res.data.username;
			userForm.mobile = res.data.mobile;
			userForm.avatar = res.data.avatar;
		});
	}

	function logout() {
		dialog.value
			.openPop({
				popText: '是否退出登录',
				canlText: '再等等',
				saveText: '退出登录'
			})
			.then(() => {
				signout().then(res => {
					if (res.data.status === 1) uni.navigateBack();
				});
			});
	}

	function setPhone() {
		tipspop.value.openPop('请在手机APP中设置');
	}

	function setPicture() {
		uni.chooseImage({
			conut: 1,
			success: async chooseImageRes => {
				const tempFilePaths = chooseImageRes.tempFilePaths[0];
				try {
					let res = await avatar(tempFilePaths);
					const data = JSON.parse(res.data);
					if (data.status === 1) {
						userForm.avatar = data.image_path;
					}
				} catch (e) {
					tipspop.value.openPop('上传失败');
				}
			}
		});
	}
	onMounted(() => {
		getUser();
	});
</script>

<style scoped lang="scss">
	.user {
		width: 52px;
		height: 52px;
		border-radius: 50%;
	}

	.title {
		background-color: #f5f5f5;

		::v-deep .uni-section {
			background-color: #f5f5f5;
		}
	}

	.logout {
		margin: 33px 10px 0;
		line-height: 40px;
	}

	.phone {
		width: $px-20;
		height: 22px;
		vertical-align: middle;
	}

	.l-h-52 {
		line-height: 52px;
	}

	.list-item {
		::v-deep .uni-list-item__container {
			padding: 7px 0px 7px 15px;
			line-height: 34px;
			align-items: center;
		}
	}
</style>
