<template>
  <div>

  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "@vue/runtime-core";
const url = "/data.json";

export default {
  name: "SearchNews",
  setup() {
    var data = reactive({});
    var data1 = reactive({ result: [] });
    var dataCount;
    onMounted(() => {
      axios.get(url).then((res) => {
        Object.assign(data, res.data);
        data1.result = res.data.result.records;
        dataCount = res.data.result.records.length;
        // console.log(res.data.result.records);
        // console.log(data1.result);
        // console.log(dataCount); //84
        // console.log(data1.result[0].標題);
      });
    });

    const search = (keyword) => {
      console.log("search init:", keyword);
      const arr = [];
      for (var i = 0; i < dataCount; i++) {
        var resultNews = {
          seq: "",
          title: "",
          updateTime: "",
          context: "",
        };
        // console.log(props.keyword);
        // console.log(data1.result[i].標題);
        const compareInt = data1.result[i].標題.indexOf(keyword);
        if (compareInt != -1) {
          resultNews.seq = data1.result[i].編號;
          resultNews.title = data1.result[i].標題;
          resultNews.updateTime = data1.result[i].發佈時間;
          resultNews.context = data1.result[i].發佈內容;
          arr.push(resultNews);
        }
      }
      // console.log(arr);
      return arr;
    };

    return { data, data1, dataCount, search };
  },
};
</script>
<style scoped>
</style>
