<template>
  <div class="about">
    <v-container>
      <v-col
        class="d-flex"
        cols="12"
        md="4"
      ></v-col>
        <v-row class="ma-n3" align="center" justify="center">
          <v-col md="6">
            <p id="intro">Hi My Name is</p>
            <h1 id="fullname">Kayla Frankum</h1>
            <h2>I like to build things.</h2>
            <p>I am a web developer. I have a diverse background in engineering and teaching.
              Currently I work as a project manager for an IT team that
              supports HRIS software solutions. I like living where
              technology meets teaching, where the two join to solve real
              human dilemmas. I like learning how things work. I am a bootcamp
              grad with an electrical engineering degree. I want to build meaningful
               tools with gorgeous ui and improve the user experience. I look forward to working with you.</p>
            <h4 id="slogan">"I am not what happened to me. I am who I choose to become."</h4>
          </v-col>

          <v-col md="6">
            <v-img id="my-photo" src="../assets/JoshuaT.jpg" alt="picture of me" />
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default({

})
</script>

<style scoped>
  #fullname{
    /* font-family: 'Mansalva', cursive;
    font-family: 'Bradley Hand', cursive; */
    font-family: "Chalkduster", fantasy;
    font-size: 2.5rem;
  }
</style>