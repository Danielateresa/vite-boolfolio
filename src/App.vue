<script>

import AppNav from './components/AppNav.vue'


export default {
    components: {
        AppNav,
    },
    mounted() {
        document.title = "Daniela Teresa de Leo - Portfolio";
    }
}  
</script>

<template>
    <AppNav></AppNav>
    <router-view></router-view>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>
