<template>
  <v-app-bar class="nav">
    <div class="d-flex align-center name">
      KEELEY JOHANSEN
    </div>

    <v-spacer />

    <router-link to="/" class="nav-button">
      HOME
    </router-link>

    <router-link to="/Contact" class="nav-button">
      CONTACT
    </router-link>

    <router-link to="/Projects" class="nav-button">
      PROJECTS
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
  margin-right: 5em;
  text-decoration: none;
}

.nav-button:hover {
  color: #29b6f6;
}

.name {
  margin-left: 2em;
  font-weight: 500;
  font-size: 30px;
}
</style>
