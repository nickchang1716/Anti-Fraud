<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="newsCard" v-for = "item in viewModel.newsList" :key = "item" v-on:click="callPopup(item.title, item.content)">
      <div class="title">{{item.title}}</div>
      <div class="updatedTime">更新日期： {{item.updatedTime}}</div>
    </div>
  </div>
  <PopupWindow v-bind:title="viewModel.propsTitle" v-bind:content="viewModel.propsContent" v-bind:is-opened="viewModel.popupControl" v-on:closePopup="updateIsOpened"/>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import PopupWindow from "@/components/PopupWindow.vue";
export default {
  name: 'HotNews',
  props: {
    msg: String
  },
  components: {
    PopupWindow
  },
  setup(){
    const news = ref([
      {
        title: "假紓困、真詐財，假冒官網網站激增!",
        content: `歹徒利用iMessage傳送「紓困補助、防疫補貼」相關訊息，並假冒衛生福利部名義製作假網頁，誘導民眾提供身分證影本、輸入個資、銀行帳戶等重要個資!
                  指揮中心提醒，如欲線上申辦衛福部防疫補償，請至專區查詢 (網址：https://swis.mohw.gov.tw/covidweb/ )
                  2022年最新疫情紓困政策，請至行政院1988專區查詢 (網址：https://1988.taiwan.gov.tw/ )`,
        postedTime: "2022-09-06 16:34",
        updatedTime: "2022-09-06 16:34"
      },
      {
        title: "幫好友輔助認證? LINE帳號會被盜!",
        content: `近期歹徒利用LINE聊天室傳遞「協助LINE帳號輔助認證」訊息，點擊連結後，導引至網頁中要求填輸個人帳號、密碼及簡訊驗證碼，若民眾不慎輸入，個人LINE帳號將被盜用，後續延伸假借親友名義借錢等詐騙案件。
                  提醒您，LINE官方並沒有推出任何「輔助認證」機制，因此，近期透過聊天室傳送的「LINE認證連結」都是假的，千萬不可填寫，另外，165專線也呼籲大家，不可把「簡訊認證碼」傳給任何人，避免個人權益遭受損害!`,
        postedTime: "2022-09-06 16:34",
        updatedTime: "2022-09-06 16:34"
      },
      {
        title: "111/8/29-111/9/4民眾通報假投資(博弈)詐騙網站 【網友不會幫你賺錢、請勿聽信網友投資】",
        content: `凡是在網路上看到的投資廣告或網友傳來的投資訊息，標榜「保證獲利」、「沒有風險」、「穩賺不賠」都是詐騙，請勿輕易受騙！
                  假投資詐騙手法：
                  1、歹徒會利用FB、IG、YT、Google及簡訊等管道投放假投資廣告，或在交友軟體App假交友，宣稱保證獲利、穩賺不賠且利潤豐厚來吸引被害人。
                  2、當被害者上鉤後，歹徒會介紹其他「客服、老師、助理」同夥加 LINE 聯繫或加入LINE投資群組，並提供假投資網站給被害人註冊，此時LINE群組內不斷有其他假學員獲利貼文。
                  3、自稱「客服、老師、助理」的歹徒會提供 銀行帳號 給被害人入金投資。
                  4、初期帳面顯示獲利（歹徒於後臺控制），引誘您加碼投入大筆資金，有時可出金微薄獲利，但出金款項其實是其他被害人匯款的，可能會導致您銀行帳戶被警示。
                  5、當被害人要提領獲利時，以各種理由拖延（需繳保證金、IP異常等）或是直接凍結帳號、失去聯繫，就是「不出金」。`,
        postedTime: "2022-09-11 11:09",
        updatedTime: "2022-09-11 11:09"
      },
      {
        title: "防制詐騙簡訊全民一起來，165系統再升級民眾檢舉更便利",
        content: `你是否曾經收過類似的詐騙簡訊?「我是你的服務顧問林XX，麻煩聯絡我一下：fraud777」、「疫情紓困專案，點https：//bit.ly/*626****」或是「您的貨運單號是70****76，透過https：//qw*r.t*ui.com查詢」。
                  詐騙集團以假冒金融機構、股票投顧、投資理財、政府部門或郵政、快遞公司等名義傳遞詐騙簡訊，透過各種管道發送訊息將詐騙的觸手伸至每一部手機、電腦及行動裝置。刑事警察局觀察，以投資詐騙簡訊為例，以往詐騙集團會以「飆股、報明牌」等用詞發送簡訊，近來更演變為「有急事找你、找你好久了」等讓人疑惑的裝熟用詞發送詐騙Line ID至民眾手機，誘使民眾好奇加入；另外以紓困貸款詐騙簡訊為例，詐騙集團常以「你的申請已核准」或於簡訊內容夾帶詐騙網址，誘使民眾點擊進入網頁，騙取個資。
                  其實不難發現，詐騙集團可能透過SMS簡訊或是iOS特有的iMessage以及個人電子郵件等管道讓民眾接收詐騙訊息，刑事警察局提醒民眾，收到不明來源之簡訊或郵件邀請民眾加Line或提供詐騙網址，要求您輸入個資，都應該提高警覺。請多加查證，勿隨意上傳個人證件或提供帳號、信用卡資料，避免讓詐騙集團綁定電子支付設定轉帳或盜刷信用卡。 `,
        postedTime: "2022-08-16 14:10",
        updatedTime: "2022-08-16 13:45"
      },
      {
        title: "網購減肥藥，小心傷荷包又傷身!",
        content: `165反詐騙諮詢專線發現，近期假網拍詐騙案件中，民眾透過社群平臺獲知購買減肥藥資訊，並加入LINE洽詢下訂，惟收到包裹後發現係大陸不明藥品，亦有民眾食用後無明顯效用，表示不願再訂購，卻遭對方以有多次療程，若不領取包裹將提告等語詞恐嚇!
                  不良網購賣家會以提告詐欺、背信或毀損罪等似是而非的法律用語，迫使消費者取貨付款，事實上，消費者若只是單純忘記取貨，或下單後改變心意而解約退貨，都不會構成犯罪!
                  提醒您，網購不明藥品有風險，可能除了達不到原本想要的效果之外，還傷了身體，透過均衡飲食搭配適度運動，才是健康的減肥之道!`,
        postedTime: "2022-06-29 08:44",
        updatedTime: "2022-06-29 08:45"
      }
    ]);
    const viewModel = reactive({
      newsList: news.value,
      propsTitle: "",
      propsContent: "",
      popupControl: false
    });

    function callPopup(title, content){
      viewModel.propsTitle = title;
      viewModel.propsContent = content;
      viewModel.popupControl = true;
    }

    function updateIsOpened(isOpened){
      viewModel.popupControl = isOpened;
    }

    return{
      news,
      viewModel,
      callPopup,
      updateIsOpened
    }
  }
  
}
</script>

<style scoped>
h1{
  margin-top: -100px;
}
.container{
  margin-bottom: 50px;
}
.newsCard{
  text-align: left;
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border-radius: 30px;

}
.newsCard:hover{
  cursor: pointer;
  background-color: aliceblue;
  text-align: left;
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border-radius: 30px;

}
.title{
  font-size: 28px;
}
.updatedTime{
  color: gray;
}
</style>
