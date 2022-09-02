import tips from './tipsPop.js'
export default {
	install: (app, options) => {
		app.config.globalProperties.$tipPop = tips
	}
}
