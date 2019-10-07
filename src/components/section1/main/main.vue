<template>
<div class="main-outer">
    <div class="main-container">
    </div>
</div>
</template>
<script>
export default {
/* eslint-disable */
}
</script>

<style>
.main-outer
{
    display: flex;
}
.main-container
{
    background: url('../../../../static/bg/background.jpg');
    width: 100%;
    height: 420px;
    background-size: cover;
    background-position: left;
    margin-top: 45px;
    z-index: -1;
}
@media screen and (max-width:1200px){
    .main-container{
        margin-top: 0;
    }
    .main-container{
     width: 100%;
     background-size: cover;
     height: calc(40.9vw - 0px);
    }
}
</style>