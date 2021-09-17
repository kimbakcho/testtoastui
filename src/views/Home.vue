<template>
  <div class="home">
    <Editor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Editor from '@/components/Editor.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    Editor,
  },
});
</script>
