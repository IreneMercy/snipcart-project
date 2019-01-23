<template>
<div>
<div class="page">
<Resources class="header"></Resources>
<nuxt/>
<Footer></Footer>
</div>
</div>
</template>

<script>
import Resources from '@/components/Resources/Resources.vue';
import Footer from '@/components/Footer/Footer.vue'
export default {
    components:{
        Resources,
        Footer
    },
}
</script>

<style>
.header{
    background-color:#5b6161;
    height:15%;

}
</style>

