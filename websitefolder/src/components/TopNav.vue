<template>
    <v-app-bar class="nav">
        <div class="d-flex align-center">
            Keeley Johansen
        </div>

        <v-spacer/>

        <router-link to="/" class="nav-button">
            <span>Home</span>
        </router-link>

        <router-link to="/Contact" class="nav-button">
            <span>Contact Info</span>
        </router-link>

         <router-link to="/Projects" class="nav-button">
            <span>Projects</span>
        </router-link>
    </v-app-bar>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style scoped>
.nav {
    color: black;
}

.nav-button {
    background-color: white;
    color: black;
    margin: 5px;
}
</style>