import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../components/Contact.vue";
import Projects from "../components/Projects.vue";

Vue.use(VueRouter);

const routes = [
  //the landing page
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/Projects",
    name: "projects",
    component: Projects
  }
];

const router = new VueRouter({
  routes
});

export default router;
