<script>
import axios from 'axios';

export default {
    name: 'AppMain',

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
        },
        getImg(path) {
            if (path) {
                return this.api_url + '/storage/' + path
            }
            return '/src/assets/img/images.png';
        }
    },
    mounted() {
        this.getProjects(this.api_url + '/api/projects');
    }
}
</script>


<template>
    <section class="vue-home">
        <template v-if="projects">
            <div class="container">
                <h1>All Projects</h1>

                <div class="row" v-if="!loading">
                    <div class="col-3" v-for="project in projects.data">
                        <div class="card border-0 rounded-0 rounded-bottom">
                            <img class="card-image rounded-top" :src="getImg(project.cover_img)" alt="">
                            <div class="card-body">
                                <h3>{{ project.title }}</h3>

                            </div>
                            <div class="card-footer">
                                <div class="type">
                                    <strong>type: </strong>
                                    <span v-if="project.type">
                                        {{ project.type.name }}
                                    </span>
                                    <span v-else>no type</span>
                                </div>

                                <div class="technologies">
                                    <strong>technologies: </strong>
                                    <template v-if="project.technologies">
                                        <span v-for="technology in project.technologies">
                                            #{{ technology.name }}
                                        </span>
                                    </template>
                                    <template v-else>no technologies added</template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template>
            No Projects yet
        </template>
    </section>
</template>


<style lang="scss" scoped>

</style>