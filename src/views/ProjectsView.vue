<script>
import ProjectList from '../components/ProjectList.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
    name: 'ProjectsView',
    components: {
        ProjectList,
        AppFooter
    }
}  
</script>

<template>
    <div>
        <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>My projects<span
                class="text-danger">/&#62;</span></h1>
    </div>

    <ProjectList></ProjectList>
    <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
.row {
    max-width: 1400px;
    margin: 0 auto;
}
</style>
