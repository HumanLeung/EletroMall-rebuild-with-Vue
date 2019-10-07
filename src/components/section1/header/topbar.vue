<template>
<div class="topbar-container">
    <div class="topbar-box">
    <div class="topbar-title">
        <p>Welcome to Worldwide Electronics Store</p>
    </div>
    <div class="topbar-nav">
            <ul class="topbar-nav-item-list">
                <li><a class="nav-item" href="#"><i class="fas fa-map-marker-alt"></i>Store Locator<p>|</p></a></li>
                <li><a class="nav-item" href="#"><i class="fas fa-truck-moving"></i>Trank Your Order<p>|</p></a></li>
                <li><a class="nav-item" href="#"><i class="fas fa-shopping-bag"></i>Shop<p>|</p></a></li>
                <li><a class="nav-item" href="#"><i class="fas fa-user"></i>My Account<p>|</p></a></li>
                <li><a class="nav-item" href="#"><i class="fas fa-sync"></i>Switch to RTL</a></li>
            </ul>
    </div>
    </div>
</div>
</template>

<style>
.topbar-container {
    height: 37px;
    border-bottom: 1px grey solid;
    width: 100%;
}
.topbar-box
{
    width: 1540px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
     margin-right: auto;
}
.topbar-title {
    width: 25%;
    padding-left: 50px;
}

.topbar-title p {
    font-size: .955em;
    line-height: 30px;
}
.topbar-nav {
    width: 46%;
    padding-left: 20px;
}
.topbar-nav-item-list .nav-item
{
   float: left;
   padding: 7px;
}
.topbar-nav-item-list .nav-item p
{
    display: inline-block;
    margin-left: 15px;
    line-height: 5px;
    font-size: 14px;
    color: grey;
}
.nav-item i.fas
{
    padding-right: 5px;
    color: black;
}
@media screen and (max-width:1480px){
    .topbar-title {
    width: 30%;
    padding-left: 60px;
    margin-left: 80px;
    }
    .topbar-nav {
    width: 55.9%;
    border: 1px solid red;
    margin-left: 30px;

}
    .topbar-container {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
}
}
@media screen and (max-width:1200px) {
.topbar-container
{
    display: none;
}
}
</style>
