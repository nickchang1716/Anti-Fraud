<template>
    <div class="popupWindow" v-show="isOpened">
        <div class="close" v-on:click="closeWindow()">X</div>
        <div class="resultList" v-for="item in list" :key="item">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.context}}</div>
        </div>
        <div class="button">
            <button type="button" class="btn btn-secondary btn-lg" v-on:click="closeWindow()">關閉</button>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
    name: 'ResultPage',
    props: {
      list: Array,
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
    width: 90%;
    height: 90vh;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
    z-index: 100;
    padding: 30px;
    font-family: "Microsoft JhengHei";
    border-radius: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.resultList{
    margin-bottom: 30px;
    border-top: 0.5px #ced6e0 solid;
    padding-top: 15px;

}
.close{
    position:static;
    font-size: 28px;
    margin-top: -15px;
    margin-left: 97%;
    width: 5%;
}
.close:hover{
    cursor: pointer;
}
.title{
    font-size: 28px;
    font-weight: bold;
}
.content{
    margin-top: 20px;
    text-align: left;
    font-size: 18px;
}
.button{
    margin-top: 30px;
}
</style>