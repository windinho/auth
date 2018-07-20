<template>
	<div>
		<nav class="blue-grey">
			<div class="nav-wrapper">
				<a href="#" class="brand-logo">Signup</a>
			</div>
		</nav>
		<div class="container">
			<div class="row" v-show="!signedUp">
				<form id="signup-form" class="card yellow col m6 offset-m3">
					<div class="input-field">
						<input v-model="username" id="username" type="text" class="validate" required>
						<label for="username">Username</label>
					</div>
					<div class="input-field">
						<input v-model="email" id="email" type="text" class="validate" required>
						<label for="email">Email</label>
					</div>
					<div class="input-field">
						<input v-model="password" id="password" type="password" class="validate" required>
						<label for="password">Password</label>
					</div>
					<div class="input-field center">
						<button @click="signup" class="btn">Signup</button>
					</div>
				</form>
			</div>
			<div class="row center" v-show="signedUp">
				<div class="col s12 m6 offset-m3">
					<div class="card green darken-1">
						<div class="card-content white-text">
							<span class="card-title">Signup Success!</span><hr>
							<h6>Username - <span class="yellow-text">{{ userData.username }}</span></h6>
							<h6>Email - <span class="yellow-text">{{ userData.email }}</span></h6>
							<h6>Password - <span class="yellow-text">{{ userData.password }}</span></h6>
						</div>
						<div class="card-action">
							<router-link to="/login">Go to Login Page</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { store } from '@/store/store';
	export default {
		store: store,
		data () {
			return {
				username: "",
				email: "",
				password: "",
				signedUp: false
			}
		},
		computed: {
			userData() {
				return this.$store.getters.userData
			}
		},
		methods: {
			signup() {
				var valid = document.getElementById("signup-form").checkValidity()
				if(!valid) {
					M.toast({html: 'Fill all inputs'})
					return
				}
				this.$store.commit('signup', {
					"username": this.username,
					"password": this.password,
					"email": this.email
				})
				this.signedUp = true
			},
			signout() {
				this.signedUp = false
			}
		}
	}
</script>