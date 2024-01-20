<script setup>
import { ref } from "vue";
const emailInput = ref("");
</script>

<template>
  <div class="footer">
    <img class="foot-logo" src="@/assets/images/image-05.png" alt="" />
    <div class="url-box container-box box-item">
      <div class="link">服務範圍</div>
      <div class="link">法律小知識</div>
      <div class="link">關於中心</div>
      <div class="link">聯絡我們</div>
      <div class="link">隱私條款</div>
    </div>
    <div class="container-box box-item">
      <div class="boldfont">聯絡資料</div>
      <div class="link ph-box">
        <img src="@/assets/images/image-11.png" alt="" />
        <div>6775 5327</div>
      </div>
      <div class="link ph-box">
        <img src="@/assets/images/image-12.png" alt="" />
        <div>tinbokhongkong@gmail.com</div>
      </div>
      <div class="link ph-box">
        <img src="@/assets/images/image-13.png" alt="" />
        <div>
          <div>星期一至五 10:00 am - 6:00 pm</div>
        </div>
      </div>
    </div>
    <div class="container-box box-item">
      <div class="boldfont">訂閱</div>
      <div class="sub-t">想取得最新的法律咨詢?</div>
      <div class="sub-t">來訂閱我們的電子郵報</div>
      <van-field
        style="border-radius: 5px; width: 100%"
        v-model="emailInput"
        right-icon="play"
        placeholder="輸入電郵訂閱我們"
      >
      </van-field>
      <div class="img-box">
        <img class="omg" src="@/assets/images/image-06.png" alt="" />
        <img class="omg" src="@/assets/images/image-07.png" alt="" />
        <img class="omg" src="@/assets/images/image-08.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  background-color: #313846;
  width: 100vw;
  padding: 0 10px;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.foot-logo {
  width: 190px;
}
.url-box {
  .link {
    margin-bottom: 10px;
    color: #fff;
  }
}
.container-box {
  padding: 0 15px;
  font-size: 14px;
  padding-top: 15px;
}
.box-item {
  margin-bottom: 15px;
  .boldfont {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #fff;
  }
  .sub-t {
    color: #fff;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .img-box {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .omg {
      width: 50px;
    }
  }
  .ph-box {
    display: flex;
    align-items: center;
    color: #fff;
    img {
      width: 30px;
      margin-right: 5px;
    }
  }
}
</style>
