<template>
<div class="mainbottom-container">
    <div class="Img-container">
        <span class="btmImg">
            <a href="#">
                <div class="ImgInner"><img src="../../../../static/items/cameras.jpg" alt="">
                    <div class="textinfo">
                        <p>CATCH BIG <br><strong>DEALS</strong> ON THE<br>
                            CAMERAS <br>
                            <strong>shop now&nbsp;&nbsp;<i class="fas fa-arrow-alt-circle-right"></i></strong>
                        </p>
                    </div>
                </div>
            </a>
        </span>
        <span class="btmImg">
            <a href="#">
                <div class="ImgInner"><img src="../../../../static/items/MobileDevicesv2-2.jpg" alt="">
                    <div class="textinfo">
                        <p>CATCH BIG <br><strong>DEALS</strong> ON THE<br>
                            CAMERAS <br>
                            <strong>shop now&nbsp;&nbsp;<i class="fas fa-arrow-alt-circle-right"></i></strong>
                        </p>
                    </div>
                </div>
            </a>
        </span>
        <span class="btmImg">
            <a href="">
                <div class="ImgInner"><img src="../../../../static/items/DesktopPC1.jpg" alt="">
                    <div class="textinfo">
                        <p>CATCH BIG <br><strong>DEALS</strong> ON THE<br>
                            CAMERAS <br>
                            <strong>shop now&nbsp;&nbsp;<i class="fas fa-arrow-alt-circle-right"></i></strong>
                        </p>
                    </div>
                </div>
            </a>
        </span>
        <span class="btmImg">
            <a href="">
                <div class="ImgInner"><img src="../../../../static/items/360-camers.png" alt="">
                    <div class="textinfo">
                        <p>CATCH BIG <br><strong>DEALS</strong> ON THE<br>
                            CAMERAS <br>
                            <strong>shop now&nbsp;&nbsp;<i class="fas fa-arrow-alt-circle-right"></i></strong>
                        </p>
                    </div>
                </div>
            </a>
        </span>
    </div>
</div>
</template>

<style>
.mainbottom-container {
    width: 1470px;
    margin-left: auto;
    margin-right: auto;
}

.mainbottom-container .Img-container {

    column-count: 4;
}

.btmImg {
    width: 370px;
    height: 165px;
    overflow: hidden;
    float: left;
    padding: 0;
    margin: 0;
    margin-left: 25px;
}

.mainbottom-container .Img-container .btmImg .ImgInner {
    width: 85%;
    height: 80%;
    overflow: hidden;
    margin-top: 20px;
}

.mainbottom-container .Img-container .btmImg .ImgInner img {
    width: 50%;
    background: transparent;
}

.mainbottom-container .Img-container .btmImg .ImgInner .textinfo {
    width: 50%;
    float: right;
    height: 100%;
}

.btmImg .ImgInner .textinfo p {
    color: black;
    font-size: 20px;
}

i.fas.fa-arrow-alt-circle-right {
    color: yellow;
    font-size: 25px;
    position: relative;
    top: 3px;
    background-color: #fff;
    border-radius: 50%;
}

@media screen and (max-width:1480px) {
    .mainbottom-container {
        width: 1300px;
    }

    .mainbottom-container .Img-container {

        display: flex;
        justify-content: center;
    }

    .btmImg:last-child {
        display: none;
    }

    .btnImg {
        margin-left: 0;
    }
}

@media screen and (max-width:1200px) {
    .btmImg:last-child {
        display: block;
    }

    .mainbottom-container {
        width: 100vw;
        overflow: scroll;
    }

    .Img-container {
        width: 200%;
    }

    .btmImg {
        width: 50%;
    }
}

@media screen and (max-width:770px) {
    .mainbottom-container {
        width: 100vw;
        margin-top: 29px;
    }

    .Img-container {
        width: 200%;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .btmImg {
        height: 120px;
        display: block;
        background-color: grey;
        width: 200%;

    }

    .btmImg .ImgInner img {
        margin-top: 10px;
        width: 100%;
    }

    .btmImg .ImgInner .textinfo p {
        font-size: .888rem;
        margin-top: 30px;
        ;
        margin-left: 10px;
    }
}
</style>
