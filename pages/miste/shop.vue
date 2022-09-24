<template>
	<view class="container w-flex-row bg-fff" @click="jump">
		<image class="header-img w-align-self-c" :src="`http://120.48.75.81:8001/img/${data.image_path}`" mode=""></image>
		<view class="content w-flex-column mar-l-10 w-flex-jusify-around">
			<view>
				<text class="pinpai f-s-12">品牌</text>
				<text class="f-s-16 f-w-700">{{ data.name }}</text>
			</view>
			<view class="w-flex-row w-flex-cross-center f-s-12">
				<uni-rate :size="8" :value="data.rating" readonly allowHalf />
				<text class="c-ff6000 pingfen">{{ data.rating }}</text>
				<text class="c-666">月售{{ data.recent_order_num }}单</text>
			</view>
			<view class="c-666 f-s-12">
				<text>¥{{ data.float_minimum_order_amount }}起送</text>
				/
				<text>{{ data.piecewise_agent_fee.tips }}</text>
			</view>
		</view>
		<view class="footer w-flex-column w-flex-auto w-flex-cross-end f-s-12 w-flex-jusify-around">
			<view class="">
				<template v-for="item in data.supports">
					<text class="c-999 baozhunpiao">{{ item.icon_name }}</text>
				</template>
			</view>

			<view>
				<text class="delivery_left c-fff" v-if="data.delivery_mode">{{ data.delivery_mode.text }}</text>
				<text class="delivery_right c-3190e8" v-if="onTime">准时达</text>
			</view>
			<text class="c-999">{{ data.distance }}</text>
			<text class="c-3190e8">{{ data.order_lead_time }}</text>
		</view>
	</view>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
const props = defineProps({
	data: Object
});
const onTime = computed(() => {
	if (props.data.supports) {
		return props.data.supports.some(v => v.icon_name === '准');
	} else {
		return false;
	}
});

function jump(): void {
	uni.navigateTo({
		url: '/pages/miste/business/business'
	});
}
</script>

<style scoped lang="scss">
.container {
	padding: 17px 9px;
	border-bottom: 1px solid #f1f1f1;
	height: 75px;

	.header-img {
		width: 65px;
		height: 65px;
	}

	.content {
		.pinpai {
			width: 29px;
			background-color: #ffd930;
			border-radius: 2.5px;
			padding: 0 2px;
			margin-right: 5px;
		}

		.pingfen {
			margin: 0 5px;
		}
	}
	.footer {
		.baozhunpiao {
			border: 1px solid #f1f1f1;
		}

		.delivery_left {
			background-color: #3190e8;
			border: 1px solid #3190e8;
			padding: 0 2px;
			margin-right: 2px;
		}
		.delivery_right {
			border: 1px solid #3190e8;
			padding: 0 2px;
		}
	}
}
</style>
