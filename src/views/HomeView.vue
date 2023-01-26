<script>
import GitLink from '../components/GitLink.vue'
import AppCarousel from '../components/AppCarousel.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
    name: 'HomeView',
    components: {
        GitLink,
        AppCarousel,
        AppFooter
    }
}  
</script>

<template>

    <h1 class="text-center shadow-sm py-5 mb-0"><span class="text-danger">&#60;</span>Hi! I'm Daniela, web
        developer<span class="text-danger">/&#62;</span></h1>



    <AppCarousel></AppCarousel>
    <AppFooter></AppFooter>
    <GitLink></GitLink>

</template>

<style lang="scss" scoped>
h1 {
    font-size: 50px;
}

h2 {
    text-align: left;
    font-size: 60px;
    color: #fd9c1e;
    font-family: 'Rubik Mono One', sans-serif;
}

.row {
    max-width: 1400px;
    margin: 0 auto;
}
</style>
