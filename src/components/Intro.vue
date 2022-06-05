<template>
    <section id="home" class="container Top">
        <div class="main-title">
            <h2 class="title">ع السريع أقوى شيء في <span>الأسعار  </span></h2>
            <p>اعتمد ع السريع  علشان سلامتك و سلامة <span>طلباتك بأسعار ما تحلم فيها</span></p>
        </div>
        <sction class="mob-section">
            <img src="../assets/phone 2.png" class="back right bounce" />
            <img src="../assets/phone 1.png" class="center bounce"/>
            <img src="../assets/phone 2.png" class="back left bounce" />
        </sction>
    </section>
</template>
<style>
    .Top{
        padding-top: 50px;
    }
    .Top .main-title{
        color: #fff;
        text-align: center;
        font-weight: bold;
        margin-bottom: 35px;
    }
    .Top .main-title .title{
        padding-bottom: 45px;
        font-size: 65px;
    }
    .Top .main-title .title span{
        color: #FBB03C;
        font-weight: bold;
    }
    .Top .main-title p{
        font-size: 30px;
    }
    .Top .main-title p span{
        display: block;
    }
    .Top .mob-section{
        width: 100%;
        height: 100%;
        display: block;
        padding-top: 20px;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .Top .mob-section img{
        width: auto;
        height: auto;
        -webkit-animation-duration: 2s;
            animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
    }
    .Top .mob-section .center{
        position: relative;
        z-index: 1;
    }
    .Top .mob-section .bounce {
    -webkit-animation-name: bounce;
            animation-name: bounce;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    }
    .Top .mob-section .back{
        position: absolute;
        top: 40px;
        width: 90%;
        height: 89%;
    }
    .Top .mob-section .back.right{
        right: -155px;
        -webkit-animation-duration: 4s;
            animation-duration: 4s; 
    }
    .Top .mob-section .back.left{
        left: -155px;
        -webkit-animation-duration: 6s;
            animation-duration: 6s; 
    }
@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
  }
}
@keyframes bounce {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
  }
}
@media(max-width: 991px){
    .Top .main-title .title{
        font-size: 40px;
    }
    .Top .main-title p {
        font-size: 25px;
    }
}
@media (max-width: 768px){
    .Top .main-title .title{
        font-size: 25px;
    }
    .Top .main-title p {
        font-size: 20px;
    }
    .Top .mob-section .back{
        display: none;
    }
}
</style>
