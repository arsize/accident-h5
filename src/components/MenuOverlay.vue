<script setup>
import { computed } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const vis = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});

const stopMenu = () => {
  vis.value = false;
};
</script>

<template>
  <van-overlay :show="vis" @click="vis = false">
    <div class="wrapper" @click.stop>
      <div class="topbar">
        <van-icon @click="stopMenu" color="#fff" size="25" name="cross" />
      </div>
    </div>
  </van-overlay>
</template>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: #313846;
  position: relative;
  .topbar {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
