<template>
  <div>
    <div id="viewer">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import {MdNode, PluginInfo} from "@toast-ui/editor";
import {popupPlugin} from "@/toustuiplugin/popupPlugin";
import {innerLinkPlugin} from "@/toustuiplugin/innerLinkPlugin";


export default Vue.extend({

  mounted() {
    let pluginOption = {
      context: this
    }
    const viewer = new Viewer({
      el: document.querySelector('#viewer') as any,
      plugins: [[popupPlugin,pluginOption],[innerLinkPlugin,pluginOption]],
      initialValue: "$$popup\n" +
          "text=팝업\n" +
          "title=타이틀\n" +
          "content=팝업 내용\n" +
          "$$\n" +
          "테스트 내용\n" +
          "\n" +
          "테스트 내용 \n" +
          "$$space\n" +
          "$$\n" +
          "$$innerLink\n" +
          "text=innerLinkTest\n" +
          "link=https://triple.guide/\n" +
          "$$\n" +
          "\n" +
          "Inner Link",

    });

  },


})
</script>

<style scoped>

</style>