<!--
 * @Author       : liqiao
 * @Date         : 2024-01-20 17:23:26
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-23 23:29:16
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/pages/guide/index.vue
-->
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const email = ref('');
const password = ref('');

const onSubmit = (values) => {
  console.log('submit', values);
};

// TODO:登录
// const onLogin = async () => {
//   const { data } = await useFetch<CustomRes>(`/sys/auth/account/login`, {
//     baseURL: runtimeConfig.public.apiBase,
//     method: "POST",
//     body: {
//       account: loginState.email,
//       password: loginState.password,
//     },
//   })
//   if (data.value?.code !== 0) {
//     if (msg) msg(data.value?.msg, "warning")
//   } else {
//     store.token = data.value?.data?.access_token ?? ""

//     const _usfo = await useFetch<CustomRes>(`/sys/user/info`, {
//       baseURL: runtimeConfig.public.apiBase,
//       method: "get",
//       onRequest({ request, options }) {
//         const headers = options?.headers
//           ? new Headers(options.headers)
//           : new Headers()
//         if (!headers.has("Authorization")) {
//           headers.set("Authorization", store.token)
//         }
//         options.headers = headers
//       },
//     })
//     if (_usfo.data.value?.code !== 0) {
//       if (msg) msg(_usfo.data.value?.msg, "warning")
//     } else {
//       store.userInfo = _usfo.data.value.data ?? null
//       hideDialog()
//     }
//   }
// }

// onMounted(() => {
//   let query = route.query;
//   console.log('🚀 ~ onMounted ~ query:', query);
//   let isBind = query?.isBind;
//   if (isBind == 0) {
//     // 未登录
//     console.log("未登录");
//     uni.redirectTo({
//       url: '/pages/index/index?' + new URLSearchParams(query)
//     });
//   } else {
//     // 已登录
//     console.log("已登录");
//     uni.redirectTo({
//       url: '/pages/index/index?' + new URLSearchParams(query)
//     });
//   }
// });
</script>

<template>
  <div class="main">
    <!-- <van-loading type="spinner" /> -->
    <img class="logo-text" src="@/assets/images/logo.png" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="email"
          name="email"
          label="電話/電郵"
          placeholder="請輸入電話/電郵"
          :rules="[{ required: true, message: '請輸入電話/電郵' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="帳戶密碼"
          placeholder="請輸入賬戶密碼"
          :rules="[{ required: true, message: '請輸入賬戶密碼' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: url('@/assets/images/people.png') no-repeat center;
  // background-size: contain;
  .logo-text {
    width: 300px;
    margin-bottom: 20px;
  }
}
</style>
