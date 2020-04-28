<template>
  <div>
    <TopNav />

    <!--Project Body-->
    <v-img class="project-body" :src="require('@/assets/brick-wallpaper2.jpg')">
      <v-card class="project-timeline">
        <div class="project-title">My Project Page</div>
        <v-timeline>
          <v-timeline-item fill-dot color="white" v-for="project in projects" :key="project">
            <template v-slot:opposite>
              <b>
                <span v-text="project.year" />
              </b>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{ project.title }}</v-card-title>
              <div class="sub-title">{{ project.sub_title }}</div>
              <v-card-text>{{ project.description }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-img>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";

export default {
  name: "projects",
  components: {
    TopNav
  },

  data: () => ({
    projects: [
      {
        title: "Rubic Cube",
        sub_title: "Java/Encryption",
        description:
          "The goal of this project was to create an encryption scheme based on a 5x5 rubic cube. The code can decode and encode messages.",
        type: "School",
        year: "2017"
      },
      {
        title: "Cat Fact Spammer",
        sub_title: "Java/Email",
        description:
          "The goal of this project was to create a program that lets you enter in a phone number, the carrier, and how many messages you would want to send, and then the program would send x many facts about cats to the user.",
        type: "Personal",
        year: "2017"
      },
      {
        title: "Compiler & Grader",
        sub_title: "Java",
        description:
          "Took all the questions and their answers out of a file and compiles and grades your code/answers.",
        type: "School",
        year: "2018"
      },
      {
        title: "Database Design for Colleges",
        sub_title: "Database",
        description:
          "Designed a database to store all the information in 3 college catalogs.",
        type: "School",
        year: "2018"
      },
      {
        title: "Work at Highmark Inc",
        sub_title: "Java/Frontend/PEGA",
        description:
          "Job as Java/Frontend/PEGA developer. Practiced kanban and agile scrum methadologies. Built projects from the ground up and maintained existing projects.",
        type: "Work",
        year: "2019"
      },
      {
        title: "Medical Software",
        sub_title: "Frontend",
        description:
          "Developed an application from the ground up using VUE.js, CSS, HTML5, axios, git, and scrum methodologies.",
        type: "Work",
        year: "2019"
      },
      {
        title: "Homeschool Application",
        sub_title: "Frontend/Backend",
        description:
          "Developed an application from the ground up using VUE.js, Django, and Auth0. ",
        type: "Personal",
        year: "2020"
      },
      {
        title: "Personal Portfolio Website",
        sub_title: "Frontend/UI",
        description:
          "Developed an application from the ground up using VUE.js, CSS, HTML5, and git. This is also the first project that i had to design the full UI of.",
        type: "Personal",
        year: "2020"
      }
    ]
  })
};
</script>

<style scoped>
.project-body {
  border-radius: 0;
  background-color: rgb(84, 130, 156);
  padding: 2em;
  align-items: center;
}
.project-title {
  text-align: center;
  font-size: 45pt;
  padding-bottom: 1em;
}
.project-timeline {
  background-color: #85cdfa;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8em;
  padding-right: 8em;
  padding-bottom: 8em;
  padding-top: 6em;
  width: 80%;
  color: white;
}
.sub-title {
  margin-left: 1em;
  margin-top: -1em;
}
</style>
