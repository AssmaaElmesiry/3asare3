<script>
import { RouterView } from 'vue-router'
import navigationVue from './components/navigation.vue'

export default{
  components: {
    navigationVue,
    RouterView
  }
}
</script>

<template>
  <navigationVue/>
</template>

<style>
@import '@/assets/base.css';

</style>
