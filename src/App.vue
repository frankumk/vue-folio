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
        max-height="1300"
        color="grey lighten-3"
      >
        <v-container style="height: 1000px;">
          <div id="main">
            <About />
            <Projects />
            <Skills />
          </div>

        </v-container>
    </v-sheet>

     <v-footer color="#83B4B3">
          <v-col
            class="text-center"
          >
          <v-btn
            v-for="icon in icons"
            :key="icon.alt"
            class="mx-4"
            icon
            :href="icon.link"
            target="_blank"
            :alt="icon.alt"
          >
        <v-icon color="black">{{ icon.icon }}</v-icon>
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
import Skills from './components/Skills.vue'

  export default{

    data: () => ({
      tab: null,
      icons: [
        {alt: "email", icon: 'mdi-email', link: "mailto:frankumk@gmail.com"},
        {alt: "github", icon: 'mdi-github', link: "https://github.com/frankumk"},
        {alt: "linkedin", icon: 'mdi-linkedin', link: "https://www.linkedin.com/in/kayla-frankum/"},
        {alt: "instagram", icon: 'mdi-instagram', link: "https://www.instagram.com/kaylock_may/"}
      ]
    }),
    components: {
      Header,
      About,
      Projects,
      Skills
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
  font-weight: bold;
}


#nav a.router-link-exact-active {
  color: #42b983;
}

#main{
  padding-top: 300px;
}
</style>
