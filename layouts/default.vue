<template>
    <v-app dark>
      <v-main class="bg">
           <Nuxt />
       </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
    data () {
      return {
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
  </script>
  <style>
  .bg {
      background: #001727;
  }
  </style>