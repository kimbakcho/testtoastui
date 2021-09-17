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
import '@/components/common.css'
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';


export default Vue.extend({

  mounted() {
    let pluginOption = {
      context: this
    }
    const viewer = new Viewer({
      el: document.querySelector('#viewer') as any,
      plugins: [[popupPlugin,pluginOption],[innerLinkPlugin,pluginOption]],
      initialValue: "$$popup\n" +
          "text$팝업\n" +
          "title$타이틀\n" +
          "content$ <div style=\"font-size:46px\"> ttt</div> \n" +
          "$$\n" +
          "테스트 내용\n" +
          "\n" +
          "테스트 내용 \n" +
          "$$space\n" +
          "$$\n" +
          "$$innerLink\n" +
          "text$innerLinkTest\n" +
          "link$https://ui.toast.com/tui-editor\n" +
          "$$\n" +
          "\n" +
          "Inner Link",

    });

  },


})
</script>

<style scoped>

</style>