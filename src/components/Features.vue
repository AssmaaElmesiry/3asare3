<template>
  <section id="features" class="features">
    <div class="container">
      <div class="title">
        <h2>أهم شيء يميز ع السريع</h2>
        <p>أننا نطور خدماتنا بشكل مستمر عشان نقدم مميزات سهلة ومريحة لك</p>
      </div>
      <div class="rocketplace">
        <div class="test">
          <img src="../assets/rocket.png">
        </div>
        <div class="line">
          <ul class="icon">
            <li @click="toggle(index)" 
            v-for="(item, index) in items" 
            :key="item.id">
              <fa :icon="['fa',item.icon]"/>
              <div v-show="item.visible" class="desc">
                <div class="title">
                  <h4>{{item.title}}</h4>
                </div>
                <p>{{item.desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="backgroundcircle">
        <kinesis-container>
            <kinesis-element :strength="npm40">
              <img src="../assets/circle.png" />
            </kinesis-element>
        </kinesis-container>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
  data() {
    return {
      visible: true,
      items:[
        {
          id: 1,
          icon: 'rocket',
          title: 'أسرع من البرررق',
          desc: 'جايك يوجه السيارات و شاحنات التوصيل بوقت قياسي وبتنسيق عصري مباشر مع أي كابتن جاهز  اهتمينا بالميزة هذي عند كلاٍ من العميل و الكابتن',
          visible: false,
        },
        {
          id: 2,
          icon: 'hand-holding-dollar',
          title: 'أسرع من البرررق',
          desc: 'جايك يوجه السيارات و شاحنات التوصيل بوقت قياسي وبتنسيق عصري مباشر مع أي كابتن جاهز  اهتمينا بالميزة هذي عند كلاٍ من العميل و الكابتن',
          visible: false,
        },
        {
          id: 3,
          icon: 'envelope-open-text',
          title: 'أسرع من البرررق',
          desc: 'جايك يوجه السيارات و شاحنات التوصيل بوقت قياسي وبتنسيق عصري مباشر مع أي كابتن جاهز  اهتمينا بالميزة هذي عند كلاٍ من العميل و الكابتن',
          visible: false,
        },
        {
          id: 4,
          icon: 'list-check',
          title: 'أسرع من البرررق',
          desc: 'جايك يوجه السيارات و شاحنات التوصيل بوقت قياسي وبتنسيق عصري مباشر مع أي كابتن جاهز  اهتمينا بالميزة هذي عند كلاٍ من العميل و الكابتن',
          visible: false,
        },
        {
          id: 5,
          icon: 'car',
          title: 'أسرع من البرررق',
          desc: 'جايك يوجه السيارات و شاحنات التوصيل بوقت قياسي وبتنسيق عصري مباشر مع أي كابتن جاهز  اهتمينا بالميزة هذي عند كلاٍ من العميل و الكابتن',
          visible: false,
        },
        {
          id: 6,
          icon: 'shield-heart',
          title: 'أسرع من البرررق',
          desc: 'جايك يوجه السيارات و شاحنات التوصيل بوقت قياسي وبتنسيق عصري مباشر مع أي كابتن جاهز  اهتمينا بالميزة هذي عند كلاٍ من العميل و الكابتن',
          visible: false,
        },
      ],

    }
  },
  methods: {
    toggle(key) {
      var vm = this;
      if (!vm.items[key].visible) {
        vm.items[key].visible = true;
      } else  {
          vm.items[key].visible = false;
      }
    },
    faClass(icon) {
      return `<fa icon="-${icon}"`;
    }
  },
  computed: {
    show() {
      return this.id === this.desc
    },
  },
}
</script>
<style scoped>
@keyframes slideInFromLeft {
  0% {
    transform: translatey(1000px);
  }
  100% {
    transform: translatey(0);
  }
}
.features{
  background-image: url(../assets/sky.png);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  overflow: hidden;
  /* height: 330vh; */
}
.features .title {
  text-align: center;
  color: #fff;
}
.features .title h2{padding-bottom: 20px;}
.features .title p {
  font-size: 20px;
}
.features .rocketplace{
  height: 170vh; 
  position: relative;
  animation: 7s ease-out 0s 1 slideInFromLeft;
  z-index: 4;
}
.features .rocketplace img{
  z-index: -1;
}
.features .rocketplace svg{
  color: #21325E;
  width: 50px;
  height: 50px;
}
.features .rocketplace .test {  
  color: #fff;
  text-align: center;
  padding: 30px;
  width: 100%;
}
.features .rocketplace .line{
  width: 20px;
  height: 1875px;
  background-color: #FFDEB9;
  left: 50%;
  transform: translatex(-50%);
  position: absolute;
  top: 355px;
  z-index: -1;
}
.features .rocketplace .line .icon{
  display: flex;
  align-items: center;
  height: 85%;
  flex-direction: column;
  z-index: 9999;
  justify-content: space-evenly;
}
.features .rocketplace .line .icon li{
  width: 100px;
  height: 100px;
  background-color: #F0F0F0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  }
  .features .rocketplace .line .icon li:before{
    content: "";
    position: absolute;
    left: -5px;
    top: -5px;
    border: 1px solid #fff;
    opacity: .5;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    -webkit-animation: zoom-in-zoom-out 1s ease infinite; /* Chrome, Safari, Opera */
    animation: zoom-in-zoom-out 1s ease infinite;
    z-index: 1;
  }
  .features .rocketplace .line .icon li:nth-child(odd) .desc{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: -42px;
    left: 130px;
    width: 300px;
    background-color: #F0F0F0;
    border-radius: 15px;
    padding: 20px 25px;
    text-align: center;
    z-index: 1;
  }
  .features .rocketplace .line .icon li:nth-child(even) .desc{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: -42px;
    right: 130px;
    width: 300px;
    background-color: #F0F0F0;
    border-radius: 15px;
    padding: 20px 25px;
    text-align: center;
    z-index: 1;
  }
  .features .rocketplace .line .icon li:nth-child(odd) .desc::before {
      content: "";
      position: absolute;
      top: 41%;
      left: -10px;
      width: 0px;
      height: 0px;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 15px solid #F0F0F0;
  }
    .features .rocketplace .line .icon li:nth-child(even) .desc::before{
      content: "";
      position: absolute;
      top: 41%;
      right: -10px;
      width: 0px;
      height: 0px;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 15px solid #F0F0F0;
  }
  .features .rocketplace .line .icon li .desc h4{
    font-size: 22px;
    color: #21325E;
    padding-bottom: 20px;
  }
  .features .rocketplace .line .icon li .desc p{
    color: #21325E;
  }
  .features .backgroundcircle img {
    width: 100%;
    height: 100%;
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
@media (max-width: 991px){
      .features{
      height: 320vh;
    }
    .features .backgroundcircle{
      display: none;
    }
}
  @media (max-width: 768px){
    .features{
      height: 320vh;
    }
    .features .rocketplace{height: 220vh;}
  .features .rocketplace .line .icon li:nth-child(odd) .desc{
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 125px;
    top: auto;
    left: 50%;
    width: 300px;
    background-color: #F0F0F0;
    border-radius: 15px;
    padding: 20px 25px;
    text-align: center;
    transform: translate(-50%);
    z-index: 1;
  }
  .features .rocketplace .line .icon li:nth-child(even) .desc{
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 125px;
    top: auto;
    right: -100px;
    width: 300px;
    background-color: #F0F0F0;
    border-radius: 15px;
    padding: 20px 25px;
    text-align: center;
    z-index: 1;
  }
   .features .rocketplace .line .icon li:nth-child(even) .desc::before, .features .rocketplace .line .icon li:nth-child(odd) .desc::before {
      content: "";
      position: absolute;
      top: auto;
      bottom: -30px;
      left: 43%;
      right: auto;
      width: 0px;
      height: 0px;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 15px solid #F0F0F0;
  }
  
}
</style>