<template>
  <v-app>
  <div id="app">
    <v-card class="overflow-hidden">
      <div id="nav">
        <Header />
      </div>

      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="1000"
        color="grey lighten-3"
      >
        <v-container style="height: 1000px;">
          <div id="main">
            <About />
            <Projects />
          </div>

        </v-container>
    </v-sheet>

     <v-footer color="#83B4B3">
          <v-col
            class="text-center"
          >
          <v-btn
            v-for="contact in contacts"
            :key="item"
            class="mx-4"
            icon
            :href="contact.link"
            target="_blank"
          >
        <v-icon color="black">{{ contact.icon }}</v-icon>
        </v-btn>
        </v-col>
      </v-footer>

    </v-card>
  </div>
  </v-app>
</template>
<script>

import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

  export default{

    data: () => ({
      tab: null,
      contacts: {
        email: {icon: 'mdi-email', link: "mailto:frankumk@gmail.com"},
        github: {icon: 'mdi-github', link: "https://github.com/frankumk"},
        //https://github.com/frankumk
        linkedin: {icon: 'mdi-linkedin', link: "https://www.linkedin.com/in/kayla-frankum/"},
        //https://www.linkedin.com/in/kayla-frankum/
        instagram: {icon: 'mdi-instagram', link: "https://www.instagram.com/kaylock_may/"}
        //https://www.instagram.com/kaylock_may/
      }
    }),
    components: {
      Header,
      About,
      Projects
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#main{
  padding-top: 300px;
}
</style>
