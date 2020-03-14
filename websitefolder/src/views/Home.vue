<!--The route /-->

<template>
  <div>
    <TopNav />

    <!--Home page-->
    <template v-if="currentPage === 0">
      <MainPage />
    </template>

    <!--Contact Info-->
    <template v-if="currentPage === 1">
      <Contact />
    </template>

    <!--Personal Projects-->
    <template v-if="currentPage === 2">
      <Projects />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import TopNav from "@/components/TopNav.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "home",
  components: {
    MainPage,
    TopNav,
    Contact,
    Projects
  },
  data: () => ({
    currentPage: 0
  })
};
</script>
