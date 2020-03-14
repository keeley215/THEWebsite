<template>
  <div>
    <TopNav />
    <div class="content-wraper">
      <div class="contact-container">
        <v-card class="contact-left-side">
          <div class="contact-title">
            <h1>Keeley Johansen</h1>
            <h3>Developer//Innovator//<br>
            Strategist//Explorer
            </h3>
          </div>
        </v-card>
      </div>
      <div class="contact-container">
        <div class="contact-right-side">
          <div>
            <v-card tile width="100%" class="text-center">
              <v-card-text class="contact-nav-1">
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon :href="icon.links">
                  <v-icon light size="24px">{{ icon.iconPhoto }}</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </div>
          <div>
            <v-card tile class="contact-nav-2">
              <div class="contact-nav-2-top">
                <div>
                  <img :src="require('@/assets/me.jpg')"/>
                </div>
                <div class="content-nav-2-top-right">
                  <h2>Keeley Johansen</h2><br>
                  Software Developer - Knowledge seeking in an ever chaging industry
                </div>
              </div>
              <div class="contact-nav-2-body">
                <i>About Me</i><br>
                <hr class="content-line">
                Hey everyone. Thats me in that photo. I know what you are thinking. Man this is one handsome ginger. You would be correct, but thats not what we are here to talk about.
                <b>Contact Information:</b><br>
                <u>Email:</u> keeley5456@gmail.com <br>
                <u>Github:</u> https://github.com/keeley215 <br>
                <u>Linkedin:</u> https://www.linkedin.com/in/keeley-johansen/
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import { mdiGithub, mdiLinkedin } from "@mdi/js";

export default {
  name: "contact",
  components: {
    TopNav
  },

  data: () => ({
    icons: [
      {
      iconPhoto: mdiGithub,
      links: "https://github.com/keeley215",
      },
      {
      iconPhoto: mdiLinkedin,
      links: "https://www.linkedin.com/in/keeley-johansen/",
      }
    ]
  })
};
</script>
<style scoped>
  .content-wraper {
    display: flex;
    justify-content: space-between;
    background-color: lightskyblue;
    height: 100%;
  }
  .contact-container{
    display: flex;
    justify-content: right;
    margin-top: 2em;
    margin-right: 2em;
  }
  .contact-left-side {
    margin-left: 4em;
    margin-top: 4em;
    display: flex;
  }
  .contact-right-side{
    width: 38%;
  }
  .contact-nav-1 {
    display: block;
    margin-bottom: 2em;
    padding: .5em;
  }
  .contact-nav-2 {
    display: block;
    margin-bottom: 2em;
    padding: 2em;
  }
  .contact-nav-2-top {
    display: flex;
  }
  .content-nav-2-top-right {
    margin-left: 2em;
  }
  .content-line {
    border: 1px solid grey;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .contact-nav-2-body {
    margin-top: 4em;
  }
  .contact-title {
    display: inline;
    font-size: 30px;
    color: #29b6f6;
  }
</style>