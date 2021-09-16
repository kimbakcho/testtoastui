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


export default Vue.extend({

  mounted() {
    const viewer = new Viewer({
      el: document.querySelector('#viewer') as any,
      plugins: [this.popupPlugin,this.innerLinkPlugin],
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
  methods: {
    popupClick(title: string,value: string){
      this.$swal.fire({
        title: title,
        text: value,
      })
    },
    innerLinkClick(linkUrl: string) {
      this.$router.push({
        path: "/linkBoard",
        query: {
          linkUrl: linkUrl
        }
      })
    },
    popupPlugin(): PluginInfo {
      let _this = this;
      return {
        toHTMLRenderers: {
          popup(node: MdNode) {
            let text = ""
            let title = ""
            let content = ""

            setTimeout(() => {
              let querySelector = document.querySelectorAll(".popupBox");
              querySelector.forEach(elem =>{

                elem.addEventListener('click',evt => {
                  _this.popupClick(title,content)
                });
              })
            });
            let split = node.literal!.split("\n");

            split.forEach(x=>{
              if(x.length> 0 ){
                let values = x.split("=");
                let key = values[0];
                let value = values[1];
                if(key == "text"){
                  text = value
                }else if(key == "title"){
                  title = value
                }else if(key == "content"){
                  content = value
                }
              }
            })
            return [
              {type: 'openTag', tagName: 'div', outerNewLine: true, classNames: ['popupBox']},
              {type: 'html', content: `<div class="popup"> ${text} </div>`},
              {type: 'closeTag', tagName: 'div', outerNewLine: true}
            ]
          }
        },
      }
    },
    innerLinkPlugin(): PluginInfo {
      let _this = this;
      return {
        toHTMLRenderers: {
          innerLink(node: MdNode) {
            let text = ""
            let link = ""

            setTimeout(() => {
              let querySelector = document.querySelectorAll(".innerLinkBox");
              querySelector.forEach(elem =>{

                elem.addEventListener('click',evt => {
                  _this.innerLinkClick(link)
                });
              })
            });
            let split = node.literal!.split("\n");

            split.forEach(x=>{
              if(x.length> 0 ){
                let values = x.split("=");
                let key = values[0];
                let value = values[1];
                if(key == "text"){
                  text = value
                }else if(key == "link"){
                  link = value
                }
              }
            })
            return [
              {type: 'openTag', tagName: 'div', outerNewLine: true, classNames: ['innerLinkBox']},
              {type: 'html', content: `<div class="innerLink"> ${text} </div>`},
              {type: 'closeTag', tagName: 'div', outerNewLine: true}
            ]
          }
        },
      }
    }
  }

})
</script>

<style scoped>

</style>