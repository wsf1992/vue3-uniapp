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
		user_id: ''
	}),
	actions: {
		setUser(params) {
			if (params) {
				if (params.username) this.username = params.username
				if (params.user_id) this.user_id = params.user_id
			} else {
				this.$reset()
			}
		}
	}
})
