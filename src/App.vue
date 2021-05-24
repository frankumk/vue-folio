<template>
  <v-app>
  <div id="app">
    <v-card class="overflow-hidden">
    <div id="nav">
      <Header />
    </div>

    <div id="main">
      <router-view/>
    </div>

    <v-footer color="#83B4B3">
      <v-col
        class="text-center"
      >
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        icon
      >
      <v-icon color="black">{{ icon }}</v-icon>
      </v-btn>
      </v-col>
    </v-footer>
    </v-card>
  </div>
  </v-app>
</template>
<script>

import Header from './components/Header.vue'

  export default{

    data: () => ({
      tab: null,
      icons: [
        'mdi-email',
        'mdi-github',
        'mdi-linkedin',
        'mdi-instagram',
      ]
    }),
    components: {
      Header
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
</style>
