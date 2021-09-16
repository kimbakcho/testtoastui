<template>
  <div class="hello">
    <div id="editor"></div>
    console 에
    <v-btn @click="printMarkDown">
      마크 다운 출력
    </v-btn>
    <v-btn @click="printHtml">
      Html 출력
    </v-btn>
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
  data(){
    return {
      editor: {} as Editor
    }
  },
  mounted() {
    let pluginOption = {
      context: this
    }
    this.editor = new Editor({
      el: document.querySelector('#editor') as any,
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      plugins: [[popupPlugin,pluginOption],[innerLinkPlugin,pluginOption]],
    })
  },
  methods:{
    printMarkDown(){
      console.log(this.editor.getMarkdown())
    },
    printHtml(){
      console.log(this.editor.getHTML())
    }
  }

});
</script>
<style>

</style>
