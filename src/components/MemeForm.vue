<template>
<v-form>
<v-file-input
  label="Upload meme"
/>
  <v-text-field
    label="Meme title"
  />
  <v-text-field
    label="Reason this is funny"
  />
  <v-btn>
    Add Meme
  </v-btn>
</v-form>
</template>

<script>
export default {
name: "MemeForm"
}
</script>

<style scoped>

</style>
