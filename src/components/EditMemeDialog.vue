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
              :src="value.image"
              class="rounded"
          />
          <validation-provider rules="required" v-slot="{ errors }">
            <v-text-field
                label="Meme title"
                v-model="value.title"
                :error-messages="errors"
            />
          </validation-provider>
          <validation-provider rules="required" v-slot="{ errors }">
            <v-text-field
                v-model="value.description"
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
      type: Meme,
      default: null,
    },
  },
  methods: {
    save () {
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
