<template>
    <div class="section-main-container">
        <div class="special-offer-container">
            <div class="special-offer">
                <div class="card text-center">
                    <div class="card-header">
                        <div class="header-title">
                            <p>Special Offer</p>
                        </div>
                        <div class="header-bouns">
                            <div class="bouns-inner bg-warning">
                                <p>Save<br>
                                    <strong>£20.00</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <div class="imgbox">
                            <img class="card-img-top imgshow" style="height:300px, width:300px;" src="../../../../static/items/GamePad-300x300.jpg" alt="Card image cap">
                        </div>
                        <div class="card-body card-1">
                            <h6 class="card-title">Game Console Controller + USB 3.0 Cable</h6>
                        </div>
                    </a>
                    <div class="card-body card-2">
                        <span class="card-price">
                            <h2 class="text-danger">£79.00</h2>
                            <p class="text-muted">£99.00</p>
                        </span>
                        <!-- <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a> -->
                    </div>
                </div>
                <div class="special-countdown">
                    <span class="product-amount d-flex justify-content-between">
                        <p class="sold-amount">Already Sold: 9</p>
                        <p class="instock">Available: 16</p>
                    </span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="100" style="width: 25%" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="countdown-time d-flex justify-content-center">
                        <div class="time-box">
                            <p class="time-title">Hurry Up! Offer ends in:</p>
                            <div class="countdown-timing">
                                <span class="hours">
                                    <p>{{ h }}</p>
                                </span>
                                <p>:</p>
                                <span class="minutes">
                                    <p>{{ m }}</p>
                                </span>
                                <p>:</p>
                                <span class="seconds">
                                    <p>{{ s }}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gallery">
            <gallery :datas="data"></gallery>
        </div>
    </div>
</template>

<style src="./SectionGallery.css"></style>
<script>
import SectionGallery from './SectionGallery.vue'
export default {
/* eslint-disable */
    data() {
        return {
            h: '',
            m: '',
            s: '',
            ischange: 0,
            data: Object
        }
    },
    methods: {
        timer() {
            let furthertime = new Date()
            furthertime.setHours(furthertime.getHours() + 8)
            setInterval(() => {
                let now = new Date()
                let countdown = furthertime - now
                this.h = Math.floor(countdown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
                this.m = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
                this.s = Math.floor((countdown % (1000 * 60) / 1000))
            })
        }

    },
    created() {
        this.timer()
        // axios.get('/products.json')
        // .then(res => {
        //     console.log(res)
        //     this.data = res.data
        // })
    },
    components: {
        gallery: SectionGallery
    }
}
</script>

<style>
.section-main-container
{
    width: 100%;
    display: flex;
    justify-content: center;
}
.special-offer-container
{
    width: 370px;
    padding-right: 15px;
    padding-left: 15px;
    height: 784px;
    position: relative;
}
.gallery
{
    width: 1000px;
    padding-right: 15px;
    padding-left: 20px;
}
.card-header
{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding-right: 10px;
    padding-left: 10px;
}
@media screen and (max-width:1480px) {
    .section-main-container
    {
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
}
@media screen and (max-width: 1200px) {
    .section-main-container
    {
        max-width: 940px;
        height: auto;
    }
    .gallery
    {
        height: 878.531px;
    }
    .special-offer-container
    {
        width: 70%;
    }
}
@media screen and (max-width: 600px) {
    .gallery{
        display: none;
    }
    .section-main-container
    {
       width: 100%;
    }
    .special-offer-container
    {
        width: 80%;
    }
}
</style>
