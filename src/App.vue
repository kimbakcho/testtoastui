<template>
  <div>
    <transition :name="transitionName" >
      <router-view class="child-view"/>
    </transition>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data () {
    return {
      transitionName: 'slide-down'
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.path == "/linkBoard"){
        this.transitionName = 'slide-up'
      }
      if(from.path == "/linkBoard"){
        this.transitionName = 'slide-down'
      }
    }
  },

});
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .75s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all 1s cubic-bezier(.55,0,.1,1);
  width: 100%;
  height: 100%;
}

.slide-up-enter, .slide-down-leave-active{
  transform: translate(0, 100%);
  transition: all 1s cubic-bezier(.55,0,.1,1);
}


</style>
