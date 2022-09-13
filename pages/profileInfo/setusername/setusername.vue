<template>
	<view class="box">
		<uni-forms :modelValue="formData" ref="form" :rules="rules" validateTrigger="blur">
			<uni-forms-item name="username">
				<uni-easyinput type="text" v-model="formData.username" placeholder="输入用户名" @input="clear" />
				<text class="tips mar-t-10" v-if="showTips">用户名只能修改一次（5-24字符之间）</text>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" :class="['btn',{'mar-t-26' : !showTips }]" @click="modify">确认修改</button>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script lang="ts" setup>
	import {
		reactive,
		ref
	} from 'vue'
	import {
		changeUserName
	} from '@/common/fetch.js'

	interface FormData {
		user_id: String | Number
		username: String
	}
	const formData: FormData = reactive({
		user_id: uni.getStorageSync('user_id'),
		username: ''
	})
	const rules = {
		username: {
			rules: [{
					required: true,
					errorMessage: '请输入用户名',
				},
				{
					minLength: 5,
					maxLength: 24,
					errorMessage: '用户名长度在5到24位之间',
				}
			]
		}
	}

	const form = ref()
	const showTips = ref(true)
	const tipspop = ref()

	function modify(): void {
		form.value.validate().then(res => {
			showTips.value = true
			changeUserName(formData).then(res => {
				if (!res.data.status) {
					tipspop.value.openPop(res.data.message)
				} else {
					tipspop.value.openPop(res.data.success).then(() => {
						uni.navigateBack()
					})
				}
			})
		}).catch(err => {
			showTips.value = false
		})
	}

	function clear(): void {
		showTips.value = true
	}
</script>

<style scoped lang="scss">
	.box {
		margin: 10px 10px 0;
	}

	.tips {
		display: block;
		color: #666;
		font-size: 12px;
	}

	.btn {
		background-color: #3199e8;
	}

	.mar-t-26 {
		margin-top: 26px;
	}
</style>
