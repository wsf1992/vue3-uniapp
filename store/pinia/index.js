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
	state: () => {
		return {
			username: '',
			user_id: ''
		}
	},
	actions: {
		setName(name) {
			this.username = name
		},
		setId(id) {
			this.user_id = id
		},
	}
})
