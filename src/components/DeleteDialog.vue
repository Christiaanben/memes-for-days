<template>
  <v-dialog
    width="500"
    v-model="show"
  >
    <v-card>
        <v-card-title class="headline grey lighten-2">
          Confirm Delete
        </v-card-title>

        <v-card-text class="mt-2">
          Are you sure you want to delete this lovely meme?
        </v-card-text>

        <v-divider/>

        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            text
            @click="cancel"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="deleteItem"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'DeleteDialog',
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  methods: {
    deleteItem() {
      this.show = false
      this.$emit('delete', this.value)
    },
    cancel() {
      this.show = false
    },
  },
  computed: {
    show: {
      get() {
        return !!this.value
      },
      set() {
        this.$emit('input', null)
      }
    }
  }
}
</script>

<style scoped>

</style>
