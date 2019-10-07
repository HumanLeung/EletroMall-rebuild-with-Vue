<template>
<header class="header-container">
    <div class="headerTop-container">
        <div class="search-main-area">
            <header-top />
        </div>
        <div class="menu-list">
            <header-bottom/>
        </div>
    </div>
    <offcanvas></offcanvas>
</header>
</template>

<script>
import headerTop from './header-top.vue'
import headerBottom from './header-bottom.vue'
import offcanvas from './offcavs.vue'
export default {
/* eslint-disable */
    components: {
        'header-top': headerTop,
        'header-bottom': headerBottom,
        offcanvas:offcanvas
}
}
</script>

<style>
.header-container {
    height: 118.500px;
    width: 100%;
}
.headerTop-container {
    height: 100%;
    max-width: 1430px;
    margin-right: auto;
    margin-left: auto;
}

.headerTop-container .search-main-area {
    display: flex;
    justify-content: center;
    margin-top: 32.004px;
    margin-bottom: 25.998px;
    width: 1430px;
}
.menu-list
{
    height: 44px;
}
@media screen and (max-width:1480px) {
    .headerTop-container {
        width:1200px;
        margin: 0 auto;
    }
}

@media screen and (max-width:1200px) {
    .header-container {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
        background-color: yellow;
        height: 60px;
    }
    .headerTop-container
    {
        height: 0;
        width: 100%;
    }
    .headerTop-container .search-main-area
    {
        margin:0;
        width: 100%;
    }
}
</style>
