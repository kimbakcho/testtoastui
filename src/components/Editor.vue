<template>
  <div class="hello">
    <div id="editor"></div>
    console 에
    <v-text-field v-model="testData" @change="onchange">

    </v-text-field>
    <v-btn @click="printMarkDown">
      마크 다운 출력
    </v-btn>
    <v-btn @click="sendFlutterWebviewMessage">
      Flutter webview로 통신
    </v-btn>
    <v-btn @click="printHtml">
      Html 출력
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Editor, {EditorCore, HTMLMdNode, MdNode, PluginContext, PluginInfo} from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './common.css'
import {popupPlugin} from "@/toustuiplugin/popupPlugin";
import {innerLinkPlugin} from "@/toustuiplugin/innerLinkPlugin";
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';

import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import axios from "axios";
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      editor: {} as EditorCore,
      testData: ""
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
      plugins: [[popupPlugin,pluginOption],[innerLinkPlugin,pluginOption],colorSyntax,tableMergedCell],
      hooks: {
        addImageBlobHook: async (blob, callback) => {
          let formData = new FormData();
          formData.append("file", blob);



          //BackEnd 와 통신 하여 Url 받아 올때 코드
          // const { data } = axios.post(`${backUrl}/image`,{header: { "content-type": "multipart/formdata" }})
          // callback(data.url,"alt text")

          callback("https://cdn.pixabay.com/photo/2020/01/30/12/28/st-petersburg-4805301_960_720.jpg","alt text")
          return false;
        }
      }
    })
    let item = window.localStorage.getItem("mainText");
    if(item){
      this.testData = item;
    }

  },
  methods:{
    printMarkDown(){
      console.log(this.editor.getMarkdown())
    },
    sendFlutterWebviewMessage(){
      let win = window as any;
      win.wecango.postMessage('Hello from JS');
      console.log("userAgent =" +navigator.userAgent)
    },
    printHtml(){
      console.log(this.editor.getHTML())
    },
    onchange(value: string){
      window.localStorage.setItem("mainText",value)
    }
  }

});
</script>
<style>

</style>
