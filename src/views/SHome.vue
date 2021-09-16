<template>
    <div class="foo">
      test
      <button @click="back">
        back
      </button>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({

  methods:{
    back(){
      this.$router.back();
    }
  }
})
</script>
<style>
.foo {
  height: 100vh;
  background-color: white;
  z-index: 100;
}
</style>
