<template>
  <div class="page-body">
    <!--Weird scrolly thing-->
    <div class="parallax-container">
      <v-parallax
        width="100%"
        min-height="100%"
        height="700"
        :src="require('@/assets/Brick_transparent background.png')"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center front-page-messages" cols="12">
            <h1 class="display-1 mb-4">Keeley Johansen</h1>
            <router-link to="/Projects">
              <h4 class="subheading custom-subheading">
                <u>View My Projects!</u>
              </h4>
            </router-link>
          </v-col>
        </v-row>
      </v-parallax>

      <!--Box containing all of my projects-->
      <v-card class="mx-auto content-container">
        <v-container fluid>
          <div class="project-header">
            <div class="header">Hello</div>
            <div class="sub-text">Welcome to my Website</div>
          </div>
          <v-card flat class="project-container">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project.title"
                :cols="project.flex"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card class="content-items" light outlined>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle
                          >{{ project.type }} Project</v-list-item-subtitle
                        >
                        <v-list-item-title class="project-item-header">{{
                          project.title
                        }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="transition-fast-in-fast-out project-pop-ups"
                        style="height: 100%;"
                      >
                        {{ project.description }}
                        <div class="project-button">
                          <button>Find Out More</button>
                        </div>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-card>
    </div>
  </div>
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
.project-item-header {
  margin-top: 0.5em;
  font-size: 20pt;
}
.content-container {
  border-radius: 0 !important;
  padding: 4em;
}
.content-items {
  padding: 1em;
  border-radius: 0 !important;
  height: 16em;
}
.header {
  text-align: center;
  font-size: 50pt;
  font-family: cursive;
  font-weight: 600;
}
.sub-text {
  text-align: center;
  font-size: 30pt;
  font-family: "Courier New", Courier, monospace;
  font-weight: 300;
  padding-bottom: 2em;
}
.page-body {
  padding: 0;
  margin: 0;
}
.front-page-messages {
  color: primary;
}
.project-button {
  padding-bottom: 0.5em;
  margin-top: 0.75em;
  color: #29b6f6;
  font-style: italic;
}
.project-pop-ups {
  opacity: 0.85;
  padding-left: 1em;
  padding-right: 1em;
  font-size: 17px;
}
.custom-subheading {
  color: white;
}
.project-container {
  border-radius: 0 !important;
  padding: 4em;
}
</style>
