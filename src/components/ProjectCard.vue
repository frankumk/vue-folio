<template>
  <v-col md="3" sm="6">
      <v-card
        height="100%"
        hover
        tile
        raised
        :href="link"
        target="_blank"
      >
        <v-img :src="image" :alt="name" height="200px" position="left">
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
      'description',
      'link'
    ]

  }

</script>

<style scoped>
  a{
    text-decoration: none;
  }
</style>