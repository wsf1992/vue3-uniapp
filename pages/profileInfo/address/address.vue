<template>
	<view class="mar-t-10">
		<uni-list border v-if="addArray.length">
			<template v-for="item of addArray" :key="item.city_id">
				<uni-list-item :title="item.name" :note="item.address">
					<template v-slot:footer>
						<uni-icons class="l-h-35" type="minus-filled" size="20" color="red" @click="deleteAdd(item.id)"></uni-icons>
					</template>
				</uni-list-item>
			</template>
		</uni-list>
		<uni-list class="mar-t-10 block"><uni-list-item showArrow title="新增地址" link to="/pages/profileInfo/address/add" /></uni-list>
	</view>
</template>

<script setup lang="ts">
import { getAddress, delAddress } from '@/common/fetch.js';
import { onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';

const addArray = ref<Array>([]);
function getList(): void {
	getAddress(uni.getStorageSync('user_id')).then(res => {
		if (res.data) {
			addArray.value = res.data;
		}
	});
}
function deleteAdd(id: String | Number): void {
	delAddress(uni.getStorageSync('user_id'), id).then(res => {
		if (res.data.status) getList();
	});
}
onShow(() => {
	getList();
});
</script>

<style lang="scss" scoped>
.delete-image {
	width: 10px;
	height: 10px;
}
.l-h-35 {
	line-height: 35px;
}
</style>
