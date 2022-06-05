<template>
    <sction class="ConnectUs">
        <div class="container">
            <div class="main row">
                <div class="col-md-6 info">
                    <ul class="mask">
                        <li v-for="item in description" :key="item.id">
                            <div class="desc">
                                <h4>{{item.title}}</h4>
                                <p>{{item.desc}}</p>
                            </div>
                        </li>
                    </ul>
                    <ul class="icons">
                        <li  @click="activate(1)" :class="{ active : active_el == 1 } ">
                            <fa icon="hands-clapping" class="item" @click="switchImage" />
                            <!-- <img class="item" src="../assets/snap.png" @click="switchImage"/> -->
                        </li>
                        <li  @click="activate(2)" :class="{ active : active_el == 2 }">
                            <fa icon="location-crosshairs" class="item" @click="switchImage"/>
                            <!-- <img class="item" src="../assets/tracking.png" @click="switchImage"/> -->
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 images">
                    <div class="image-inner">
                        <img src="../assets/a.png"/>
                        <div class="multi-image">
                            <img v-if="image" :key="image.id" :src="image.src" alt="image.alt">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="download">
            <div class="details">
                <h2>حمّل ع السريع</h2>
                <p>اعتمد ع السريع علشان سلامتك <span>و سلامة طلباتك بأسعار ما تحلم فيها</span></p>
                <div class="gitit">
                    <img src="../assets/download1.png"/>
                    <img src="../assets/download2.png"/>
                </div>
            </div>
            <div class="app">
                <img src="../assets/mobile.png"/>
            </div>
        </div>
    </sction>
</template>
<script>
export default{
    data() {
        return {
        active_el: 1,
        index: 0,
        image: null,
        description:[
            {
                id: 1,
                title:"تواصل بسهولة",
                desc:"يوفر لك جاييك سهولة توصيلك بالسائق بطريقة سهلة وسريعة تجعل من السهل على الجميع العمل معًا والتحقق من التفاصيل",
            },
            {
                id: 2,
                title:"تواصلx بسهولة",
                desc:"يوفر لك جاييك سهولة توصيلك بالسائق بطريقة سهلة وسريعة تجعل من السهل على الجميع العمل معًا والتحقق من التفاصيل",
            },
        ],
        images: [
            {
            id: 1,
            src: "./src/assets/b.png",
            alt: 'mobileApp',
            },
            {
            id: 2,
            src: "./src/assets/c.png",
            alt: 'mobileApp',
            },
        ],
    }
  },
  mounted() {
    this.switchImage();
  },
  methods: {
    switchImage() {
      this.image = this.images[this.index];
      this.index = (this.index + 1) % this.images.length;
    },
    activate:function(el){
        this.active_el = el;
    }
  }
}
</script>
<style scoped>
.ConnectUs .main .info .icons li.active{
    background-color: #fff !important;
    color: #21325E;
}
.ConnectUs .main{
    display: flex;
    flex-wrap: wrap;
    padding-top: 150px;
}
.ConnectUs .main .info{
    display: flex;
}
.ConnectUs .main .info .mask,
.ConnectUs .main .info .icons{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 75%;
    justify-content: space-evenly;
}
.ConnectUs .main .info .mask li{
    text-align: center;
    margin-bottom: 70px !important;
}
.ConnectUs .main .info .mask li .desc h4{
    color: #FBB03C;
}
.ConnectUs .main .info .mask li .desc p{
    color: #fff;
}
.ConnectUs .main .info .icons{
    position: relative;
    display: flex;
    justify-content: space-evenly;

}
.ConnectUs .main .info .icons::before{
  content: "";
  width: 2px;
  right: 50%;
  top: 83px;
  background-color: #FBB03C;
  position: absolute;
  display: flex;
  height: 72%;

}
.ConnectUs .main .info .icons li{
    background-color: #21325E;
    color: #fff;
    font-size: 50px;
    cursor: pointer;
}
.ConnectUs .main .info .icons li::before{
    content: "";
    position: absolute;
    left: -5px;
    top: -5px;
    border: 1px solid #fff;
    opacity: .5;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    -webkit-animation: zoom-in-zoom-out 1s ease infinite; /* Chrome, Safari, Opera */
    animation: zoom-in-zoom-out 1s ease infinite;
    z-index: 1;
}
.ConnectUs .main .info .icons li:first-child {
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: space-evenly;
    top: 135px;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #fff;
}
.ConnectUs .main .info .icons li:nth-of-type(2){
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: space-evenly;
    bottom: 140px;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #fff;
    }
.ConnectUs .main .info .icons .item{
    position: relative;
    padding: 17px;
    z-index: 1;
}
.ConnectUs .main .images{
    position: relative;
    display: flex;
    justify-content: center;
}
.ConnectUs .main .images .image-inner{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
}
.ConnectUs .main .images .image-inner img{
    width: 60%;
    height: 100%;
}
.ConnectUs .main .images .image-inner .multi-image {
    position: absolute;
    display: flex;
    justify-content: center;
}
.ConnectUs .main .images::before{
    content: "";
    background-image: url(../assets/mobilecircle.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
}
.ConnectUs .download{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 220px;
}
.ConnectUs .download .details{
    background-color: #fff;
    position: relative;
    width: 80%;
    height: 100%;
    padding: 50px 0;
    margin-top: 40px;
    text-align: center;
    color: #21325E;
    margin-top: -14px;
}
.ConnectUs .download .details h2{
    padding-bottom: 65px;
    font-size: 55px;
}
.ConnectUs .download .details p{
    line-height: 3;
    font-size: 30px;
}
.ConnectUs .download .details p span{
    display: block;
}
.ConnectUs .download .details .gitit{padding-top: 30px;}
.ConnectUs .download .app{
    position: absolute;
    left: 10%;
    top: -70px;
}
.ConnectUs .download .app img{width: 88%;}
/* Chrome, Safari, Opera */
@-webkit-keyframes zoom-in-zoom-out {
    0%{
    	-webkit-transform: scale(1);
    }
    50%{
    	-webkit-transform: scale(1.1,1.1);
    }
}
/* Standard syntax */
@keyframes zoom-in-zoom-out {
   0%{
        transform: scale(1);
   }
   50%{
        transform: scale(1.1,1.1);
   }
}
@media(max-width:991px){
    .ConnectUs .main .images{
        display: none;
    }
    .ConnectUs .main .info{
        width: 100%;
    }
    .ConnectUs .main .info .icons{
        height: 170%;
        margin-top: -170px !important;
        width: 110%;
    }
    .ConnectUs .main .info .icons::before{
        height: 60%;
    }
    .ConnectUs .download .details{
        width: 100%;
    }
    .ConnectUs .download .app {
        display: none;
    }
    .ConnectUs .main .info .mask{
        width: auto;
    }
}
@media (max-width: 479px){
    .ConnectUs .main .info .icons li:nth-of-type(2){
        bottom: 245px;
    }
    .ConnectUs .download .details p{
        line-height: 2;
        font-size: 23px;
    }
}
</style>