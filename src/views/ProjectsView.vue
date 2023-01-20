<script>
import ProjectList from '../components/ProjectList.vue'

export default {
    name: 'ProjectsView',
    components: {
        ProjectList
    }
}  
</script>

<template>
    <div class="container">
        <div>
            <h1>My projects</h1>
        </div>

        <ProjectList></ProjectList>

    </div>
</template>

<style lang="scss" scoped>

</style>
