<template>
	<view></view>
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
			cityObj: {}
		};
	},
	methods: {
		getCity() {
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
				}
			});
		}
	},
	created() {
		this.getCity();
	}
};
</script>

<style></style>
