<template>
    <section class="footer" id="ConnectUs">
        <div class="container">
            <div class="connect">
                <h1>ع السريع نساعدك</h1>
                <p>تحتاجون للمزيد من المعلومات حول ع السريع ؟</p>
                <span>تقدرون تتواصلون معنا</span>
                <a href="#" class="callUs">  تواصل معنا <fa :icon="['fab','whatsapp']"/></a>
                <div class="social">
                    <a href=""><fa :icon="['fab','twitter']" /></a>
                    <a href=""><fa :icon="['fab','facebook-f']" /></a>
                </div>
            </div>
        </div>
        <div class="downFooter">
            <div class="container">
                <ul>
                    <li>
                        <p>المملكة العربية السعودية</p>
                        <fa icon="location-dot" />
                    </li>
                    <li>
                        <p>Mido@3asare3.com</p>
                        <fa icon="envelope" />
                    </li>
                    <li>
                        <p>01284855064</p>
                        <fa icon="phone-volume" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-inner">
            <p>@جميع الحقوق محفوظة لتطبيق  ع السريع 2021</p>
        </div>
    </section>
</template>
<style>
.footer{
    color: #fff;
    text-align: center;
    padding-top: 50px;
}
.footer .connect{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
}
.footer .connect p{
    color: #707070;
    padding: 15px 0 !important;
}
.footer .connect span{
    color: #FBB03C;
    padding-bottom: 15px;
}
.footer .connect .callUs{
    background-color: #3E497A;
    padding: 10px;
    color: #fff;
    border-radius: 22px;
    font-size: 20px;
}
.footer .connect .social{
    width: 100px;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
}
.footer .connect .social svg{
    color: #fff;
    width: 30px;
    height: 30px;
}
.footer .downFooter{
    display: flex;
    justify-content: center;
    position: relative;
    padding: 25px;
}
.footer .downFooter ul{
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
}
.footer .downFooter ul li{
    display: flex;
    flex-direction: row;
}
.footer .downFooter ul li p{
    padding-left: 5px !important;
}
.footer .downFooter::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 1px;
}
.footer .downFooter::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 1px;
}
.footer .footer-inner{
    padding: 25px 0;
    text-align: center;
}
@media (max-width: 567px){
    .footer .downFooter ul{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
    .footer .downFooter ul li {
        display: flex;
        flex-direction: row;
        padding-bottom: 16px !important;
        width: 100%;
        justify-content: space-between;
    }
}
</style>