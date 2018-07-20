<template>
    <div>
        <nav class="blue-grey">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Welcome</a>
            </div>
        </nav>
        <main class="hello">
            <div class="container">
                <div class="row">
                    <router-link to="/login">
                        <div class="col s12 m6 offset-m3 card green darken-1">
                            <div class="card-content white-text">
                                <h1>LOGIN</h1>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="row">
                    <router-link to="/signup">
                        <div class="col s12 m6 offset-m3 card red darken-1">
                            <div class="card-content white-text">
                                <h1>SIGNUP</h1>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
    export default {}
</script>