import {
	createVNode,
	render
} from 'vue'
import TipsPop from './tipsPop.vue'

let vNode = null,
	mountNode = null

// 创建实例
function initInstance(propsData) {
	vNode = createVNode(TipsPop, propsData)
	mountNode = document.createElement('div')
	render(vNode, mountNode)
}

function mergeOpt({
	text
}) {
	return {
		text
	}
}

function showDialog() {
	document.body.appendChild(mountNode)
	setTimeout(() => {
		vNode.type.methods.openPop()
	})
}

export default function(opstions = {}) {
	const propsData = mergeOpt(opstions)

	if (!vNode) {
		initInstance(propsData)
	}

	showDialog()

	return new Promise((resolve, reject) => {
		vNode.callback = action => {
			if (action === 'ok') {
				resolve()
			} else {
				reject()
			}
			setTimeout(() => {
				vNode.$destroy()
				vNode = null
				mountNode = null
			})
		}
	})
}
