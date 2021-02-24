<template>
  <validation-observer slim v-slot="{invalid}">
    <v-form>
      <validation-provider rules="required" v-slot="{ errors }">
        <v-file-input
            v-model="file"
            label="Upload meme"
            :error-messages="errors"
        />
      </validation-provider>
      <validation-provider rules="required" v-slot="{ errors }">
        <v-text-field
            label="Meme title"
            v-model="meme.title"
            :error-messages="errors"
        />
      </validation-provider>
      <validation-provider rules="required" v-slot="{ errors }">
        <v-text-field
            v-model="meme.description"
            label="Reason this is funny"
            :error-messages="errors"
        />
      </validation-provider>
      <v-btn
          color="primary"
          :disabled="invalid"
          @click="addMeme"
      >
        Add Meme
      </v-btn>
    </v-form>
  </validation-observer>

</template>

<script>

import Meme from '@/models/meme'

export default {
  name: 'MemeForm',
  components: {},
  data: () => ({
    meme: new Meme(),
    file: null,
  }),
  methods: {
    addMeme () {
      this.meme.image = URL.createObjectURL(this.file)
      this.$store.commit('ADD_MEME', this.meme)
      this.meme = new Meme()
      this.file = null
    },
  },
}
</script>

<style scoped>

</style>
