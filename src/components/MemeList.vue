<template>
<div>
  <v-data-table
    :headers="headers"
    :items="$store.getters.memes"
  >
    <template v-slot:item.meme="{ item }">
      <v-img
          class="rounded my-1"
          max-height="128"
          max-width="128"
        :src="item.image"
      />
    </template>
    <template v-slot:item.actions>
      <v-icon
        class="mr-2"
      >
        mdi-pencil
      </v-icon>
      <v-icon>
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</div>
</template>

<script>
export default {
name: "MemeList",

  data: () => ({
    headers: [
      {text: 'Meme', value: 'meme'},
      {text: 'Title', value: 'title'},
      {text: 'Reason this is funny', value: 'description'},
      {text: 'Actions', value: 'actions'}
    ]
  }),
}
</script>

<style scoped>

</style>
