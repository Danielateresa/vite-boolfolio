<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
    components: {

    },
    data() {
        return {
            projects: null,
            api_url: 'http://localhost:8000',
            loading: true,
            error: null

        }
    },
    methods: {
        //chiamata ajax per ottenere tutti i post del db
        getProjects(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    this.projects = response.data;
                    this.loading = false;


                })
                .catch(error => {
                    console.error(error.message);
                    this.loading = false;
                    this.error = error.message;

                });
        }
    },
    mounted() {
        this.getProjects(this.api_url + '/api/projects');
    }
}
</script>


<template>
    <section class="vue-home">
        <div class="container">
            <h1>All Projects</h1>

            <div class="row" v-if="!loading">
                <div class="col-3" v-for="project in projects.data">
                    <img class="card-image" src="" alt="">
                    <div class="card-body">
                        <h3>{{ project.title }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
