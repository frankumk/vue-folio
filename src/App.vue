<template>
  <div id="app">
    <div id="nav">
      <v-toolbar color="#83B4B3" dark>
    <!-- <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon> -->
        <v-tabs v-model="tab"> 
        <v-tab left to="/">Kayla Frankum</v-tab>
        <v-spacer></v-spacer>
        <v-tab right grow to="/resume">Resume</v-tab>
      </v-tabs>
    
      </v-toolbar>
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
  </div>
</template>
<script>

  export default{
    data: () => ({
      tab: null,
      icons: [
        'mdi-email',
        'mdi-github',
        'mdi-linkedin',
        'mdi-instagram',
      ]
    })
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
