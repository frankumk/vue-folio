<template>
  <div id="projects">
    <v-container fluid>
      <h1>Projects</h1>
      <v-row>
        <ProjectCard v-for="project in projects" :key="project.id" :image="project.img" :name="project.name" :description="project.description" />
      </v-row>

      <!-- <v-card v-for="project in projects" class="project-card" :key="project.name">
        <v-row>
          <v-col cols="3">
            <img class="project-img" :src="project.img" />
          </v-col>
          <v-col cols="3">
            <h3>{{ project.name }}</h3>
          </v-col>
        </v-row>
      </v-card> -->
    </v-container>
  </div>
</template>

<script>
const faker = require('faker')
import ProjectCard from './ProjectCard'

  export default{

    data: () => ({
      projects: [
          { id: 0, name: 'Doombuster', img: `${faker.image.nature()}`, description: 'very beautiful'} ,
          { id: 1, name: 'Mummy Mario', img: `${faker.image.nature()}`, description: 'very beautiful' },
          { id: 2, name: 'Bookstore', img: `${faker.image.nature()}`, description: 'very beautiful'},
          { id: 3, name: 'Birthday Tracker', img: `${faker.image.nature()}`, description: 'very beautiful'} ,
          { id: 4, name: 'To Do List', img: `${faker.image.nature()}`, description: 'very beautiful' },
          { id: 5, name: 'Student DB', img: `${faker.image.nature()}`, description: 'very beautiful'}
        ]
    }),
    components: {
      ProjectCard
    }
  }

</script>

<style scoped>
  #projects{
    background-color: "#83B4B3";
  }

</style>
