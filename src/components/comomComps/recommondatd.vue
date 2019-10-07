<template>
<div class="featuredpros">
    <div class="card-deck">
        <div class="card mb-3" style="max-width: 540px;">
            <div v-for="(items, i) in products" :key="i" class="row no-gutters">
                <div class="col-md-4">
                    <img src="../../../static/feature/GamePad-300x300.jpg" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text">{{ items.name }}</p>
                        <p class="card-text">asdasdasd</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 540px;">
            <div v-for="(items, i) in topproducts" :key="i" class="row no-gutters">
                <div class="col-md-4">
                    <img src="../../../static/feature/GamePad-300x300.jpg" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-text">{{ items.name }}</h6>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 540px;">
            <div v-for="(items, i) in onsale" :key="i" class="row no-gutters">
                <div class="col-md-4">
                    <img src="../../../static/feature/GamePad-300x300.jpg" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-text">{{ items.name }}</h5>
                        <p class="card-text">.</p>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="advetise" style="max-width: 540px;">
             <div class="card-body">
                 <img src="../../../static/footer-widget-img-01.jpg" alt="">
             </div>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import {
    instance_1
} from '../../common/axios'
import {
    instance_2
} from '../../common/axios'
export default {
    /* eslint-disable */
    data: () => ({
        featured: Object,
        topproducts: Object,
        onsale: Object,
    }),
    created() {
        instance_2.get('/featured.json')
            .then(res => {
                this.products = res.data
                console.log(this.products)

            })
        instance_2.get('/top-products.json')
            .then(res => {
                this.topproducts = res.data
                console.log(this.products)

            })
        instance_2.get('/onsale.json')
            .then(res => {
                this.onsale = res.data
                console.log(this.products)

            })
    }
}
</script>

<style>
.featuredpros .card-deck .card {
    width: 25%;
    height: 100px;
}
@media screen and (max-width: 1200px) {
    .advetise{
        display: none;
    }
}
</style>
