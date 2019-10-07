<template>
    <div class="section-container">
        <v-section-content/>
    </div>
</template>

<script>
import section2Main from './main/section2-main'
export default {
  /* eslint-disable */
components:{
    "v-section-content": section2Main
}
}
</script>
<style>
    .section-container {
    height: 784px;
    margin-top: 25px;
    width:1420px;
    margin-left: auto;
    margin-right: auto;
}
@media screen and (max-width: 1200px) {
    .section-container
    {
        height: auto;
        width: 100%;
    }
}
@media screen and (max-width: 600px) {
    .section-container 
    {
        width: auto;
    }
}
</style>