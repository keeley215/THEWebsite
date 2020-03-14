<template>
  <div>
    <TopNav />
    <div class="contact-container">
    <v-card class="contact-body">
      <div class="contact-nav">
        <!-- <v-card flat tile width="100%" class="red lighten-1 text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-card> -->
        This is where the logos will go for social media
      </div>
      <div class="contact-nav">
        Aw man this has the photo in it.
      </div>
      <!-- <h1 class="contact-title">ABOUT ME</h1>
      <img :src="require('@/assets/me.jpg')"/>
      Hey everyone. Thats me in that photo. I know what you are thinking. Man this is one handsome ginger. You would be correct, but thats not what we are here to talk about.
      <br>
      <v-card>
        <b>Contact Information:</b><br>
        <u>Email:</u> keeley5456@gmail.com <br>
        <u>Github:</u> https://github.com/keeley215 <br>
        <u>Linkedin:</u> https://www.linkedin.com/in/keeley-johansen/ <br>
      </v-card> -->
    </v-card>
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
    icons: [mdiGithub, mdiLinkedin],
    items: ["default", "absolute", "fixed"],
    variant: "default"
  })
};
</script>
<style scoped>
  .contact-body {
    display: flex;
    width: 33%;
    justify-content: center;
  }
  .contact-nav {
    display: block;
  }

  .contact-container {
    display: flex;
    align-self: end;
    justify-content: right;
  }
  .contact-title {
    font-size: 70px;
    color: #29b6f6;
  }
</style>