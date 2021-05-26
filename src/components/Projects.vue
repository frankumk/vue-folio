<template>
  <div id="projects">
    <v-container fluid>
      <h1 id="projects-title">PROJECTS</h1>
      <v-row>
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :image="project.img"
          :name="project.name"
          :description="project.description"
          :link="project.link" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
const faker = require('faker')
import ProjectCard from './ProjectCard'

  export default{

    data: () => ({
      projects: [
          { id: 0, name: 'Doombuster', img: require("../assets/Doombuster.png"), description: 'Add/upvote songs & answer trivia in shared room to select next song.', link: 'https://youtu.be/GUi3Z5kBZHw' },
          { id: 1, name: 'Mummy Mario', img: require("../assets/Mummymario.png"), description: 'One level of Mario inspired game. Dodge monsters & collect items.', link: 'https://youtu.be/B7Mrv-OFl8A' },
          { id: 2, name: 'Bookstore', img: require("../assets/Bookstore.png"), description: 'Ecommerce site with admin tools, guest & customer checkout', link: 'https://jaykaytay-books.herokuapp.com/allBooks' },
          { id: 6, name: 'Meter', img: require("../assets/Meter.png"), description: "Leave a review for your favorite or worst experiences.", link: 'https://github.com/frankumk/Leave_Review'},
          { id: 3, name: 'Birthday Tracker', img: require("../assets/Birthdays.png"), description: "Get reminders for friends' birthdays.", link: 'https://github.com/frankumk/dealers_choice_react' } ,
          { id: 4, name: 'To Do List', img: require("../assets/ToDoList.png"), description: 'Multi-list maker', link: 'https://github.com/frankumk/to_do' },
          { id: 5, name: 'Student DB', img: require("../assets/StudentDB.png"), description: 'DB for tracking student information at multiple campus locations', link:'https://github.com/frankumk/JPFP-2010-RM-Flex'}
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

//Users/chi/Practice/vue-folio/src/assets/Mummymario.png
