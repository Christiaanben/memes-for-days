<template>
<div>
  <v-data-table
    :headers="headers"
    :items="$store.getters.memes"
    :items-per-page="5"
    class="elevation-2 mt-2 px-2"
  >
    <template v-slot:item.meme="{ item }">
      <v-img
          class="rounded my-1"
          max-height="128"
          max-width="128"
        :src="item.image"
      />
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        class="mr-2"
        @click="editTarget=item"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        @click="deleteTarget=item"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  <edit-meme-dialog
    v-model="editTarget"
  />
  <delete-dialog
    v-model="deleteTarget"
    @delete="deleteMeme"
  />
</div>
</template>

<script>
import DeleteDialog from '@/components/DeleteDialog'
import EditMemeDialog from '@/components/EditMemeDialog'
export default {
name: "MemeList",
  components: { EditMemeDialog, DeleteDialog },
  data: () => ({
    headers: [
      {text: 'Meme', value: 'meme', width: 80},
      {text: 'Title', value: 'title', width: 80},
      {text: 'Reason this is funny', value: 'description', width: 200},
      {text: 'Actions', value: 'actions', width: 80}
    ],
    deleteTarget: null,
    editTarget: null,
  }),
  methods: {
    deleteMeme(meme) {
      this.$store.commit('REMOVE_MEME', meme)
    }
  },
}
</script>

<style scoped>

</style>
