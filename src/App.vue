<template>
  <v-app>
    <app-bar/>

    <v-main class="d-flex">
      <v-layout justify-center>
        <home-view class="justify-center mx-16"/>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeView from './views/HomeView.vue'
import AppBar from './components/AppBar.vue'

@Component({
  components: {
    HomeView,
    AppBar,
  },
})
export default class App extends Vue {}
</script>


