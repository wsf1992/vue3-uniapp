import {
	defineStore
} from 'pinia'
export const useServeStore = defineStore('serve', {
	state: () => {
		return {
			name: '',
			content: ''
		}
	},
	actions: {
		reset(name, content) {
			this.name = name
			this.content = content
		}
	}
})

export const useUserStore = defineStore('user', {
	state: () => ({
		username: '',
		user_id: '',
		geohash: '',
		latitude: '',
		longitude: ''
	}),
	actions: {
		setUser(params) {
			if (params) {
				if (params.username) this.username = params.username
				if (params.user_id) this.user_id = params.user_id
				if (params.geohash) this.geohash = params.geohash
				if (params.latitude) this.latitude = params.latitude
				if (params.longitude) this.longitude = params.longitude
			} else {
				this.$reset()
			}
		}
	}
})
