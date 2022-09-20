<template>
	<view class="container">
		<image src="../../../../static/recommend.png" mode="scaleToFill" class="pic"></image>
		<view class="w-flex-row w-flex-cross-center bg-fff">
			<view class="w-flex-auto w-flex-column w-flex-cross-center pad-t-25 pad-b-25" @click="tips" hover-class="button-hover">
				<image class="img" src="../../../../static/re-weixin.png" mode=""></image>
				<text>邀请微信好友</text>
			</view>
			<view class="w-flex-auto w-flex-column w-flex-cross-center pad-t-25 pad-b-25" @click="tips" hover-class="button-hover">
				<image class="img" src="../../../../static/re-qq.png" mode=""></image>
				<text>邀请QQ好友</text>
			</view>
			<view class="w-flex-auto w-flex-column w-flex-cross-center pad-t-25 pad-b-25" @click="tips" hover-class="button-hover">
				<image class="img" src="../../../../static/re-mianduimian.png" mode=""></image>
				<text>面对面邀请</text>
			</view>
		</view>
		<view class="w-flex-row w-flex-cross-center c-666 mar-t-25">
			<view class="w-flex-auto w-flex-column w-flex-cross-center">
				<text>累计收益</text>
				<text>
					<text class="c-ff5633 f-w-700">0</text>
					元
				</text>
			</view>
			<view class="fgx"></view>
			<view class="w-flex-auto w-flex-column w-flex-cross-center">
				<text>成功邀请</text>
				<text>
					<text class="c-666 f-w-700">0</text>
					人
				</text>
			</view>
		</view>
		<view class="text-center mar-t-25"><text class="c-666">-收益明细-</text></view>
		<view class="w-flex-column w-flex-cross-center mar-t-25">
			<image src="../../../../static/no-re.png" mode="" class="no-re-pic"></image>
			<text class="c-999 f-s-13 mar-t-5">还不赶紧去邀请好友</text>
		</view>
		<tips-pop ref="tipspop"></tips-pop>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const tipspop = ref<InstanceType<typeof TipsPop> | null>();
function tips(): void {
	tipspop.value.openPop('请在饿了么APP中打开');
}
</script>

<style lang="scss" scoped>
.container {
	.pic {
		height: 250px;
		width: 100vw;
	}
	.img {
		width: 63px;
		height: 63px;
		margin-bottom: 5px;
	}

	.fgx {
		width: 1px;
		height: 40px;
		background-color: #ddd;
	}

	.no-re-pic {
		width: 32px;
		height: 40px;
	}
}
</style>
