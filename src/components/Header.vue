//gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"

<template>
  <div>
    <v-app-bar
      absolute
      color="#83B4B3"
      dark
      shrink-on-scroll
      height="250px"
      src="../assets/HulkSunset.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>


      <v-menu
        bottom
        right
        class="hidden-sm-and-up"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon>
          </v-btn>
        </template>

            <v-list>
              <v-list-item>
                <v-list-item-title @click="scroll('intro')">ABOUT</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-title @click="scroll('projects-title')">PROJECTS</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-title @click="scroll('skills-title')">SKILLS</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-title@click="openResume" target="_blank">RESUME</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

      <v-app-bar-title></v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-btn
        icon
        target="_blank"
        href="mailto:frankumk@gmail.com"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>



      <template v-slot:extension>
        <v-tabs align-with-title class="hidden-xs-only">
          <v-tab @click="scroll('intro')">About</v-tab>
          <v-tab @click="scroll('projects-title')">Projects</v-tab>
          <v-tab @click="scroll('skills-title')">Skills</v-tab>
          <v-tab @click="openResume" target="_blank">Resume</v-tab>
        </v-tabs>
      </template>


    </v-app-bar>
    
    </div>
</template>

<script>

  export default{

    methods: {
      scroll(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      },

      openResume() {
        const pdf = require('../assets/Resume.pdf');
        window.open(pdf);
      }
    },
  }

</script>

<style scoped>
 .v-tab{
   font-size: 1.5rem;
 }

</style>

