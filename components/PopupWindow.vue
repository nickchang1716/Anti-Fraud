<template>
    <div class="popupWindow" v-show="isOpened">
        <div class="close" v-on:click="closeWindow()">X</div>
        <div class="title">{{title}}</div>
        <div class="content">{{content}}</div>
        <div class="button">
            <button type="button" class="btn btn-secondary btn-lg" v-on:click="closeWindow()">關閉</button>
        </div>
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
export default {
  name: "PopupWindow",
  props: {
      title: String,
      content: String,
      isOpened: Boolean
  },
  setup(props, target){
      const popupControl = reactive({isOpened: props.isOpened});
      function closeWindow(){
          popupControl.isOpened = false;
          target.emit("closePopup", popupControl.isOpened);
      }

      return{
          popupControl,
          closeWindow
      }
  }


};
</script>

<style scoped>
.popupWindow{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 800px;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
    z-index: 100;
    padding: 30px;
    font-family: "Microsoft JhengHei";
    border-radius: 20px;
}
.close{
    position:static;
    font-size: 28px;
    margin-top: -15px;
    margin-left: 95%;
    width: 5%;
}
.close:hover{
    cursor: pointer;
}
.title{
    font-size: 36px;
    font-weight: bold;
}
.content{
    margin-top: 20px;
    text-align: left;
    font-size: 24px;
}
.button{
    margin-top: 30px;
}
</style>