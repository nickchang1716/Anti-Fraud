<template>
  <h1> §關於詐騙觸犯法規§ </h1>
    <div class="container">
      <h3>《 刑 法 》</h3>
      <div class="policies">
        <h4>第 339 條 （普通詐欺罪）</h4>
        <p>
          意圖為自己或第三人不法之所有，以詐術使人將本人或第三人之物交付者，處五年以下有期徒刑、拘役或科或併科五十萬元以下罰金。
          以前項方法得財產上不法之利益或使第三人得之者，亦同。
          前二項之未遂犯罰之。
        </p>
      </div>
      <div class="policies">
        <h4>第 339-1 條 （違法由收費設備取得他人之物之處罰）</h4>
        <p>
          意圖為自己或第三人不法之所有，以不正方法由收費設備取得他人之物者，處一年以下有期徒刑、拘役或十萬元以下罰金。
          以前項方法得財產上不法之利益或使第三人得之者，亦同。
          前二項之未遂犯罰之。
        </p>
      </div>
      <div class="policies">
        <h4>第 339-2 條 （違法由自動付款設備取得他人之物之處罰）</h4>
        <p>
          意圖為自己或第三人不法之所有，以不正方法由自動付款設備取得他人之物者，處三年以下有期徒刑、拘役或三十萬元以下罰金。
          以前項方法得財產上不法之利益或使第三人得之者，亦同。
          前二項之未遂犯罰之。
        </p>
      </div>
      <div class="policies">
        <h4>第 339-3 條 （違法製作財產權之處罰）</h4>
        <p>
          意圖為自己或第三人不法之所有，以不正方法將虛偽資料或不正指令輸入電腦或其相關設備，製作財產權之得喪、變更紀錄，而取得他人之財產者
          ，處七年以下有期徒刑，得併科七十萬元以下罰金。
          以前項方法得財產上不法之利益或使第三人得之者，亦同。
          前二項之未遂犯罰之。
        </p>
      </div>
      <div class="policies">
        <h4>第 339-4 條</h4>
        <p>
          犯第三百三十九條詐欺罪而有下列情形之一者，處一年以上七年以下有期徒刑，得併科一百萬元以下罰金：
          一、冒用政府機關或公務員名義犯之。
          二、三人以上共同犯之。
          三、以廣播電視、電子通訊、網際網路或其他媒體等傳播工具，對公眾散布而犯之。
          前項之未遂犯罰之。
        </p>
      </div>
      <div class="policies">
        <h4>第 340 條 （刪除）</h4>
      </div>
      <div class="policies">
        <h4>第 341 條 （準詐欺罪）</h4>
        <p>
          意圖為自己或第三人不法之所有，乘未滿十八歲人之知慮淺薄，或乘人精神障礙、心智缺陷而致其辨識能力顯有不足或其他相類之情形，使之將本人或第三人之物交付者，處五年以下有期徒刑、拘役或科或併科五十萬元以下罰金。
          以前項方法得財產上不法之利益或使第三人得之者，亦同。
          前二項之未遂犯罰之。
        </p>
      </div>
    </div>  
</template>

<script>
export default {
    name: 'AboutPage'
};
</script>

<style scoped>
h1{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;
}
h3{
  text-align: left;
  font-weight: bold;
  margin-bottom: -30px;
}
.container{
  background-color: #fffbf2;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 30px;
  margin-bottom: 50px;
}
.policies{
  text-align: left;
  margin-top: 40px;
  border-bottom: 0.5px #ced6e0 solid;
  padding: 20px;
}

.policies h4{
  font-weight: 550;
}

.policies p{
  font-size: 20px;
}

</style>