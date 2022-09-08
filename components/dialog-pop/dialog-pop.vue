<template>
	<uni-popup ref="popup" :mask-click="false">
		<view class="pop-box w-flex-column w-flex-cross-center">
			<uni-icons type="info" size="100" color="#f8cb86"></uni-icons>
			<text class="text-center tips-text">{{ popText }}</text>
			<view class="w-flex-row">
				<button type="default" size="mini" class="mar-r-20" @click="cancel">{{canlText}}</button>
				<button type="warn" size="mini" @click="save">{{saveText}}</button>
			</view>
		</view>

	</uni-popup>
</template>

<script setup>
	import {
		ref,
		defineExpose,
		onMounted
	} from 'vue';

	const callback = ref(null);
	const popup = ref();
	const popText = ref();

	const canlText = ref('取消')
	const saveText = ref('确定')

	function openPop(options) {
		if (typeof options === 'string') {
			popText.value = options;
		} else {
			options.hasOwnProperty('popText') && (popText.value = options.popText)
			options.hasOwnProperty('canlText') && (canlText.value = options.canlText)
			options.hasOwnProperty('saveText') && (saveText.value = options.saveText)
		}
		popup.value.open('center');
		return new Promise((resolve, reject) => {
			callback.value = (method) => {
				if (method === 'cancel') {
					reject()
				} else {
					resolve();
				}
				popup.value.close();
			};
		});
	}

	function save() {
		callback.value('save');
	}

	function cancel() {
		callback.value('cancel');
	}
	defineExpose({
		callback,
		openPop
	});
</script>

<style scoped lang="scss">
	.tips-text {
		font-size: 20px;
		color: #575757;
		font-weight: 500;
		margin: 15px 0 25px;
	}

	.pop-box {
		width: 190px;
		padding: 10px 30px 15px;
		background-color: #fff;
		border-radius: 6px;
	}
</style>
