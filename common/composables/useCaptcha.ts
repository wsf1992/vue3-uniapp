import { ref } from 'vue';
import { getCaptcha } from '@/common/fetch.js';

const captcha = ref<String>(null);

export function useCaptcha() {
	function getCapt() {
		getCaptcha().then(res => {
			captcha.value = res.data.code;
		});
	}
	getCapt();
	return {
		captcha,
		getCapt
	};
}
