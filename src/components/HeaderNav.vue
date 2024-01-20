<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["toggle"]);

const showMenu = () => {
  console.log("xx");
  emit("toggle", true);
};
</script>

<template>
  <van-nav-bar
    :style="`background:${props.bgColor}`"
    left-text="Back"
    left-arrow
    @click-right="showMenu"
  >
    <template #left>
      <img
        style="display: block"
        class="logo"
        src="@/assets/images/logo.png"
        alt=""
      />
    </template>
    <template #right>
      <van-icon size="25" name="ellipsis" />
    </template>
  </van-nav-bar>
</template>

<style lang="less" scoped>
.logo {
  width: 160px;
}
</style>
