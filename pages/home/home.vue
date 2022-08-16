<template>
	<view class="w-flex-column">
		<view class="uni-flex w-flex-jusify-between w-header">
			<view>ele.me</view>
			<view>登陆|注册</view>
		</view>
		<view class="w-flex-column mar-t-10 mar-b-10">
			<view class="uni-flex w-flex-jusify-between w-city-nav">
				<view class="f-s-13 c-666">当前定位城市：</view>
				<view class="f-s-12 f-w-900 c-9f9f9f">定位不准时，请在城市列表中选择</view>
			</view>
			<view class="uni-flex w-flex-jusify-between w-city-tips">
				<view class="f-s-18 c-3190e8">北京</view>
				<view class="f-s-18 c-999">></view>
			</view>
		</view>
		<view class="w-flex-column mar-b-10">
			<view class="city-title">热门城市</view>
			<navigator url="#A"></navigator>
			<a href="#A"></a>
			<view class="uni-flex" style="flex-wrap:wrap;overflow:hidden;">
				<view class="city-item" v-for="item in hotList" :key="item.id">{{item.name}}</view>
			</view>
		</view>
		<template v-for="item in groupList" :key="item.title">
			<view class="w-flex-column mar-b-10">
				<view class="city-title" name="item.title">{{item.title}}</view>
					<view class="uni-flex" style="flex-wrap:wrap;overflow:hidden;">
						<view class="city-item"  v-for="(obj, i) in item.items" :key="i">{{obj.name}}</view>
					</view>
			</view>
		</template>
		<view class="anchor-list">
			<view v-for="item in indexList" :key="item" @click="jump(item)">{{item}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotList: [],
				groupList: [],
				indexList: []
			}
		},
		methods: {
			getHot() {
				uni.request({
					url: 'http://120.48.75.81:8001/v1/cities',
					data: {
						type: 'hot'
					},
					success: res => {
						this.hotList = res.data
					},
					fail: err => {
						console.log('获取热门城市失败', err)
					}
				})
			},
			getGroupCity() {
				uni.request({
					url: 'http://120.48.75.81:8001/v1/cities',
					data: {
						type: 'group'
					},
					success: res => {
						for(let key in res.data) {
							this.groupList.push({"title": key, "items": res.data[key]})
							this.indexList.push(key)
						}
						this.groupList.sort(function(a, b) {
								return a.title.charCodeAt(0)-b.title.charCodeAt(0)
							})
						this.indexList.sort()
					},
					fail: err => {
						console.log('获取城市分组失败', err)
					}
				})
			},
			jump(href) {
				console.log(11111111, `#${href}`)
				location.href = `#${href}`
			}
		},
		created() {
			this.getHot()
			this.getGroupCity()
		}
	}
</script>

<style>
.w-header {
	height: 48px;
	background-color: #3190e8;
	color: #fff;
	align-items: center;
	padding: 0 10px;
}
.w-city-nav {
	height: 36px;
	margin: 0 11px;
	align-items: center;
}
.w-city-tips {
	height: 41px;
	padding: 0 11px;
	align-items: center;
	border-top: 1px solid #e4e4e4;
	border-bottom: 2px solid #e4e4e4;
}
.city-title {
	height: 36px;
	line-height: 36px;
	border-top: 2px solid #e4e4e4;
	border-bottom:1px solid #e4e4e4;
	padding-left: 11px;

}
.city-item {
	box-sizing: border-box;
	height: 43px;
	line-height: 43px;
	flex: 0 0 25%;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	border-bottom: 1px solid #e4e4e4;
	border-right: 1px solid #e4e4e4;
}
.city-item:nth-child(4n) {
	border-right-width: 0px;
}
.anchor-list {
	position:fixed;
	right:0px;
	top:50%;
	margin-top: -209px;
	font-size: 14px;
	width: 22px;
	text-align:center;
	color: #666;
}
</style>
