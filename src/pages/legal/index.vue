<!--
 * @Author       : liqiao
 * @Date         : 2024-01-21 19:19:13
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-21 20:50:02
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/pages/legal/index.vue
-->
<template>
  <div class="container">
    <HeaderNav @toggle="changeShow" :bg-color="'#eef8fe'" />
    <div class="legal-content">
      <div class="legal-knowledge">法律小知識</div>

      <van-tabs
        color="#262262"
        v-model:active="currentShowTab"
        class="legal-knowledge-tabs"
        @click-tab="selectTab"
      >
        <van-tab title="客戶案件分享" name="1"></van-tab>
        <van-tab title="交通意外" name="2"></van-tab>
        <van-tab title="工業傷亡" name="3"></van-tab>
      </van-tabs>

      <div class="legal-knowledge-list">
        <div class="item" v-for="(item, index) in refListData" :key="index">
          <img :src="item.pictureUrl" />
          <span>{{ item.title }}</span>
          <!-- <span>{{ item.title }}</span> -->
        </div>
      </div>

      <!-- <div class="legal-knowledge-title">
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
            :nodes="refListData && refListData.summary"
          ></rich-text>
        </div>
      </div>
      <div class="rich-text">
        <rich-text
          :nodes="refListData && refListData.content"
        ></rich-text>
      </div>
      <div class="extended-article">
        <div class="title">延伸文章</div>

        <div
          class="item"
          v-for="(item, index) in refListData &&
          refListData.extendedArticles"
          :key="index"
        >
          <span></span>
          <span>{{ item.title }}</span>
        </div>
      </div> -->

      <!-- <div class="go-view" @click="goViewOperate">
        <span>{{
          Number(currentShowTab) === 2
            ? '前往查看工業傷亡支援的服務範圍'
            : Number(currentShowTab) === 3
            ? '前往查看交通意外傷亡支援的服務範圍'
            : ''
        }}</span
        ><span>></span>
      </div> -->
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
import { getRelatedKnowledgeApi } from '@/apis/legal';
import { onShow } from '@dcloudio/uni-app';

const overLayShow = ref(false);
const currentShowTab = ref('1');
const refListData = ref([]);

onShow(() => {
  getRelatedKnowledgeApiOperate(1);
});

const changeShow = (val) => {
  if (val) {
    overLayShow.value = true;
  }
};

const getRelatedKnowledgeApiOperate = async (type) => {
  const res = await getRelatedKnowledgeApi(type);

  console.log('🚀 ~ testApi ~ res:', res);
  if (Number(res.code) === 0) {
    const result = res.data;
    refListData.value = result;
  }
};

const selectTab = (e) => {
  currentShowTab.value = e.name;
  getRelatedKnowledgeApiOperate(currentShowTab.value);
};

const goUrl = () => {
  uni.navigateTo({
    url: '/pages/appointment/index'
  });
};
</script>

<style lang="less" scoped>
.legal-content {
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px;

  .legal-knowledge {
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
      background-color: #fffcf2;
    }
  }

  ::v-deep .van-tabs--line {
    .van-tabs__wrap {
      .van-tab {
        font-size: 16px !important;
      }
    }
  }

  .legal-knowledge-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-top: 20px;
    .item {
      overflow: hidden;

      width: 48%;
      margin-bottom: 20px;
      padding-bottom: 10px;

      border-radius: 6px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      img {
        width: 100%;
        height: 129px;
      }
      span:nth-child(1) {
        padding-top: 4px;

        font-size: 16px;
        font-weight: 600;
      }
      span:nth-child(2) {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;

        text-overflow: ellipsis;

        -webkit-line-clamp: 3;
      }
    }
  }

  //--------------------------------------------------
  .legal-knowledge-title {
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
