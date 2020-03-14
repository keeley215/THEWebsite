<template>
  <v-container class="page-body">
    <!--Weird scrolly thing-->
    <v-parallax
      width="100%"
      min-height="100%"
      height="700"
      :src="require('@/assets/RickAndMorty.jpg')"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center front-page-messages" cols="12">
          <h1 class="display-1  mb-4">Keeley Johansen</h1>
          <router-link to="/Projects">
            <h4 class="subheading"><u>View My Projects!</u></h4>
          </router-link>
        </v-col>
      </v-row>
    </v-parallax>

    <!--Box containing all of my projects-->
    <v-card class="mx-auto content-container">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="project in projects"
            :key="project.title"
            :cols="project.flex"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="content-items" elevation="18">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{
                      project.title
                    }}</v-list-item-title>
                    <v-list-item-subtitle
                      >{{ project.type }} Project</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-img
                  :src="project.imageSource"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="transition-fast-in-fast-out project-pop-ups light-blue darken-2 white--text"
                      style="height: 100%;"
                    >
                      {{ project.description }}
                      <div class="project-buttons">
                        <v-btn>
                          Find Out More
                        </v-btn>
                      </div>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <u>Things to do:</u> <br />
    1. Contact page <br />
    2. Fix primary color issue<br />
    3. add social media links on the main page somewhere<br />
    4. Make project page <br />
    5. Find out how large the users screen is and make the parallax that
  </v-container>
</template>

<script>
export default {
  name: "MainPage",

  data: () => ({
    //place where i store project information that is displayed
    projects: [
      {
        title: "Rubic Cube Encryption",
        description:
          "The goal of this project was to create an encryption scheme based on a 5x5 rubic cube. The code can decode and encode messages.",
        type: "School",
        imageSource: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        link: "",
        flex: 4
      },
      {
        title: "Cat Fact Spammer",
        description:
          "The goal of this project was to create a program that lets you enter in a phone number, the carrier, and how many messages you would want to send, and then the program would send x many facts about cats to the user.",
        type: "Personal",
        imageSource: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        link: "",
        flex: 4
      },
      {
        title: "Compiler & Grader",
        description:
          "Took all the questions and their answers out of a file and compiles and grades your code/answers.",
        type: "School",
        imageSource: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        link: "",
        flex: 4
      },
      {
        title: "Database Design for Colleges",
        description:
          "Designed a database to store all the information in 3 college catalogs.",
        type: "School",
        imageSource: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        link: "",
        flex: 4
      },
      {
        title: "Project 5",
        description: "description 5",
        type: "Work",
        imageSource: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        link: "",
        flex: 4
      }
    ]
  })
};
</script>

<style scoped>
.content-container {
  padding: 15px;
}
.content-items {
  margin: 30px 15px;
}
.page-body {
  padding: 0;
  margin: 0;
  max-width: 2000px;
}

.front-page-messages {
  color: primary;
}

.project-buttons {
  margin-top: 1em;
  padding-bottom: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-pop-ups {
  opacity: 0.85;
  padding: 15px;
}
</style>
