import {
	createApp
} from 'vue'
import TipsPop from './tipsPop.vue'

let cApp = null,
	mountDom = null,
	instance = null

// 创建实例
function initInstance(propsData) {
	cApp = createApp(TipsPop, propsData)
	mountDom = document.createElement('div')
	instance = cApp.mount(mountDom)
}

function mergeOpt({
	popTxt
}) {
	return {
		popTxt
	}
}

function showDialog() {
	document.body.appendChild(mountDom)
	instance.openPop()
}

function unmount() {
	cApp.unmount()
	mountDom = null
	instance = null
}

export default function(tips) {
	const propsData = mergeOpt({
		popTxt: tips
	})

	if (!instance) {
		initInstance(propsData)
	}
	showDialog()

	return new Promise((resolve, reject) => {
		instance.callback = () => {
			resolve()
			unmount()
		}
	})
}
