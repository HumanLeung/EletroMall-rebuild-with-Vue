<template>
<div class="sponsor-container">
    <carousel :items=5 :dots="false" :responsive="{0:{items:3,nav:false},600:{items:4,nav:true},1200:{items:5,nav:true}}"  :nav="true" class="sponsor-content">
        <div class="imgbox">
            <img src="../../../static/sponsor/activeden.png">
        </div>
        <div class="imgbox">
            <img src="../../../static/sponsor/audiojungle.png">
        </div>
        <div class="imgbox">
            <img src="../../../static/sponsor/graphicriver.png">
        </div>
        <div class="imgbox">
            <img src="../../../static/sponsor/graphicriver2.png">
        </div>
        <div class="imgbox">
            <img src="../../../static/sponsor/activeden.png">
        </div>
        <div class="imgbox">
            <img src="../../../static/sponsor/activeden.png">
        </div>
        <div class="imgbox">
            <img src="../../../static/sponsor/activeden.png">
        </div>
        <div class="imgbox">
            <img src="../../../static/sponsor/activeden.png">
        </div>
        <div class="imgbox">
            <img src="../../../static/sponsor/activeden.png">
        </div>
    </carousel>
</div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
/* eslint-disable */
    components: {
        carousel
    },
    created() {
    },
    mounted(){
        let owlPrev =  document.getElementsByClassName('owl-prev')[0]
        let owlNext =  document.getElementsByClassName('owl-next')[0]
        owlPrev.innerHTML = "<"
        owlNext.innerHTML = ">"
    }
}
</script>

<style>
.sponsor-container {
    height: 80px;
    width: 100%
}

.sponsor-content {
  height: 100%;
}
.sponsor-content .imgbox
{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.sponsor-content .imgbox img
{
    max-height: 50px;
    width: auto;
    filter: grayscale(100%);
}
.sponsor-content .imgbox:hover img
{
    filter: grayscale(0%);
}
.owl-nav .owl-next
{
    position: absolute;
    top: 20px;
    right: 0px;;
}
.owl-nav .owl-prev
{
    position: absolute;
    top:20px;
    left:0px;
}
@media screen and (max-width:600px) {
    .sponsor-container
    {
        width: 500px;
    }
}
</style>
