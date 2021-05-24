<template>

  <!-- <div v-for="project in projects" class="project-card">
    <img class="project-img" :src="project.img" />
    <h3>{{ project.name }}</h3>
  </div> -->
  
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
