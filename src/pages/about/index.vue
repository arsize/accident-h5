<!--
 * @Author       : liqiao
 * @Date         : 2024-01-21 18:08:46
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-23 23:10:26
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/pages/about/index.vue
-->
<template>
  <div class="container">
    <HeaderNav @toggle="changeShow" :bg-color="'#eef8fe'" />
    <div class="about-content">
      <div class="about-center">關於中心</div>
      <div class="about-center-content">
        <div class="font-normal">
          我們的交通意外及工傷賠償專頁致力於為受傷者及其家人提供免費法律知識和支援服務。
          我們明白當遭遇交通事故或工傷意外時會感到無助和困惑，不清楚自己擁有哪些法律權益以及應該如何進行相關法律程序和步驟。因此，我們的專頁包含了以下內容：交通意外傷亡支援的服務簡介：專為交通意外傷者及其家人提供法律支援服務，以幫助他們瞭解自己在交通意外中的法律權益，以及應該如何處理此類意外的注意事項和步驟。此外，我們還提供一些小貼士和建議，以幫助受傷者更好地應對交通意外並保障自己的權益。
          <div class="h-10"></div>
          另一方面，我們還提供關於政府的交通意外賠付計劃的介紹，讓傷者可從多方面了解自己可能可以獲得的援助。此外，我們還提供專業分析和建議，以幫助受傷者選擇合適的解決方案。
          我們的專頁也致力於為工傷受害者及其家人提供法律支援服務。
          當中包含了工傷意外的法律權益，法律程序和步驟的介紹，以及應該注意的事項和一些小貼士。另外，我們也提供了法律援助署的簡介，
          以及作出專業分析協助工傷受害者尋找合適的法律專業人士並提供支援。
          這個專頁的創辦人本身在律師樓工作期間曾經歷過三次交通意外，因此深刻理解一般市民在遇到交通意外或工傷時的無助感和困惑。他們可能會顧慮到雇佣律師的昂貴費用而不敢爭取自己應有的法律權益。
          <div class="h-10"></div>
          因此，創辦人除了在本地進修法律知識外，還希望可以透過這個免費的平台分享更多法律知識給大眾市民，並為受傷者及其家人提供專業分析、
          尋找合適的法律支援。我們深信，我們的交通意外及工傷賠償專頁能夠幫助大眾市民在面對交通意外或工傷時能夠更清楚地了解他們的法律權益，並且提供相應的法律支援和建議，讓他們能夠有效地爭取應有的權益。
        </div>
        <img src="@/assets/images/hand.jpg" alt="" />
      </div>
    </div>
    <FooterNav />
  </div>

  <Menu v-model="overLayShow"></Menu>
</template>

<script setup>
import { ref } from 'vue';
import HeaderNav from '@/components/HeaderNav.vue';
import Menu from '@/components/MenuOverlay.vue';
import FooterNav from '@/components/FooterNav.vue';
import { onShow } from '@dcloudio/uni-app';

const overLayShow = ref(false);

onShow(() => {});

const changeShow = (val) => {
  if (val) {
    overLayShow.value = true;
  }
};
</script>

<style lang="less" scoped>
.about-content {
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;
  .about-center {
    position: relative;

    padding: 32px 0 16px 0;

    color: #262262;

    font-size: 32px;
    font-weight: 600;
    &:after {
      position: absolute;
      z-index: -1;
      bottom: -30px;
      left: -10%;

      width: 120%;
      height: 125px;

      content: '';

      border-radius: 0 0 50% 50%;
      background-color: #f7f7f7;
    }
  }
  .about-center-content {
    margin-top: 40px;

    color: #707070;
    .h-10 {
      margin-top: 10px;
    }
    img {
      width: 100%;
      margin: 10px 0;
    }
  }
}
</style>
