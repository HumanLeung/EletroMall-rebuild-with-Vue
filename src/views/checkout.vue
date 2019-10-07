<template>
<div class="check-container">
    <header class="checkout-header">
        <div class="header-container">
            <div class="header-top">
                <div class="logo">
                    <svg version="1.1" x="0px" y="0px" width="145.748px" height="48.52px" viewBox="0 0 175.748 42.52" enable-background="new 0 0 175.748 42.52">
                        <ellipse class="ellipse-bg" fill-rule="evenodd" clip-rule="evenodd" fill="#FDD700" cx="170.05" cy="36.341" rx="5.32" ry="5.367"></ellipse>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#333E48" :d="svg.name"></path>
                    </svg>
                </div>
                <nav class="nav">
                    <div><i class="fas fa-bars"></i></div>
                    <ul class="nav-group-list">
                        <li class="nav-home" @click="back">Home</li>
                        <li>About Us</li>
                        <li> Blog</li>
                        <li>Pages</li>
                        <li>Features</li>
                        <li>Contact Us</li>
                        <li>Features</li>
                    </ul>
                </nav>
                <div class="contact">
                    <div class="card-body text-content">
                        <i class="fas fa-headphones-alt"></i>
                        <div class="text">
                            <p>Got Questions ? Call us 24/7!</p>
                            <p style="font-size:20px; font-weight:700;">(800) 8001-8588, (0600) 874 548</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="toolbar"></div>
        </div>
    </header>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>
    <h1 style="font-size:50px; margin-left:50%;">Cart</h1>
    <div class="cart">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">First</th>
                    <th class="tprice" scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">qweqeqw</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="(items, index) in getShopcart" :key="index" style="height:150px;">
                    <td><a class="deleteitem" href="#" @click="del(items)">X</a></td>
                    <td class="d-flex item-content"><img class="cart-img" :src="`../../${items.img}`" alt="">
                        <p>{{ items.name }}</p>
                    </td>
                    <td>{{ items.name }}</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import {
    firebaseApi
} from '../common/serversapi'
import {
    mixinsTool
} from '../common/mixinsTool'
import {
    createNamespacedHelpers
} from 'vuex'
const {
    mapGetters
} = createNamespacedHelpers('products')
export default {
    name: 'checkout',
    mixins: [mixinsTool],
    data: () => ({
        link: [{
            name: 'Home'
        }]
    }),
    methods: {
        back() {
            this.$router.push({
                name: 'Home'
            })
        },
        del(item) {
            firebaseApi.removeData(item)
            console.log(item)
            this.$store.dispatch('products/getShopCart')
        }
    },
    computed: {
        ...mapGetters([
            'getShopcart'
        ])
    },
    created() {
        console.log(this.getShopcart.length)
         this.getShopcart
        
    }
}
</script>

<style scoped>
.check-container {
    width: 100%;
    height: 1000px;
}

header {
    width: 100%;
}

header .header-container {
    height: 120px;
}

.header-top {
    display: flex;
    width: 1430px;
    border: black 1px solid;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px;
    margin-bottom: 20px;
}

.nav {
    position: relative;
    left: -100px;
}

.nav-group-list li {
    float: left;
    font-size: 20px;
    padding: 10px;
}

i.fa-bars {
    margin-right: 25px;
    font-size: 25px;
    margin-top: 9px;
}

.fa-headphones-alt {
    font-size: 40px;
    color: yellow;
}

.card-body {
    display: flex;
    justify-content: center;
}

.toolbar {
    width: 100%;
    background-color: yellow;
    height: 50px;
}

.breadcrumb {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}

.active::before {
    content: ">"
}

.cart {
    width: 100%;
    height: 800px;
    z-index: 100;
    display: block;
}

.cart .table {
    width: 1170px;
    margin: auto;
}

.tprice {
    width: 200px
}

.cart-img {
    width: 150px;
    height: 150px;
}

.item-content {
    align-items: center;
}

.deleteitem {
    position: relative;
    top: 60px;
}
.nav-home
{
    cursor: pointer;
}
</style>
