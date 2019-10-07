<template>
<div class="header-bottom">
    <div class="menu-router-list">
        <div class="menu-list-content">
            <a class="menu-title" href="#">
                <span>
                    <i class="fas fa-bars"></i>All Departments
                </span>
            </a>
            <ul class="list-group">
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
    <div class="second-content">
        <ul class="second-menu-list">
            <li class="superdeals"><a style="color:red" href="#">Super Deals</a>
                <div class="superdeals-panel">
                <div class="superdeals-content"></div>
                </div>
            </li>
            <li><a href="#">Featured Brands</a></li>
            <li><a href="#">Trending Styles</a></li>
            <li><a href="#">Gift Cards</a></li>
        </ul>
        <div class="freeship">
            <a href="#">Free Shipping on Orders $50+</a>
        </div>
    </div>
</div>
</template>

<style>
.header-bottom {
    height: 44px;
    width: 1430px;
    display: flex;
}
.menu-router-list{
    width: 300px;
    height: 44px;
    background: orange;
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
}
 .menu-router-list .menu-title
 {
    padding-left: 15px;
    padding-right: 20px;
 }
.menu-router-list .menu-list-content {
    background: yellow;
    width: 270px;
    height: 100%;
}
.menu-router-list .menu-list-content a {
    width: 270px;
    height: 100%;
    padding-left: 22px;
    padding-right: 24px;
    line-height: 40px;
}
.list-group
{
    background-color: #fff;
}
.menu-list-content .list-group li
{
  margin-bottom:-3px;
}
.menu-list-content .list-group li a
{
    color: #333e48;
}
.menu-router-list .menu-list-content a span {
    color: #333e48;
    font-weight: 700;
}
.menu-router-list .menu-list-content a span i {
    padding-right: 10px;
}
.second-menu-list
{
    height: 100%;
    margin-left: 30px;
    width: 50%;
    display: flex;
    justify-content: space-between;
}
.second-menu-list li
{
    float:left;
    margin-top: 16px;
}
.second-content
{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.freeship
{
    width: 18%;
    padding-top: 15px;
}
.superdeals:hover .superdeals-panel
{
    display: block;
    cursor: pointer;
}
.superdeals-panel
{
    height: 700px;
    width: 900px;
    margin-right: 10px;
    position: absolute;
    margin-top: 10px;
    background-color: transparent;
    display: none;
}
.superdeals-content
{
    height: 90%;
    width: 100%;
    margin-top: 20px;
}
@media screen and (max-width:1480px){
    .second-content{
        width: 1030px;
    }
    .freeship
    {
        width: 35%;
    }
    .menu-router-list
    {
      width: auto;
    }
}
@media screen and (max-width:1200px) {
    .header-bottom {
        display: none;
    }
}
</style>
