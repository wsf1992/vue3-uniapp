<template>
	<view>
		<uni-forms ref="form" :model="formData" :rules="rules" class="bg-fff mar-t-10 add-form">
			<uni-forms-item name="name"><uni-easyinput type="text" class="input" :styles="style" v-model="formData.name" placeholder="请填写你的姓名" /></uni-forms-item>
			<uni-forms-item name="address">
				<navigator url="/pages/profileInfo/address/addSearch">
					<uni-easyinput disabled type="text" class="input" v-model="formData.address" placeholder="小区/写字楼/学校等" />
				</navigator>
			</uni-forms-item>
			<uni-forms-item name="address_detail"><uni-easyinput type="text" class="input" v-model="formData.address_detail" placeholder="请填写详细送餐地址" /></uni-forms-item>
			<uni-forms-item name="phone"><uni-easyinput type="text" class="input" v-model="formData.phone" placeholder="请填写能够联系到您的手机号" /></uni-forms-item>
			<uni-forms-item name="phone_bk"><uni-easyinput type="text" class="input" v-model="formData.phone_bk" placeholder="备用联系电话(选填)" /></uni-forms-item>
		</uni-forms>
		<button type="primary" class="btn" @click="add">新增地址</button>
	</view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
interface Form {
	name: String;
	address: String;
	address_detail: String;
	phone: String;
	phone_bk: String;
}
const formData: Form = reactive({
	name: '',
	address: '',
	address_detail: '',
	phone: '',
	phone_bk: ''
});
const form = ref<InstanceType<typeof UniForms> | null>();
const rules = {
	name: {
		rules: [
			{
				required: true,
				errorMessage: '请填写您的姓名'
			}
		]
	},
	address: {
		rules: [
			{
				required: true,
				errorMessage: '请填写您的姓名'
			}
		]
	},
	address_detail: {
		rules: [
			{
				required: true,
				errorMessage: '请详细填写送餐地址'
			},
			{
				validateFunction(rule, value, data, callback) {
					if (value.length > 0 && value.length <= 2) {
						callback('送餐地址太短了，不能辨识');
					}
					return true;
				}
			}
		]
	},
	phone: {
		rules: [
			{
				required: true,
				errorMessage: '手机号不能为空'
			},
			{
				pattern: '[1][358][0-9]{9}$',
				errorMessage: '请输入正确的手机号'
			}
		]
	},
	phone_bk: {
		rules: [
			{
				pattern: '[1][358][0-9]{9}$',
				errorMessage: '请输入正确的手机号'
			}
		]
	}
};
const style = {
	color: '#333',
	borderColor: '#ddd'
};

function add(): void {
	form.value.validate().then(res => {
		console.log('表单数据信息：', res);
	});
}
</script>

<style lang="scss" scoped>
.add-form {
	display: block;
	padding: 10px 12px 0;
	.input {
		display: block;
		background-color: #f2f2f2;
		::v-deep .uni-input-placeholder {
			color: #0009;
			font-weight: 400;
		}
	}
}
.btn {
	margin: 15px 12px;
	line-height: 39px;
	color: #fff9;
	background: #4cd964;
	border-radius: 3px;
}
</style>
