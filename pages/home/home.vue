<template>
	<view class="w-flex-column" id="box">
		<uni-nav-bar fixed backgroundColor="#3190e8" color="#fff" @clickTitle="clickHeaderTitle" status-bar
			title="ele.me" leftWidth="120px" rightWidth="120px">
			<template v-slot:left>
				<navigator url="/pages/tabBar/profile/profile" v-if="user_id" open-type="switchTab">
					<uni-icons type="person" size="25px" color="#fff"></uni-icons>
				</navigator>
				<navigator url="/pages/login/login" v-else><text class="f-s-14">登录 | 注册</text></navigator>
			</template>
		</uni-nav-bar>

		<uni-section class="" title="当前定位城市：" titleColor="#666">
			<template v-slot:right>
				<text class="f-s-12 f-w-900 c-9f9f9f">定位不准时，请在城市列表中选择</text>
			</template>
		</uni-section>
		<uni-section class="cur-city" :title="curCity.name" titleFontSize="18px" titleColor="#3190e8"
			@click="toCity(curCity.id)">
			<template v-slot:right>
				<text class="c-9f9f9f">></text>
			</template>
		</uni-section>
		<view class="w-flex-column mar-b-10">
			<uni-section class="border-t" title="热门城市" titleFontSize="14px" titleColor="#666"></uni-section>
			<uni-grid :column="4" borderColor="#e4e4e4" :square="false">
				<template v-for="item in hotList" :key="item.id">
					<uni-grid-item class="city-item">
						<navigator :url="`/pages/city/city?id=${item.id}`" class="ellipsis">
							<text>{{ item.name }}</text>
						</navigator>
					</uni-grid-item>
				</template>
			</uni-grid>
		</view>
		<template v-for="item in groupList" :key="item.title">
			<view class="w-flex-column mar-b-10">
				<uni-section class="border-t" :id="item.title" :title="item.title" titleFontSize="14px"
					titleColor="#666"></uni-section>
				<uni-grid :column="4" borderColor="#e4e4e4" :square="false">
					<template v-for="(item, i) in item.items" :key="i">
						<uni-grid-item class="city-item">
							<navigator :url="`/pages/city/city?id=${item.id}`" class="ellipsis">
								<text>{{ item.name }}</text>
							</navigator>
						</uni-grid-item>
					</template>
				</uni-grid>
			</view>
		</template>
		<view class="anchor-list">
			<view v-for="item in indexList" :key="item" @click.prevent="jump(item)">{{ item }}</view>
		</view>
	</view>
</template>

<script setup>
	import {
		getGuessCity,
		getHot,
		getGroupCity,
		getUserInfo
	} from '@/common/fetch.js';
	import initCityData from '@/common/cities.js';
	import {
		ref,
		onMounted
	} from 'vue';
	import {
		onShow
	} from '@dcloudio/uni-app'
	const user_id = ref('');

	function getUser() {
		const local_user_id = uni.getStorageSync('user_id');
		getUserInfo(local_user_id).then(res => {
			if (res.data.user_id) user_id.value = res.data.user_id;
		});
	}

	function clickHeaderTitle() {
		uni.pageScrollTo({
			scrollTop: 0
		});
	}

	function jump(href) {
		uni.createSelectorQuery()
			.select('#box')
			.boundingClientRect(bData => {
				uni.createSelectorQuery()
					.select(`#${href}`)
					.boundingClientRect(data => {
						let sctop = 0;
						if (data.top < 0) {
							if (bData.top < 0) {
								sctop = data.top - bData.top;
							} else {
								sctop = bData.top - data.top;
							}
						} else {
							if (bData.top < 0) {
								sctop = data.top - bData.top;
							} else {
								sctop = bData.top + data.top;
							}
						}
						uni.pageScrollTo({
							scrollTop: sctop - 88
						});
					})
					.exec();
			})
			.exec();
	}

	function toCity(id) {
		uni.navigateTo({
			url: `/pages/city/city?id=${id}`
		});
	}

	const hotList = ref([]);

	function getHotCity() {
		getHot().then(res => {
			hotList.value = res.data;
		});
	}
	const groupList = ref([]);
	const indexList = ref([]);

	function getGroup() {
		// console.log('开始请求', new Date().getTime());
		// getGroupCity().then(res => {
		// 	console.log('数据获取成功', new Date().getTime());
		let group = [],
			index = [];
		for (let key in initCityData) {
			group.push({
				title: key,
				items: initCityData[key]
			});
			index.push(key);
		}
		group.sort(function(a, b) {
			return a.title.charCodeAt(0) - b.title.charCodeAt(0);
		});
		groupList.value = group;
		// console.log('数据处理完成', new Date().getTime());
		index.sort();
		indexList.value = index;
		// });
	}
	const curCity = ref('');

	function getGuess() {
		getGuessCity().then(res => {
			curCity.value = res.data;
		});
	}
	onMounted(() => {
		getHotCity();
		getGroup();
	});
	onShow(() => {
		getUser();
		getGuess();
	})
</script>

<style>
	.city-title {
		height: 36px;
		line-height: 36px;
		border-top: 2px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		padding-left: 11px;
	}

	.city-item {
		box-sizing: border-box;
		height: 43px !important;
		line-height: 43px;
		text-align: center;
		background-color: #fff;
	}

	.anchor-list {
		position: fixed;
		right: 0px;
		top: 50%;
		margin-top: -209px;
		font-size: 14px;
		width: 22px;
		text-align: center;
		color: #666;
		background-color: #e4e4e4;
		opacity: 0.5;
		z-index: 99;
	}

	.bg-color-unset {
		background-color: unset;
	}

	.border-t {
		border-top: 1px solid #e4e4e4;
	}

	.cur-city {
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		margin-bottom: 10px;
	}

	.ellipsis {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
