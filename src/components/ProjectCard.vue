<template>
  <v-col cols="3">
      <v-card
        hover
        tile
        raised
        href="https://www.google.com"
      >
        <v-img :src="image" :alt="name" height="200px">
        </v-img>
        <v-card-title>
          {{name}}
        </v-card-title>
        <v-card-subtitle>
          {{description}}
        </v-card-subtitle>
      </v-card>
  </v-col>
</template>

<script>
  export default{
    name:  'ProjectCard',
    props: [
      'image',
      'name',
      'description'
    ]

  }

</script>

<style scoped>
  a{
    text-decoration: none;
  }
</style>