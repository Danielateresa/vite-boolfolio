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
    <div>
        <h1 class="text-center shadow-sm py-5"><span class="text-danger">&#60;</span>My projects<span
                class="text-danger">/&#62;</span></h1>
    </div>

    <ProjectList></ProjectList>

</template>

<style lang="scss" scoped>
.row {
    max-width: 1400px;
    margin: 0 auto;
}
</style>
