<template>
<div class="guidance-container">
    <div class="guide-link d-flex justify-content-center">
        <ul class="link-guide nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="guide-title active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
                <a class="guide-title" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
                <a class="guide-title" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
            </li>
        </ul>
    </div>
    <div class="tab-content showcase" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <ul v-for="(items,index) in getProducts" :key="index">
                <li>
                    <div class="card-content">
                        <a href="#" class="type">{{ items.type }}</a>
                        <h5 class="card-title">{{ items.name }}</h5>
                        <div class="card text-center">
                            <img v-lazyload class="card-img-top" :src="`../../../${items.img}`" alt="Card image cap">
                            <div class="card-body">
                                <div class="card-bottom">
                                    <h4 class="price">£{{ items.price }}</h4>
                                    <div :id="index" @click="additem(items, index)" class="shopcart"><i class="fas fa-cart-arrow-down"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <ul v-for="(items,index) in getProducts" :key="index">
                <li>
                    <div class="card-content">
                        <p class="type">{{ items.type }}</p>
                        <h5 class="card-title">{{ items.name }}</h5>
                        <div class="card text-center" style="width: 18rem;">
                            <img v-lazyload class="card-img-top" :src="`../../../${items.img}`" alt="Card image cap">
                            <div class="card-body">
                                <div class="card-bottom">
                                    <h4 class="price">£{{ items.price }}</h4>
                                    <div class="shopcart"><i @click="additem(items,this)" class="fas fa-cart-arrow-down"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <ul v-for="(items,index) in getProducts" :key="index">
                <li class="card-container">
                    <div class="card-content">
                        <p class="type">{{ items.type }}</p>
                        <h5 class="card-title">{{ items.name }}</h5>
                        <div class="card text-center" style="width: 18rem;">
                            <img v-lazyload class="card-img-top" :src="`../../../${items.img}`" alt="Card image cap">
                            <div class="card-body">
                                <div class="card-bottom">
                                    <h4 class="price">£{{ items.price }}</h4>
                                    <a href="#">
                                        <div ref="index" @click="additem(items)" class="shopcart">
                                            <i class="fas fa-cart-arrow-down"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style src="./SectionGallery.css"></style>

<script>
import {firebaseApi} from '../../../common/serversapi'
import {
    instance_1
} from '../../../common/axios'
import {
    createNamespacedHelpers
} from 'vuex'
const {
    mapGetters
} = createNamespacedHelpers('products')
export default {
    /* eslint-disable */
    data() {
        return {
            isactive: false,
        }
    },
    methods: {
        additem(item, index) {

          firebaseApi.AddData(item)
            console.log(item)
            console.log(item.id)
            let dom = document.getElementById(index)
            dom.setAttribute('disabled', 'true')
            dom.style.display = "none"
            instance_1.post('/shopcart.json',dataBag)
            .then(res => console.log(res+""+"success"))
            console.log(dom)
        }

    },
    computed: {
        ...mapGetters(
            [
                'getProducts',
            ]
        ),
    },

    created() {

    }

}
</script>

<style>
   .card 
   {
       border:none;
   }
    @media screen and (max-width: 1200px) {
        .guidance-container{
            overflow:visible;
        }
        .tab-content.showcase .card-content{
            overflow:visible;
            height: 100%;
            width: 172px;
            height: 270px;
        }
        .tab-content.showcase .card-content .card img
        {
            width: 140px;
            height: 140px;
        }
        .tab-content.showcase .card-content .price
        {
            font-size: 20px;
        }
        .tab-content.showcase .card-content .card .card-body 
        {
            height: 95% !important;
        }
        .card-title
        {
            font-size: 15px;
        }

    }
</style>
