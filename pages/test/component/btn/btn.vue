<template>
	<view>
		<button class="btn">
			<slot name="default">123</slot>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.btn {
	margin: 0;
	padding: 0;
	width: 100px;
	height: 20px;
	line-height: 1;
	backgroun-color:red;
	border: 1px solid #000;
}
</style>
