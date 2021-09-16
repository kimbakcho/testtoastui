<template>
  <div class="hello">
    <div id="editor"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Editor, {HTMLMdNode, MdNode, PluginContext, PluginInfo} from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './common.css'
import {popupPlugin} from "@/toustuiplugin/popupPlugin";
import {innerLinkPlugin} from "@/toustuiplugin/innerLinkPlugin";
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted() {
    let pluginOption = {
      context: this
    }
    const editor = new Editor({
      el: document.querySelector('#editor') as any,
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      plugins: [[popupPlugin,pluginOption],[innerLinkPlugin,pluginOption]],
    })
  },

});
</script>
<style>

</style>
