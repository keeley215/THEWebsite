<template>
  <div class="content">
    <TopNav />
    <div class="content-wraper">
      <div class="contact-container">
        <div class="contact-left-side">
          <div class="contact-title">
            <h1 class="contact-title-name1">KEELEY</h1><h1 class="contact-title-name2">JOHANSEN</h1>
            <h3>
              Developer//Innovator//<br />
              Dynamic//Leader
            </h3>
          </div>
        </div>
      </div>
      <div class="contact-container">
        <div class="contact-right-side">
          <div>
            <v-card tile width="100%" class="text-center">
              <v-card-text class="contact-nav-1">
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4"
                  icon
                  :href="icon.links"
                >
                  <v-icon light size="24px">{{ icon.iconPhoto }}</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </div>
          <div>
            <v-card tile class="contact-nav-2">
              <div class="contact-nav-2-top">
                <div>
                  <img :src="require('@/assets/me.jpg')" />
                </div>
                <div class="content-nav-2-top-right">
                  <div class="contact-card-name">Keeley Johansen</div>
                  <div class="contact-card-description">
                    <i>Software Developer</i> - Knowledge seeking in an ever chaging
                    industry
                  </div>
                </div>
              </div>
              <div class="contact-nav-2-body">
                <i>About Me</i><br />
                <hr class="content-line" />
                <div class="body-paragraph">
                  I'm a recent college graduate (DEC 2018) trying to learn as much
                  as i can about everything. I'm currently a programmer but i have 
                  many interests outside of that.
                </div>
                <div class="body-paragraph">
                  Outside of programming im also a carpenter, roofer, bartender, 
                  longboarder, traveler, gamer, athlete, and realistate investor.
                  I like to do many things.
                </div>
                <div class="body-paragraph">
                  One of my personal traits that i am most proud of is my ability to 
                  dynamically make a team work together. I am a extroverted programmer 
                  who is very empathetic towards others.
                </div>
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
        links: "https://github.com/keeley215"
      },
      {
        iconPhoto: mdiLinkedin,
        links: "https://www.linkedin.com/in/keeley-johansen/"
      }
    ]
  })
};
</script>
<style scoped>
.content {
  background-image: require("img_girl.jpg");
  background-color: lightskyblue;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content-wraper {
  display: flex;
  justify-content: space-between;
}
.contact-container {
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
.contact-right-side {
  width: 38%;
}
.contact-nav-1 {
  display: block;
  margin-bottom: 2em;
  padding: 0.5em;
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
  color: white;
  background-color: lightskyblue;
}
.contact-card-name {
  font-size: 22px;
}
.contact-title-name1 {
  margin-top: -.63em;
  font-size: 105px;
}
.contact-title-name2 {
  margin-top: -.63em;
  font-size: 70px;
}
.body-paragraph {
  margin-top: 1em;
}
.contact-card-description {
  margin-top: 1em;
}

</style>
