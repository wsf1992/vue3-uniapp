<template>
	<view :class="['w-flex-row', 'container', { 'border-b-radis': !hasFoot, 'bgi-hui': !themeColor }]">
		<view class="w-flex-column left-box w-align-s-end">
			<text :class="['f-w-700', themeColor]">
				<text>￥</text>
				<text class="first-number f-w-400">{{ amountCom }}</text>
				<text>.{{ decimal }}</text>
			</text>
			<text class="c-999 f-s-12">满{{ sumCondition }}元可用</text>
		</view>
		<view class="w-flex-row w-flex-auto w-flex-jusify-center">
			<view class="w-flex-column">
				<text class="f-s-17 c-666">{{ name }}</text>
				<text class="c-999 f-s-12">{{ endDate }}到期</text>
				<text class="c-999 f-s-12">限收货手机号为 {{ phone }}</text>
			</view>
		</view>
		<view v-if="!themeColor" class="c-999">已过期</view>
		<view v-else :class="['f-s-18', themeColor]">剩{{ surplus }}日</view>
	</view>
	<view class="footer c-999 f-s-12" v-if="hasFoot">
		<text>{{ footerTips }}</text>
	</view>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import moment from 'moment';
const hasFoot = computed<Number>(() => footerTips.value.length);
const amountCom = computed<Number>(() => parseInt(props.amount as Number));
const decimal = computed<Number>(() => (props.amount - parseInt(props.amount as Number)) * 10);
const surplus = computed<Number | String>(() => {
	const start = moment(props.beginDate).unix();
	const end = moment(props.endDate).unix();
	return moment.unix(end - start).format('D');
});
const footerTips = computed<String>(() => {
	if (props.limitMap.restaurant_flavor_ids) {
		return props.limitMap.restaurant_flavor_ids;
	} else {
		return '';
	}
});
const props = defineProps({
	themeColor: {
		type: [String],
		default: 'usable'
	},
	phone: {
		type: String,
		default: '13520163508'
	},
	sumCondition: {
		type: Number,
		default: 20
	},
	amount: {
		type: Number,
		default: 1.5
	},
	limitMap: {
		type: Object,
		default: function() {
			return {};
		}
	},
	name: {
		type: String,
		default: '分享红包'
	},
	endDate: {
		type: String,
		default: '2017-05-23'
	},
	beginDate: {
		type: String,
		default: '2017-05-10'
	}
});
</script>

<style lang="scss" scoped>
.container {
	background-color: #fff;
	background-image: url('../../../static/bowen.png');
	background-repeat: repeat-x;
	background-size: 12px 5px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	padding: 24px 12px 20px;

	.left-box {
		color: #ccc;
		border-right: 1px dotted #ccc;
		width: 82px;
		.first-number {
			font-size: 36px;
		}
	}
}
.bgi-hui {
	background-image: url('../../../static/huibowen.png');
}
.border-b-radis {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
}
.usable {
	color: #ff5340;
}
.footer {
	padding: 10px;
	background-color: #f9f9f9;
	border-radius: 0 0 6px 6px;
	word-wrap: break-word;
}
</style>
