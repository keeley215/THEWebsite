<template>
  <v-app-bar class="nav">
    <div class="d-flex align-center">
      Keeley Johansen
    </div>

    <v-spacer />

    <router-link to="/" class="nav-button">
      <span>Home</span>
    </router-link>

    <router-link to="/Contact" class="nav-button">
      Contact Info
    </router-link>

    <router-link to="/Projects" class="nav-button">
      <span>Projects</span>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNav"
};
</script>

<style scoped>
.nav {
  color: black;
}

.nav-button {
  background-color: white;
  color: black;
  margin-left: 7em;
}

a {
  text-decoration: none;
}
</style>
