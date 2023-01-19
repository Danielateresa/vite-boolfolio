<script>
import HelloWorld from './components/HelloWorld.vue'
import AppMain from './components/AppMain.vue'


export default {
    components: {
        AppMain
    },
    data() {
        return {
            projects: null,
            api_url: 'http://localhost:8000',
            loading: true,
            error: null

        }
    },
}  
</script>

<template>
    <AppMain></AppMain>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
