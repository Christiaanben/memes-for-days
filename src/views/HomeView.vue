<template>
<div>
  <h1 class="heading my-3">
    My favourite memes
  </h1>
  <meme-form />
  <meme-list />
</div>
</template>

<script>
import MemeForm from '@/components/MemeForm'
import MemeList from '@/components/MemeList'
export default {
name: "HomeView",
  components: { MemeList, MemeForm },
}
</script>

<style scoped>

</style>
