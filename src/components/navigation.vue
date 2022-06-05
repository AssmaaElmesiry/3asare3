<template>
    <header :class="{'scrolled-nav': scrolledNav }">
        <div class="container">
            <div class="logo">
                <img src="../assets/Logo.png"/>
            </div>
            <nav>
                <ul v-show="!mobile" class="navigation">
                    <li> <a href="/">الرئيسية</a></li>
                    <li> <a href="#aboutus">من نحن</a> </li>
                    <li> <a href="#features">المزايا</a></li>
                    <li> <a href="#Howitworks">كيف يعمل ع السريع</a> </li>
                    <li> <a href="#ConnectUs">تواصل معنا</a></li>
                </ul>
                <div class="icon">
                    <svg-icon @click="toggleMobileNav" v-show="mobile" type="mdi" :path="path" :class="{'icon-active': mobileNav}"></svg-icon>
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="dropdown-nav">
                        <div class="logo">
                            <img src="../assets/Logo.png"/>
                        </div>
                        <li> <a href="/">الرئيسية</a></li>
                        <li> <a href="#aboutus">من نحن</a> </li>
                        <li> <a href="#features">المزايا</a></li>
                        <li> <a href="#Howitworks">كيف يعمل ع السريع</a> </li>
                        <li> <a href="#ConnectUs">تواصل معنا</a></li>
                    </ul>
                </transition>
            </nav>
        </div>
    </header>
  <RouterView />
</template>
<script>
import {RouterView } from 'vue-router'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMenu  } from '@mdi/js'
export default{
    data() {
        return {
            scrolledNav: null,
            mobile: false,
            mobileNav: false,
            windowWidth: null,
            path: mdiMenu ,
        }
    },
    created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll)
    },
    methods: {
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50){
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 991){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
        }
    },
    components: {
        RouterView,
        SvgIcon
    }
}
</script>

<style scoped>
@import '@/assets/base.css';
header .container{
    display: flex;
}
header {
z-index: 99;
width: 100%;
position: fixed;
transition: .5s ease all;
color: #fff;
padding: 5px 0;
}
header .logo img{
    width: 80%;
    height: 100%;
}
header nav{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
}
header nav .navigation{
    display: flex;
    list-style: none;
    width: 70%;
    justify-content: space-between;
}
header nav .navigation li a{
    color: #fff;
    font-size: 20px;
    transition: .5s ease all;
}
header nav .navigation li:hover a{
color: #FBB03C;
transition: .5s ease all;
}
header nav a.router-link-exact-active {
  color: #FBB03C !important;
}
.icon{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 24px;
    height: 100%;
}
.icon svg{
    cursor: pointer;
    transition: .8s ease all;
}
.icon-active{
    transform: rotate(270deg);
}
header nav .dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #21325E;
    top: 0;
    right: 0;
    padding: 25px !important;
    text-align: center;
}
header nav .dropdown-nav .logo{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
header nav .dropdown-nav .logo img{
    width: 30%;
}
header nav .dropdown-nav li{
    margin-left: 0;
    padding: 15px 0 !important;
}
header nav .dropdown-nav li a{
    color: #fff;
}
header nav .dropdown-nav li .link{
    color: #000;
}
.scrolled-nav{
    background-color: #21325E;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    height: 100px;
    padding-top: 15px;
    z-index: 99999999999999999;
}
.scrolled-nav nav{
    padding: 8px 0;
}
.scrolled-nav .logo img{
    width: 50%;
    
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition:  1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform: translateX(250px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
@media(min-widht: 1140px){
    .link{
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
    }
    .link:hover{
        color: #fff;
        border-color: #fff;
    }
}
</style>
