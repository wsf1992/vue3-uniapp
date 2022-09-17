<template>
	<view v-html="content"></view>
</template>

<script lang="ts" setup>
import { onShow, onHide } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { useServeStore } from '@/store/pinia/index.js';
import showdown from 'showdown';

const content = ref<String>();
const serve = useServeStore();
onShow(() => {
	uni.setNavigationBarTitle({
		title: serve.name
	});
	const converter = new showdown.Converter();
	content.value = converter.makeHtml(serve.content);
});
onHide(() => {
	eventChannel.off('acceptDataFromOpenerPage');
});
</script>

<style lang="scss" scoped></style>
