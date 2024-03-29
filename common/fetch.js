/**
 *	这里定义 所有请求的接口
 **/
import api from './api.js'
import {
	getLocation
} from '@/common/util.js'

import {
	useUserStore
} from '@/store/pinia/index.js';
const userStore = useUserStore();
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
export const getUserInfo = async () => {
	const user_id = uni.getStorageSync('user_id');

	const result = await api.get('/v1/user', {
		user_id
	})
	if (result.data.user_id) {
		userStore.setUser(result.data);
		if (!user_id) uni.setStorageSync('user_id', result.data.user_id);
	} else {
		userStore.setUser();
	}
	return result
}

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
export const changePassword = params => api.post('/v2/changepassword', params)

// 退出登录
export const signout = () => api.get('/v2/signout')

// 
export const avatar = file => api.uploadFile('/eus/v1/users/24/avatar', file)

// 修改用户名
export const changeUserName = params => api.post('/v2/changeusername', params)

//新增地址
export const address = (params) => api.post(`/v1/users/${params.user_id}/addresses`, {
	...params,
	poi_type: 0,
	sex: 1,
	tag: '公司',
	tag_type: '4',
})

//搜索地址
export const addressSearch = (params) => api.get('/v1/pois', {
	type: 'nearby',
	...params
})

// 获取地址
export const getAddress = (user_id) => api.get(`/v1/users/${user_id}/addresses`)

// 删除地址
export const delAddress = (user_id, address_id) => api.delete(`/v1/users/${user_id}/addresses/${address_id}`)

//服务中心

export const profileExplain = () => api.get('/v3/profile/explain')

//兑换会员
export const bindVipCard = ({
	number,
	password,
	user_id
}) => api.post(`/member/v1/users/${user_id}/delivery_card/physical_card/bind`, {
	number,
	password
})

// 红包
export const getHongbao = (user_id) => api.get(`/promotion/v2/users/${user_id}/hongbaos?limit=30&offset=0`)

//历史红包
export const gethbHistory = (user_id) => api.get(`/promotion/v2/users/${user_id}/expired_hongbaos?limit=20&offset=0`)

//兑换红包

export const exchangeHongbao = ({
	user_id,
	captcha_code,
	exchange_code
}) => api.post(`/v1/users/${user_id}/hongbao/exchange`, {
	captcha_code,
	exchange_code
})

//获取品类
export const getCategory = async params => {
	await getLocation()
	return api.get('/v2/index_entry', {
		geohash: userStore.geohash,
		...params
	})
}

//获取商家
export const getShop = async params => {
	await getLocation()
	return api.get('/shopping/restaurants', {
		latitude: userStore.latitude,
		longitude: userStore.longitude,
		...params
	})
}
//获取商铺详情
export const getShopDetails = async (shopid) => {
	await getLocation()
	return api.get(`/shopping/restaurant/${shopid}`, {
		latitude: userStore.latitude,
		longitude: userStore.longitude +
			'&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics'
	})
}

// 获取定位详情
export const getTailByPois = async () => {
	await getLocation()
	return api.get(`/v2/pois/${userStore.geohash}`)
}

// 获取商铺menu
export const getShopMenu = (restaurant_id) => api.get(`/shopping/v2/menu?restaurant_id=${restaurant_id}`)
