<script>
import ProjectList from '../components/ProjectList.vue'
import AppFooter from '../components/AppFooter.vue'
import GitLink from '../components/GitLink.vue'

export default {
    name: 'ProjectsView',
    components: {
        ProjectList,
        AppFooter,
        GitLink
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
    <GitLink></GitLink>
</template>

<style lang="scss" scoped>
.row {
    max-width: 1400px;
    margin: 0 auto;
}
</style>
