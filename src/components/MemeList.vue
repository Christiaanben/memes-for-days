<template>
<div>
  <v-data-table
    :headers="headers"
  />
</div>
</template>

<script>
export default {
name: "MemeList",

  data: () => ({
    headers: [
      {text: 'Meme'},
      {text: 'Title'},
      {text: 'Reason this is funny'},
      {text: 'Actions'}
    ]
  }),
}
</script>

<style scoped>

</style>
