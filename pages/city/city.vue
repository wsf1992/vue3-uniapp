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

<script>
export default {
	onLoad: function(option) {
		this.cityId = option.id;
		this.getCity();
	},
	data() {
		return {
			cityId: '',
			cityObj: {},
			searchValue: '',
			sList: [],
			searchLoading: false
		};
	},
	methods: {
		getCity() {
			uni.showNavigationBarLoading();
			uni.request({
				url: `http://120.48.75.81:8001/v1/cities/${this.cityId}`,
				data: {},
				success: res => {
					this.cityObj = res.data;
					uni.setNavigationBarTitle({
						title: this.cityObj.name
					});
				},
				fail: err => {
					console.log('获取当前城市失败', err);
				},
				complete: () => {
					uni.hideNavigationBarLoading();
				}
			});
		},
		search() {
			this.searchLoading = true;
			if (this.searchValue === '') return (this.sList = []);
			uni.request({
				url: 'http://120.48.75.81:8001/v1/pois',
				data: {
					type: 'search',
					city_id: this.cityId,
					keyword: this.searchValue
				},
				success: res => {
					this.sList = res.data || [];
				},
				fail: err => {
					console.log('获取城市地址失败', err);
				},
				complete: () => {
					this.searchLoading = false;
				}
			});
		}
	},
	created() {
		this.getCity();
	}
};
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
