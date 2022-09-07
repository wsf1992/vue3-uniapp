<template>
	<view>
		<view class="city-form">
			<uni-search-bar
				placeholder="输入学校 商务楼 地址"
				focus
				v-model="searchValue"
				@clear="(searchValue = ''), search()"
				clearButton="auto"
				cancelButton="none"
			></uni-search-bar>
			<button type="primary" class="save-btn" @click="search">提交</button>
		</view>
		<uni-list>
			<template v-for="item in sList" :key="item.geohash">
				<uni-list-item :title="item.name" :note="item.address" clickable />
			</template>
		</uni-list>
		<uni-card v-if="searchValue && !sList.length && !searchLoading" :is-shadow="false" is-full><text class="uni-h6">很抱歉！无搜索结果</text></uni-card>
	</view>
</template>

<script setup>
import { getCity, citySearch } from '@/common/fetch.js';
import { ref, reactive, onMounted } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const cityId = ref('');
const searchValue = ref('');
const searchLoading = ref(false);
let cityObj = reactive({});
let sList = ref([]);

function getCityMsg() {
	uni.showNavigationBarLoading();
	getCity({
		cityId: cityId.value
	})
		.then(res => {
			cityObj = res.data;
			uni.setNavigationBarTitle({
				title: cityObj.name
			});
		})
		.finally(() => {
			uni.hideNavigationBarLoading();
		});
}

function search() {
	searchLoading.value = true;
	if (searchValue.value === '') return (sList.value = []);
	citySearch({
		city_id: cityId.value,
		keyword: searchValue.value
	})
		.then(res => {
			sList.value = res.data;
		})
		.finally(() => {
			searchLoading.value = false;
		});
}
onMounted(() => {
	getCityMsg();
});

onLoad(option => {
	cityId.value = option.id;
	getCityMsg();
});
</script>

<style scoped>
.city-form {
	background-color: #fff;
	border-top: 1px solid #e4e4e4;
	border-bottom: 1px solid #e4e4e4;
	margin-top: 10px;
	padding-bottom: 10px;
}

.save-btn {
	margin: 0 10px;
	height: 35px;
	line-height: 35px;
}
</style>
