<script setup>
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";
import Menu from "@/components/MenuOverlay.vue";

import { ref } from "vue";

const overLayShow = ref(false);
const changeShow = (val) => {
  if (val) {
    overLayShow.value = true;
  }
};
</script>

<template>
  <div class="container">
    <HeaderNav @toggle="changeShow" :bg-color="'#eef8fe'" />
  </div>
</template>

<style lang="scss" scoped></style>
