<script>

import ProjectCard from './ProjectCard.vue'

export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
}
</script>


<template>
    <section class="vue-home">
        <div class="container pt-3">
            <h2>All Projects</h2>
            <div class="container content pt-5">


                <ProjectCard></ProjectCard>


            </div>

        </div>
    </section>
</template>


<style lang="scss" scoped>

</style>