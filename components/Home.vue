<template>
    <div class = "banner"></div>
    <h1 class = "welcome">WELCOME TO ANTI FRUAD WEBSITE</h1>
    <h2 class = "slogan">To avoid being scammed, stay vigilant at all times.</h2>
    <div class="input-group input-group-lg keyword">
      <input v-model="inputText" type="text" class="form-control" placeholder="請輸入關鍵字查詢" aria-label="請輸入關鍵字查詢" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button v-on:click = "clickSearch()" class="btn btn-dark btn-lg" type="button">查詢</button>
      </div>
    </div>
    <HotNews msg = "若疑似遭到詐騙，請立即撥打165反詐騙專線" />
    <SearchNews ref="foo" />
    <ResultPage v-bind:list = "viewModel.resultList" v-bind:is-opened="viewModel.popupControl" v-on:closePopup="updateIsOpened" />
</template>

<script>
import HotNews from "@/components/HotNews.vue";
import SearchNews from "@/components/SearchNews.vue";
import ResultPage from "@/components/Result.vue";
import {  reactive, ref } from "vue";
export default {
  name: "HomePage",
  components: {
    HotNews,
    SearchNews,
    ResultPage
  },
  setup() {
    const foo = ref();
    const inputText = ref("");
    const viewModel = reactive({
      resultList: [],
      popupControl: false
    })
    const clickSearch = () => {
      viewModel.resultList = foo.value?.search(inputText.value);
      console.log("result:", viewModel.resultList);
      viewModel.popupControl = true;
    };
    function updateIsOpened(isOpened){
      viewModel.popupControl = isOpened;
    }
    return { 
      clickSearch,
      updateIsOpened,
      foo,
      inputText,
      viewModel
    };
  },
};
</script>

<style>
.banner{
    background-size: cover;
    background-position: center;
    background-image: url('../assets/landing.jpg');
    padding-top: 20%;
    padding-bottom: 20%;
    filter: brightness(0.5);
}
.welcome, .slogan{
    position: relative;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 0px 0px 30px rgb(0, 0, 0);
    top: -300px;
}
.welcome{
    font-weight: bolder;
}
.keyword{
  position: relative;
  top: -250px;
  left: 20%;
  width: 60%;
}

</style>

