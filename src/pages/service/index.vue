<!--
 * @Author       : liqiao
 * @Date         : 2024-01-21 12:42:01
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-21 18:02:33
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/pages/service/index.vue
-->
<template>
  <div class="container">
    <HeaderNav @toggle="changeShow" :bg-color="'#eef8fe'" />
    <div class="service-content">
      <div class="service-coverage">服務範圍</div>
      <div class="service-coverage-title">
        <img src="@/assets/images/car.png" />
        <span>{{
          Number(currentShowTab) === 2
            ? '交通意外傷亡支援'
            : Number(currentShowTab) === 3
            ? '工業傷亡支援'
            : ''
        }}</span>
      </div>
      <div class="process-overview">
        <div class="title">
          <rich-text
            :nodes="refServiceScopeData && refServiceScopeData.summary"
          ></rich-text>
        </div>
        <!-- <div class="item">
          <span class="active"></span>
          <span class="active">交通意外傷亡支援</span>
        </div>
        <div class="item">
          <span></span>
          <span>工業傷亡支援</span>
        </div> -->
      </div>
      <div class="rich-text">
        <rich-text
          :nodes="refServiceScopeData && refServiceScopeData.content"
        ></rich-text>
      </div>
      <div class="extended-article">
        <div class="title">延伸文章</div>

        <div
          class="item"
          v-for="(item, index) in refServiceScopeData &&
          refServiceScopeData.extendedArticles"
          :key="index"
        >
          <span></span>
          <span>{{ item.title }}</span>
        </div>
      </div>

      <div class="go-view" @click="goViewOperate">
        <span>{{
          Number(currentShowTab) === 2
            ? '前往查看工業傷亡支援的服務範圍'
            : Number(currentShowTab) === 3
            ? '前往查看交通意外傷亡支援的服務範圍'
            : ''
        }}</span
        ><span>></span>
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
import { getServiceScopeApi } from '@/apis/service';
import { onShow } from '@dcloudio/uni-app';

const overLayShow = ref(false);
const currentShowTab = ref(2);
const refServiceScopeData = ref({});

onShow(() => {
  getServiceScopeApiOperate(2);
});

const changeShow = (val) => {
  if (val) {
    overLayShow.value = true;
  }
};

const selectTab = (active) => {
  currentShowTab.value = active;
};

const getServiceScopeApiOperate = async (type) => {
  const res = await getServiceScopeApi(type);

  console.log('🚀 ~ testApi ~ res:', res);
  if (Number(res.code) === 0) {
    const result = res.data;
    refServiceScopeData.value = result;
    // if (Number(type) === 2) {
    //   refServiceScopeData.value = result;
    // }
  }
};

const goViewOperate = () => {
  currentShowTab.value = Number(currentShowTab.value) === 2 ? 3 : 2;
  getServiceScopeApiOperate(currentShowTab.value);
};

const goUrl = () => {
  uni.navigateTo({
    url: '/pages/appointment/index'
  });
};
</script>

<style lang="less" scoped>
.service-content {
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;
  .service-coverage {
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
      background-color: #ecf8e8;
    }
  }
  .service-coverage-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-top: 40px;
    padding-bottom: 10px;

    border-bottom: 1px solid #eee;
    img {
      width: 60px;
      height: 60px;
    }
    span {
      margin-left: 10px;

      font-size: 24px;
      font-weight: 600;
    }
  }
  .process-overview {
    margin-top: 20px;
    .title {
      margin-bottom: 10px;
      // color: #666;

      color: #262262;

      font-size: 20px;
    }
    .item {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: flex-start;

      margin-top: 8px;
      span:nth-child(1) {
        display: inline-block;

        width: 10px;
        height: 10px;

        border-radius: 50%;
        background: #666;
        &.active {
          background: #262262;
        }
      }
      span:nth-child(2) {
        display: inline-block;

        margin-left: 6px;

        color: #666;

        font-size: 18px;
        &.active {
          color: #262262;
        }
      }
    }
  }
  .rich-text {
    width: 100%;
    margin: 20px 0;
  }
  .extended-article {
    margin: 20px 0;
    padding-top: 10px;

    border-top: 1px solid #eee;
    .title {
      margin-bottom: 10px;

      color: #333;

      font-size: 20px;
    }
    .item {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: flex-start;

      margin-top: 8px;
      span:nth-child(1) {
        display: inline-block;

        width: 10px;
        height: 10px;

        border-radius: 50%;
        background: rgb(250, 130, 22);
      }
      span:nth-child(2) {
        display: inline-block;

        margin-left: 6px;

        color: rgb(250, 130, 22);

        font-size: 18px;
      }
    }
  }

  .go-view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    cursor: pointer;

    color: #1677ff;
  }
}
</style>
