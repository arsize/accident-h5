<!--
 * @Author       : liqiao
 * @Date         : 2024-01-21 21:11:21
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-21 22:08:16
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/pages/contact/index.vue
-->
<template>
  <div class="container">
    <HeaderNav @toggle="changeShow" :bg-color="'#eef8fe'" />
    <div class="contact-content">
      <div class="contact-center">聯絡我們</div>
      <div class="contact-center-content">
        <div class="description">
          如你需要尋求交通意外傷亡或工業傷亡相關的法律支援，可透過<span
            class="emphasis"
            >電話，Whatapp及電郵</span
          >等方式聯絡我們，亦可于網站內直接預約咨詢，當我方接受到你的預約訊息時，會立即聯絡你及確認預約詳情。
        </div>
        <div class="order-btn">預約咨詢服務</div>
        <div class="contact-detail">
          <div class="item">
            <div class="title">聯絡方式</div>
            <div class="link-content">
              <img src="@/assets/images/image-11.png" />
              <span>6775 5327</span>
            </div>
            <div class="link-content">
              <img src="@/assets/images/image-12.png" />
              <span>tinbokhongkong@gmail.com</span>
            </div>
          </div>
          <div class="item">
            <div class="title">辦公室資料</div>
            <div class="link-content">
              <img src="@/assets/images/image-13.png" />
              <span>星期一至五 10:00 am - 6:00 pm</span>
            </div>
          </div>
        </div>
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
</script>

<style lang="less" scoped>
.contact-content {
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;
  .contact-center {
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
      background-color: #eef8fe;
    }
  }
  .contact-center-content {
    margin-top: 40px;
    .description {
      color: #333;
      .emphasis {
        color: #262262;

        font-weight: 600;
      }
    }
    .order-btn {
      display: block;

      width: 300px;
      height: 42px;
      margin: 20px auto;

      text-align: center;

      color: #262262;
      border-radius: 20px;
      background: #dfedda;

      font-size: 16px;
      font-weight: 600;
      line-height: 42px;
    }
    .contact-detail {
      .item {
        margin-bottom: 10px;

        .title {
          margin-bottom: 10px;

          font-size: 16px;
        }
        .link-content {
          display: flex;
          align-items: center;
          img {
            width: 32px;
          }
          span {
            color: #333;
          }
        }
      }
    }
  }
}
</style>
