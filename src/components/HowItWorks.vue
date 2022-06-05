<template>
<sction class="HowItWorks" id="Howitworks">
    <div class="container">
        <div class="title">
            <h2>كيف يعمل ع السريع</h2>
        </div>
        <div class="desc">
            <p>مهمتنا في ع السريع هي توفير وقتك وتيسير حياتك، حمل التطبيق<span> بخطوات بسيطة وتمتع بالمزايا الرهيبة</span></p>
        </div>
        <div class="videoinner">
            <!-- Button trigger modal -->
          <button type="button" class="openME" data-bs-toggle="modal" data-bs-target="#exampleModal">
             <svg-icon type="mdi" :path="path"></svg-icon>
          </button>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="close">
              <fa icon="xmark" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div class="modal-dialog">
              <div class="modal-content">
                  <iframe width="550" height="315" src="https://www.youtube.com/embed/BT9EJNoXzYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
    </div>
</sction>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPlay  } from '@mdi/js'; 
export default{
    data() {
        return {
            isOpen: false,
            path: mdiPlay,
            isShowing: false,
        }
    },
    components: {
        SvgIcon,
    }
}
</script>
<style scoped>
.HowItWorks{
    background-image: url(../assets/howitworks.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    position: relative;
    height: auto;
    padding: 105px 0px;
    text-align: center;
    background-position: center;
    color: #fff;
}
.HowItWorks::before{
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #ff710373;
    top: 0;
    left: 0;
}
.HowItWorks .title h2{
    padding-bottom: 50px;
    font-size: 70px;
}
.HowItWorks .desc p{
  line-height: 2.1;
  font-size: 22px;
} 
.HowItWorks .desc p span{
    display: block;
}
.HowItWorks .videoinner{
  padding-top: 30px;
}
.HowItWorks .videoinner .openME{
  background-color: #FBB03C;
  border: none;
  color: #fff;
  outline: none;
  padding: 20px;
  border-radius: 50%;
  position: relative;
  transition: 1s ease infinite;
}
.HowItWorks .videoinner .openME::before{
    content: "";
    position: absolute;
    left: -8px;
    top: -8px;
    background-color: #e89d53a3;
    opacity: .5;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    -webkit-animation: zoom-in-zoom-out 1s ease infinite; /* Chrome, Safari, Opera */
    animation: zoom-in-zoom-out 1s ease infinite;
    z-index: 1;
}
.HowItWorks .videoinner .openME svg {
  width: 35px;
  height: 35px;
  z-index: 2;
}
.HowItWorks .videoinner .modal{
    position: absolute;
    width: auto;
    z-index: 9999;
    margin: 0 auto;
    padding: 45px 30px;
    top: 50%;
    border-radius: 25px;
    background-color: #21325E;
    left: 50%;
    height: auto;
    transform: translate(-50%,-50%);
}
.modal-dialog{
  width: auto !important;
}
.modal-content{
  border: none;
  background-color: #21325E;
}
.close{
  position: absolute;
  top: 15px;
  right: 30px;
  cursor: pointer;
}
.close svg{
  font-size: 25px;
  color: #fff;
}
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
@media(max-width: 768px){
  .HowItWorks .title h2{
    font-size: 50px;

  }
  .HowItWorks .desc p{
    font-size: 18px;
  }
}
@media (max-width: 668px){
  .HowItWorks .videoinner .modal{
    width: 100%;
  }
  .HowItWorks .videoinner .modal .modal-dialog .modal-content iframe{
    width: auto;
  }
}
@media (min-width: 576px){
  .modal-dialog {
    max-width: 100%;
    margin: 1.75rem auto;
  }
}
@media (max-width: 479px){
    .HowItWorks .title h2{
    font-size: 40px;
    padding-bottom: 15px;
  }
  .HowItWorks .desc p{
    font-size: 13px;
  }
}
</style>