<template>
	<view>
		<view class="city-form">
			<uni-search-bar
				placeholder="输入学校 商务楼 地址"
				focus
				v-model="searchValue"
				@clear="
					searchValue = '';
					search();
				"
				clearButton="auto"
				cancelButton="none"
			></uni-search-bar>
			<button type="primary" class="save-btn" @click="search">提交</button>
		</view>
		<uni-list>
			<template v-for="item in sList" :key="item.geohash">
				<uni-list-item :title="item.name" :note="item.address" clickable @click="goMiste(item)" />
			</template>
		</uni-list>
		<uni-card v-if="searchValue && !sList.length && !searchLoading" :is-shadow="false" is-full><text class="uni-h6">很抱歉！无搜索结果</text></uni-card>
	</view>
</template>

<script setup>
import { getCity, citySearch } from '@/common/fetch.js';
import { ref, reactive, onMounted } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { useUserStore } from '@/store/pinia/index.js';
const user = useUserStore();

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

function goMiste(item) {
	user.setUser(item);
	uni.switchTab({
		url: '/pages/tabBar/miste/miste'
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

<style scoped lang="scss">
.city-form {
	background-color: $color-fff;
	border-top: 1px solid $color-e4;
	border-bottom: 1px solid $color-e4;
	margin-top: $px-10;
	padding-bottom: $px-10;
}

.save-btn {
	margin: 0 $px-10;
	height: 35px;
	line-height: 35px;
}
</style>
