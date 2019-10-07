<template>
<div>
    <v-header></v-header>
    <v-main />
    <v-mainbottom />
    <v-section-second />
    <v-section-third />
</div>
</template>

<script>
import header from '../components/section1/header/header.vue'
import main from '../components/section1/main/main.vue'
import mainbottom from '../components/section1/main/mainbottom.vue'
import section2 from '../components/section2/section2.vue'
import section3 from '../components/section3/section3-main'
export default {
    name:'Home',
    components: {
        "v-header": header,
        "v-main": main,
        "v-mainbottom": mainbottom,
        "v-section-second": section2,
        "v-section-third": section3,
    },
}
</script>
