<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
onMounted(() => {
  let query = route.query;
  console.log('🚀 ~ onMounted ~ query:', query);
  let isBind = query?.isBind;
  if (isBind == 0) {
    // 未登录
    console.log("未登录");
    uni.redirectTo({
      url: '/pages/index/index?' + new URLSearchParams(query)
    });
  } else {
    // 已登录
    console.log("已登录");
    uni.redirectTo({
      url: '/pages/index/index?' + new URLSearchParams(query)
    });
  }
});
</script>

<template>
  <div class="main">
    <van-loading type="spinner" />
  </div>
</template>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
