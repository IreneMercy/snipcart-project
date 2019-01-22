<template>
<div>
<div class="page">
<Header class="header"></Header>
<nuxt/>
<Footer></Footer>
</div>
</div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue'
export default {
    components:{
        Header,
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

