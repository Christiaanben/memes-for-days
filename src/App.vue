<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Christiaanben/memes-for-days"
        target="_blank"
        text
      >
        <span class="mr-2">Github source</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="d-flex">
      <v-layout justify-center>
        <home-view class="justify-center"/>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import HomeView from '@/views/HomeView'

export default {
  name: 'App',

  components: {
    HomeView,
  },

  data: () => ({
    //
  }),
};
</script>
