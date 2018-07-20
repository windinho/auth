import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		userData: {}
	},
	getters: {
		userData: state => {
			return state.userData
		},
		password: state => {
			return state.userData.password
		},
		email: state => {
			return state.userData.email
		}
	},
	mutations: {
		signup: (state, obj) => {
			state.userData.username = obj.username
			state.userData.password = obj.password
			state.userData.email = obj.email
		},
		login: (state, obj) => {
			state.userData.username = obj.username
			state.userData.password = obj.password
		}
	}
});