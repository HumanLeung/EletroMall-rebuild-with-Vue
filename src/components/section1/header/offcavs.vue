<template>
<div class="off-canvas" :class="{'offwidth' : state}">
    <div class="cover" v-if="state" @click="coverCover()"></div>
    <div ref="canvas" class="canvas-container">
        <ul class="list-group-2">
            <li><a href="#">Value of the Day</a></li>
            <li><a href="#">Top 100 Offers</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Computers $ Accessories</a></li>
            <li><a href="#">Cameras,Audio & Video</a></li>
            <li><a href="#">Mobiles & Tablets</a></li>
            <li><a href="#">Movies, Music $ Video Games</a></li>
            <li><a href="#">TV & Audio</a></li>
            <li><a href="#">Watches & Eyewear </a></li>
            <li><a href="3">Car, Motorbike & industrial </a></li>
            <li><a href="3">Accessories</a></li>
        </ul>
    </div>
</div>
</template>

<script>
import {
  eventBus
} from '../../../common/eventBus.js'
export default {
/* eslint-disable */
    data: () => ({
        state: false,
        cover: false
    }),
    methods: {
        coverCover() {
               let body = document.body
            eventBus.closeCover()
            this.state = false
            body.style.marginLeft = '0px'
            body.style.backgroundColor = "white";
            this.$refs.canvas.style.display = "none"
        }
    },
    created() {
        let body = document.body
        eventBus.$on('Toggle', () => {
                this.state = true
                body.style.marginLeft = '260px'
                
                body.style.transition = 'margin-left .5s'
                // body.style.backgroundColor = "rgba(0,0,0,0.7)";
                // this.$refs.cover
                this.$refs.canvas.style.display = "block"
               

            }),
            eventBus.$on('toggleOff', () => {
                this.state = !this.state
                body.style.marginLeft = '0px'
                body.style.backgroundColor = "white";
                this.$refs.canvas.style.display = "none"
            })
    },
}
</script>

<style>
.cover {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 260px;
    z-index: 2;
    background-color: black;
    opacity: .7;
    transition: all .5s;
}

.off-canvas {
    height: 100%;
    position: fixed;
    width: 0;
    top: 0;
    left: 0;
    background-color: #333;
    z-index: 100;
   
}

.offwidth {
    width: 260px;
    transition: width .5s;
    z-index: 100;
}

.off-canvas .canvas-container {
    display: none;
}

.list-group-2 li {
    padding-top: 20px;
    border-bottom: 1px solid rgb(187, 185, 185);
    padding-bottom: 10px;

}

.list-group-2 li a {
    color: white;
    margin-left: 10px;
}
</style>
