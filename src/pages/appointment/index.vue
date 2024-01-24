<template>
  <div class="container">
    <HeaderNav @toggle="changeShow" :bg-color="'#eef8fe'" />
    <div class="appointment-content">
      <div class="appointment-center">預約咨詢</div>
      <div class="appointment-center-content">
        <div class="description">
          歡迎你來預約咨詢，請先登入後或註冊後再進行預約
        </div>
        <div class="order-btn">登入/登記</div>
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
.appointment-content {
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;
  .appointment-center {
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
  .appointment-center-content {
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
    .appointment-detail {
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
