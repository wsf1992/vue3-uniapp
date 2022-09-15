class Api {
	constructor() {
		this.baseUrl = 'http://120.48.75.81:8001'
	}
	baseRequest(url, method = 'GET', params = {}) {
		return uni.request({
			url: `${this.baseUrl}${url}`,
			method: method,
			data: params
		})
	}
	get(url, params) {
		return this.baseRequest(url, null, params)
	}
	delete(url, params) {
		return this.baseRequest(url, 'DELETE', params)
	}
	post(url, params) {
		return this.baseRequest(url, 'POST', params)
	}
	uploadFile(url, file) {
		return uni.uploadFile({
			url: `${this.baseUrl}${url}`,
			name: 'file',
			filePath: file,
		})
	}
}
export default new Api()
