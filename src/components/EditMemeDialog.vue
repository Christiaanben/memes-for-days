<template>
  <v-dialog
      width="500"
      v-model="show"
  >
    <v-card
        v-if="show"
    >
      <validation-observer slim v-slot="{invalid}">
        <v-card-title class="headline grey lighten-2">
          Edit Meme
        </v-card-title>
        <v-form class="ma-4">
          <v-img
              :src="editedItem.image"
              class="rounded"
          />
          <validation-provider rules="required" v-slot="{ errors }">
            <v-text-field
                label="Meme title"
                v-model="editedItem.title"
                :error-messages="errors"
            />
          </validation-provider>
          <validation-provider rules="required" v-slot="{ errors }">
            <v-text-field
                v-model="editedItem.description"
                label="Reason this is funny"
                :error-messages="errors"
            />
          </validation-provider>
        </v-form>


        <v-divider/>

        <v-card-actions>
          <v-spacer/>
          <v-btn
              color="primary"
              text
              @click="show = null"
          >
            Cancel
          </v-btn>
          <v-btn
              color="primary"
              @click="save"
              :disabled="invalid"
          >
            Save
          </v-btn>
        </v-card-actions>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>

<script>
import Meme from '@/models/meme'

export default {
  name: 'EditMemeDialog',
  components: {},
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    editedItem: new Meme(),
  }),
  watch: {
    value(newValue) {
      if (newValue !== null) {
        this.editedItem = new Meme(JSON.parse(JSON.stringify(newValue)))
      }
    }
  },
  methods: {
    save () {
      this.$store.commit('SET_MEME', {
        newMeme: this.editedItem,
        oldMeme: this.value
      })
      this.$emit('input', null)
    },
  },
  computed: {
    show: {
      get () {
        return !!this.value
      },
      set () {
        this.$emit('input', null)
      },
    },
  },
}
</script>

<style scoped>

</style>
