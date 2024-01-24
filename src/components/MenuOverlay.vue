<!--
 * @Author       : liqiao
 * @Date         : 2024-01-20 17:23:26
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-23 23:08:29
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/components/MenuOverlay.vue
-->
<script setup>
import { computed } from 'vue';
const emits = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});
const vis = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits('update:modelValue', val);
  }
});

const stopMenu = () => {
  vis.value = false;
};

const joinPage = (url) => {
  uni.navigateTo({
    url: url
  });
};
</script>

<template>
  <van-overlay :show="vis" @click="vis = false">
    <div class="wrapper" @click.stop>
      <div class="topbar">
        <van-icon @click="stopMenu" color="#fff" size="25" name="cross" />
        <div class="menu">
          <div
            class="menu-item"
            @click="
              (e) => {
                joinPage('/pages/service/index');
              }
            "
          >
            服務範圍
          </div>
          <div
            class="menu-item"
            @click="
              (e) => {
                joinPage('/pages/legal/index');
              }
            "
          >
            法律小知識
          </div>
          <div
            class="menu-item"
            @click="
              (e) => {
                joinPage('/pages/about/index');
              }
            "
          >
            關於中心
          </div>
          <div
            class="menu-item"
            @click="
              (e) => {
                joinPage('/pages/contact/index');
              }
            "
          >
            聯絡我們
          </div>
          <div
            class="menu-item"
            @click="
              (e) => {
                joinPage('/pages/appointment/index');
              }
            "
          >
            預約咨詢
          </div>
        </div>
      </div>
    </div>
  </van-overlay>
</template>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  // background-color: #313846;
  background-color: rgba(0, 0, 0, 0.2);

  position: relative;
  .topbar {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .menu {
      width: 100%;
      height: 100%;
      position: relative;
      top: 120px;
      left: 0px;
      margin: auto;

      .menu-item {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
        font-size: 28px;
        color: #fff;
      }
    }
  }
}
</style>
