/**
 *	这里定义 所有请求的接口
 **/
import api from './api.js'

// home
export const getGuessCity = () => api.get('/v1/cities', {
	type: 'guess'
})
export const getHot = () => api.get('/v1/cities', {
	type: 'hot'
})
export const getGroupCity = () => api.get('/v1/cities', {
	type: 'group'
})
export const getUserInfo = user_id => api.get('/v1/user', {
	user_id
})

//city
export const getCity = params => {
	const url = `/v1/cities/${params.cityId}`
	return api.get(url)
}
export const citySearch = (params) => api.get('/v1/pois', {
	type: 'search',
	...params
})

// login
export const getCaptcha = () => api.post('/v1/captchas', {
	type: 'group'
})
export const login = (params) => api.post('/v2/login', {
	...params
})

// forget

export const changePassword = (params) => api.post('/v2/changepassword', params)
