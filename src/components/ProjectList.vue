<script>
import axios from 'axios';

export default {
    name: 'AppMain',

    data() {
        return {
            projects: null,
            api_url: 'http://localhost:8000',//link al mio server
            loading: true,//di base la pagina carica sempre
            error: null//possibilità di salvare un messaggio dentro error

        }
    },
    methods: {
        //chiamata ajax per ottenere tutti i post del db
        getProjects(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    this.loading = false;//il caricamento finisce dopo l'ottenimento dei dati
                })
                .catch(error => {
                    console.error(error.message);
                    this.loading = false;//il caricamento finisce in caso di errore
                    this.error = error.message;
                });
        },
        getImg(path) {
            if (path) {
                return this.api_url + '/storage/' + path
            }
            return '/img/images.png';
        },
        /**
         * 
         * @param {string} text 
         */
        trimDescription(text) {
            if (text.length > 100) {
                return text.slice(0, 100) + '...'
            }
            return text
        },
        prevPage(url) {
            this.getProjects(url)
        },
        nextPage(url) {
            this.getProjects(url)
        }
    },
    mounted() {
        this.getProjects(this.api_url + '/api/projects');
    }
}
</script>


<template>
    <section class="vue-home">
        <div class="container py-5">
            <h2>All Projects</h2>
            <div class="container content pt-5">
                <template v-if="projects && !loading">
                    <div class="row gy-5">
                        <div class="col-3" v-for="project in projects.data">
                            <div class="card border-0 rounded-0 rounded-bottom">
                                <img class="card-image" :src="getImg(project.cover_img)" alt="">
                                <div class="card-body">
                                    <h4>{{ project.title }}</h4>
                                    <!-- <p>{{ trimDescription(project.description) }}</p> da rivedere-->
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
                                        <template v-if="project.technologies.length > 0">
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

                    <nav class="d-flex justify-content-center pt-3" aria-label="Page navigation ">
                        <ul class="pagination">
                            <li class="page-item" v-if="projects.prev_page_url"
                                @click="prevPage(projects.prev_page_url)">
                                <a class="page-link" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                                projects.current_page
                            }}</a></li>
                            <li class="page-item" v-if="projects.next_page_url"
                                @click="nextPage(projects.next_page_url)">
                                <a class="page-link" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </template>
                <template v-else-if="loading">
                    <h3 class="text-muted">Loading page..</h3>
                </template>
                <template v-else>No Projects yet</template>

            </div>

        </div>
    </section>
</template>


<style lang="scss" scoped>
.content {
    max-width: 1000px;
}
</style>