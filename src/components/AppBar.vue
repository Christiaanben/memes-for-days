<template>
  <v-app-bar
      app
      dark
      class="stuff"
  >
    <div class="d-flex align-center">
      <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="https://i.imgur.com/XbSIj7E.png"
          transition="scale-transition"
          width="50"
      />
      <h1
          class="text-h4"
      >
        Memes 4 Dayzzz
      </h1>
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
</template>

<script>
export default {
name: "AppBar"
}
</script>

<style scoped>
.stuff{
  background: linear-gradient(to right, #daed5a 0%, #0097A7 100%);
}
</style>
