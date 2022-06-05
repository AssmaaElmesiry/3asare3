<template>
    <section class="Faq" id="aboutus">
        <div class="container">
            <h2 class="title">{{title}}</h2>
            <div class="row">
                <div class="col-md-6">
                <div class="col-md-12" v-for="(item, index) in Questions" 
                 :key="item.id">
                    <div class="mask" @click="toggle(index)">
                        <div class="item">
                            <h4>{{item.title}}</h4>
                            <fa :icon="['fa',item.icon]"/>
                        </div>
                    </div>
                    <transition name="scale">
                        <div class="details" v-show="item.visible">
                            <p>{{item.desc}}</p>
                        </div>
                    </transition>
                </div>
                </div>
                <div class="col-md-6">
                <div class="col-md-12" v-for="(item, index) in Questions2" 
                 :key="item.id">
                    <div class="mask" @click="toggle2(index)">
                        <div class="item">
                            <h4>{{item.title}}</h4>
                            <fa :icon="['fa',item.icon]"/>
                        </div>
                    </div>
                    <div class="details" v-show="item.visible2">
                        <p>{{item.desc}}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return {
            title:'الأسئلة الشائعة',
            visible: true,
            visible2: true,
            Questions:[
                {
                    id: 1,
                    title: 'كيف يعمل التطبيق؟',
                    desc: ' بعد تسجيل الدخول في جايك ، اختر أي رحلة ثم طلب جديد وفي خطوات بسيطة وسهلة قم بإضافة عنوان المرسل إليه وإضافة معلومات الطلب مثل العدد والوزن المناسب والخطوة الأخيرة دفع المبلغ، و سيتواصل معك الكابتن ليستلم منك الطلب ويقوم بتوصيلها لعنوان المرسل إليه',
                    icon: 'plus',
                    visible: false,
                },
                {
                    id: 2,
                    title: 'كيف يعمل لتطبيssق؟',
                    desc: ' بعد تسجيل الدخول في جايك ، اختر أي رحلة ثم طلب جديد وفي خطوات بسيطة وسهلة قم بإضافة عنوان المرسل إليه وإضافة معلومات الطلب مثل العدد والوزن المناسب والخطوة الأخيرة دفع المبلغ، و سيتواصل معك الكابتن ليستلم منك الطلب ويقوم بتوصيلها لعنوان المرسل إليه',
                    icon: 'plus',
                    visible: false,
                },
                {
                    id: 3,
                    title: 'كيف يعمل التطبيق؟',
                    desc: ' بعد تسجيل الدخول في جايك ، اختر أي رحلة ثم طلب جديد وفي خطوات بسيطة وسهلة قم بإضافة عنوان المرسل إليه وإضافة معلومات الطلب مثل العدد والوزن المناسب والخطوة الأخيرة دفع المبلغ، و سيتواصل معك الكابتن ليستلم منك الطلب ويقوم بتوصيلها لعنوان المرسل إليه',
                    icon: 'plus',
                    visible: false,
                },
            ],
            Questions2:[
                {
                    id: 1,
                    title: 'كيف يعمل التطبيق؟',
                    desc: ' بعد تسجيل الدخول في جايك ، اختر أي رحلة ثم طلب جديد وفي خطوات بسيطة وسهلة قم بإضافة عنوان المرسل إليه وإضافة معلومات الطلب مثل العدد والوزن المناسب والخطوة الأخيرة دفع المبلغ، و سيتواصل معك الكابتن ليستلم منك الطلب ويقوم بتوصيلها لعنوان المرسل إليه',
                    icon: 'plus',
                    visible2: false,
                },
                {
                    id: 2,
                    title: 'كيف يعمل لتطبيssق؟',
                    desc: ' بعد تسجيل الدخول في جايك ، اختر أي رحلة ثم طلب جديد وفي خطوات بسيطة وسهلة قم بإضافة عنوان المرسل إليه وإضافة معلومات الطلب مثل العدد والوزن المناسب والخطوة الأخيرة دفع المبلغ، و سيتواصل معك الكابتن ليستلم منك الطلب ويقوم بتوصيلها لعنوان المرسل إليه',
                    icon: 'plus',
                    visible2: false,
                },
                {
                    id: 3,
                    title: 'كيف يعمل التطبيق؟',
                    desc: ' بعد تسجيل الدخول في جايك ، اختر أي رحلة ثم طلب جديد وفي خطوات بسيطة وسهلة قم بإضافة عنوان المرسل إليه وإضافة معلومات الطلب مثل العدد والوزن المناسب والخطوة الأخيرة دفع المبلغ، و سيتواصل معك الكابتن ليستلم منك الطلب ويقوم بتوصيلها لعنوان المرسل إليه',
                    icon: 'plus',
                    visible2: false,
                },
            ],
        }
    },
    methods: {
        toggle(key) {
        var vm = this;
        if (!vm.Questions[key].visible) {
            vm.Questions[key].visible = true;
        } else  {
            vm.Questions[key].visible = false;
        }
        },
        toggle2(key) {
        var vm = this;
        if (!vm.Questions2[key].visible2) {
            vm.Questions2[key].visible2 = true;
        } else  {
            vm.Questions2[key].visible2 = false;
        }
        },
        faClass(icon) {
            return `<fa icon="-${icon}"`;
        },
    },
}
</script>
<style scoped>
.col-md-6{
    overflow: hidden;
    padding-bottom: 15px;
}
.Faq{
    padding-top: 175px;
}
.Faq .title{
    color: #fff;
    text-align: center;
    padding-bottom: 30px;
}
.Faq .mask{
    background-color: #3E497A;
    color: #FBB03C;
    border-radius: 10px;
    box-shadow: 0px 4px 5px 0px rgb(52 52 55 / 20%);
    z-index: 1
}
.Faq .mask h4{
    color: #FBB03C;
}
.Faq .mask .item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 30px;
}
.Faq .details{
    background-color: #3E497A;
    color: #fff;
    padding: 40px 20px 20px 20px;
    border-radius: 10px;
    margin-top: -42px;
    margin-bottom: 20px;
    height: 0%;
}
/* .scale-enter-active,
.scale-leave-active {
  transition: height 0.5s ease;
} */

.scale-enter-from,
.scale-leave-to {
  height: 0;
}
/* .Faq  .details.active{
    transform: scaleY(1);
} */
.Faq .mask .details p{
    line-height: 2;
    text-align: justify;
}

</style>