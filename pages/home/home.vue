<template>
	<view class="w-flex-column" id="box">
		<uni-nav-bar fixed backgroundColor="#3190e8" color="#fff" @clickTitle="clickHeaderTitle" status-bar title="ele.me" leftWidth="120px" rightWidth="120px">
			<template v-slot:left>
				<navigator url="/pages/login/login"><text class="f-s-14">登录 | 注册</text></navigator>
			</template>
		</uni-nav-bar>

		<uni-section class="" title="当前定位城市：" titleColor="#666">
			<template v-slot:right>
				<text class="f-s-12 f-w-900 c-9f9f9f">定位不准时，请在城市列表中选择</text>
			</template>
		</uni-section>
		<uni-section class="cur-city" :title="curCity.name" titleFontSize="18px" titleColor="#3190e8" @click="toCity(curCity.id)">
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
				<uni-section class="border-t" :id="item.title" :title="item.title" titleFontSize="14px" titleColor="#666"></uni-section>
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

<script>
export default {
	data() {
		return {
			hotList: [],
			groupList: [],
			indexList: [],
			curCity: ''
		};
	},
	methods: {
		getGuessCity() {
			uni.request({
				url: 'http://120.48.75.81:8001/v1/cities',
				data: {
					type: 'guess'
				},
				success: res => {
					this.curCity = res.data;
				},
				fail: err => {
					console.log('获取当前城市失败', err);
				}
			});
		},
		getHot() {
			uni.request({
				url: 'http://120.48.75.81:8001/v1/cities',
				data: {
					type: 'hot'
				},
				success: res => {
					this.hotList = res.data;
				},
				fail: err => {
					console.log('获取热门城市失败', err);
				}
			});
		},
		getGroupCity() {
			uni.request({
				url: 'http://120.48.75.81:8001/v1/cities',
				data: {
					type: 'group'
				},
				success: res => {
					for (let key in res.data) {
						this.groupList.push({ title: key, items: res.data[key] });
						this.indexList.push(key);
					}
					this.groupList.sort(function(a, b) {
						return a.title.charCodeAt(0) - b.title.charCodeAt(0);
					});
					this.indexList.sort();
				},
				fail: err => {
					console.log('获取城市分组失败', err);
				}
			});
		},
		clickHeaderTitle() {
			uni.pageScrollTo({
				scrollTop: 0
			});
		},
		jump(href) {
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
		},
		toCity(id) {
			uni.navigateTo({
				url: `/pages/city/city?id=${id}`
			});
		}
	},
	created() {
		this.getHot();
		this.getGroupCity();
		this.getGuessCity();
	}
};
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
