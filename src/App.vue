<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import WOW from 'wow.js'
onLaunch(() => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    scrollContainer: null,
    resetAnimation: true,
  });
  wow.init();
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang='scss'>
</style>
