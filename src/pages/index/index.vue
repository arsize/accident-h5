<template>
  <div class="container">
    <HeaderNav @toggle="changeShow" :bg-color="'#eef8fe'" />
    <div class="top-block">
      <img class="people" src="@/assets/images/people.png" alt="" />
      <div class="title">
        <div class="wow fadeIn top">
          <div>交通意外傷亡及</div>
          <div>工業傷亡支援中心</div>
        </div>
        <div class="sub">專門為意外受害人士提供法律咨詢服務</div>
      </div>
      <div class="btn" @click="goUrl">預約咨詢服務</div>
    </div>
    <div class="bottom-round-bar">
      <img @click="scrollToHash" class="wow fadeInDown row-down" src="@/assets/images/row_down.jpg" alt="" />
    </div>
    <div class="service">
      <div class="s-title">服務範圍</div>
    </div>
    <div class="service-box">
      <div class="s-item">
        <div style="display: flex; align-items: center">
          <img class="ico" src="@/assets/images/car.png" alt="" />
          <div class="s-ico-t">交通意外傷亡支援</div>
        </div>
        <div class="body-t">
          服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围
        </div>
      </div>
    </div>
    <div class="service-box" style="margin-bottom: 0">
      <div class="s-item">
        <div style="display: flex; align-items: center">
          <img class="ico" src="@/assets/images/hat.png" alt="" />
          <div class="s-ico-t">工業傷亡支援</div>
        </div>
        <div class="body-t">
          服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围服务范围
        </div>
      </div>
    </div>
    <div class="service">
      <div class="s-title">法律小知識</div>
    </div>
    <div class="tab-container">
      <div @click="selectTab(0)" :class="{ active: currentShowTab === 0 }" class="tab">
        交通意外
      </div>
      <div @click="selectTab(1)" :class="{ active: currentShowTab === 1 }" class="tab mx-10">
        工業傷亡
      </div>
      <div @click="selectTab(2)" :class="{ active: currentShowTab === 2 }" class="tab">
        客户案件分享
      </div>
    </div>
    <div class="swiper-box" v-for="(item, index) in [1, 2, 3]">
      <div class="content-box">
        <img class="img-top" src="@/assets/images/01.png" alt="" />
        <div class="sub-text">
          <div class="top-title">文章标题</div>
          <div>
            内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介
          </div>
        </div>
      </div>
    </div>
    <div class="more">更多 <van-icon name="arrow" /></div>
    <FooterNav />
  </div>
  <Menu v-model="overLayShow"></Menu>
</template>

<script setup>
import { ref } from "vue";
import HeaderNav from "@/components/HeaderNav.vue";
import Menu from "@/components/MenuOverlay.vue";
import FooterNav from "@/components/FooterNav.vue";
import { toUpdateAccount } from '@/apis/index';

const overLayShow = ref(false);
const changeShow = (val) => {
  if (val) {
    overLayShow.value = true;
  }
};

const scrollToHash = () => {
  window.scrollTo({
    top: 600,
    behavior: "smooth",
  });
};

const currentShowTab = ref(0);
const selectTab = (active) => {
  currentShowTab.value = active;
};

const testApi = async () => {
  const res = await toUpdateAccount();

  console.log('🚀 ~ testApi ~ res:', res);
};

const goUrl =  () => {
  uni.navigateTo({
    url: '/pages/appointment/index'
  });
};
</script>

<style lang="less" scoped>
// @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@200..900&display=swap");
.top-block {
  width: 100%;
  box-sizing: border-box;
  background-color: #eef8fe;
  display: flex;
  padding: 20px 0;
  padding-bottom: 0;
  flex-direction: column;
  align-items: center;

  .people {
    width: 250px;
    height: auto;
  }

  .title {
    .top {
      width: 100%;
      text-align: center;
      font-size: 25px;
      color: #262262;
      font-weight: bold;
      margin: 0 auto;
      margin-top: 15px;
      font-family: "Noto Serif HK", serif;
      font-optical-sizing: auto;
      font-style: normal;
    }

    .sub {
      margin-top: 15px;
      font-size: 16px;
      color: rgb(156 163 175);
    }
  }

  .btn {
    background-color: #e0eeda;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #262262;
    padding: 15px 25px;
    width: 75%;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 20px;
    font-family: "Noto Serif HK", serif;
    font-optical-sizing: auto;
    font-weight: bold;
  }
}

.bottom-round-bar {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .row-down {
    position: relative;
    z-index: 1;
    width: 15px;
  }

  &::after {
    content: "";
    width: 120%;
    height: 320px;
    position: absolute;
    left: -10%;
    bottom: 0;
    border-radius: 0 0 50% 50%;
    background-color: #eef8fe;
  }
}

.service {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .s-title {
    font-size: 20px;
    font-family: "Noto Serif HK", serif;
    font-optical-sizing: auto;
    color: #262262;
    font-weight: bold;
  }
}

.service-box {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 20px;

  .s-item {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #eee;

    .ico {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    .s-ico-t {
      font-size: 16px;
      font-weight: 500;
    }

    .body-t {
      padding: 10px;
      font-size: 14px;
    }
  }
}

.tab-container {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .tab {
    width: 130px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .active {
    background-color: #fcb04c;
    color: #fff;
  }
}

.swiper-box {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 20px;

  .content-box {
    width: 100%;
    border: 1px solid #eee;
    box-sizing: border-box;

    .img-top {
      width: 100%;
      border-radius: 5px;
    }

    .sub-text {
      padding: 15px;
      font-size: 14px;

      .top-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
}

.more {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7bb1eb;
  margin-bottom: 10px;
}
</style>

