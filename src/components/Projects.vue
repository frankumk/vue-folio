<template>
  <div>
  <h1>Projects</h1>

  <v-card v-for="project in projects" class="project-card">
    <v-row>
      <v-col cols="3">
        <img class="project-img" :src="project.img" />
      </v-col>
      <v-col cols="3">
        <h3>{{ project.name }}</h3>
      </v-col>
    </v-row>
  </v-card>
  </div>
</template>

<script>
const faker = require('faker')

  export default{

    data: () => ({
      projects: [
          { name: 'Birthday Tracker', img: './assets/JoshuaT.jpg'} ,
          { name: 'Node.js To Do List', img: `${faker.image.nature()}` },
          { name: 'Full Stack Student Database', img: `${faker.image.nature()}`}
        ]
    }),
  }

</script>

<style scoped>

</style>
