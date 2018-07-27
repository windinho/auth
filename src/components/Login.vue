<template>
	<div>
		<nav class="blue-grey">
			<div class="nav-wrapper">
				<a href="#" class="brand-logo">Login</a>
			</div>
		</nav>
		<div class="container">
			<div class="row" v-show="!loggedIn">
				<div class="card yellow darken-1 col m6 offset-m3">
					<form id="login-form">
						<div class="input-field">
							<input v-model="username" id="username" type="text" class="validate" required>
							<label for="username">Username</label>
						</div>
						<div class="input-field">
							<input v-model="password" id="password" type="password" class="validate" required>
							<label for="password">Password</label>
						</div>
						<div class="input-field center">
							<a @click="login" class="waves-effect waves-light btn">Login</a> or
							<router-link to="/signup">Signup</router-link>
						</div>
					</form>
				</div>
			</div>
			<div class="row center" v-show="loggedIn">
				<div class="col s12 m6 offset-m3">
					<div class="card green darken-1">
						<div class="card-content white-text">
							<span class="card-title">Login Success!</span><hr>
							<h6>Username - <span class="yellow-text">{{ userData.username }}</span></h6>
							<h6>Password - <span class="yellow-text">{{ userData.password }}</span></h6>
						</div>
						<div class="card-action">
							<a href="#" @click="signout">Signout</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { store } from '@/store/store'
	import resource from 'vue-resource'

	Vue.use(resource)

	export default {
		store: store,
		data () {
			return {
				username: "",
				password: "",
				loggedIn: false
			}
		},
		computed: {
			userData() {
				return this.$store.getters.userData
			}
		},
		methods: {
			login() {
				var valid = document.getElementById("login-form").checkValidity()
				if(!valid) {
					M.toast({html: 'Enter Username and Password'})
					return
				}
				this.$store.commit('login', {
					"username": this.username,
					"password": this.password
				})
				this.loggedIn = true
			},
			signout() {
				this.loggedIn = false
			}
		},
		created: function () {
			this.$http.get('https://jsonplaceholder.typicode.com/users')
			// .then(response => response.json())
			.then(json => console.log(json.data))
		}
	}
</script>