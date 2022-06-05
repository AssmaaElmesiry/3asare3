<template>
  <main>
    <IntroVue />
    <FeaturesVue />
    <HowItWorksVue />
    <ConnectUs />
    <AboutUsVue />
    <footerStyleVue />
  </main>
</template>
<script>

import IntroVue from "../components/Intro.vue"
import FeaturesVue from "../components/Features.vue"
import HowItWorksVue from "../components/HowItWorks.vue"
import ConnectUs from '@/components/ConnectUs.vue'
import AboutUsVue from "../components/AboutUs.vue"
import footerStyleVue from "../components/footerStyle.vue"


export default{
  data() {
    return {

    }
  },
  components:{
    IntroVue,
    FeaturesVue,
    HowItWorksVue,
    ConnectUs,
    AboutUsVue,
    footerStyleVue,
  },
}
</script>

<style lang="css">
main{
  padding-top: 130px;
}
</style>