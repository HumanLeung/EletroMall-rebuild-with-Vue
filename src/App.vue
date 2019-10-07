<template>
  <div style="marging:0 auto">
    <topbar/>
    <router-view></router-view>
    <v-footer/>
  </div>
</template>
<style src="./reset.css"></style>
<script>
import topbar from './components/section1/header/topbar.vue'
import footer from './components/footer/footer'
import Home from './views/Home'
export default {
/* eslint-disable */
  name:'App',
  components:{
  topbar,
  "v-home": Home,
  "v-footer": footer,
  },
  mounted(){
   this.$store.dispatch("products/initData")
   this.$store.dispatch("products/getShopCart")
   console.log('OK')
  }
}
</script>

<style>
body
{
  position: relative;
}

</style>

