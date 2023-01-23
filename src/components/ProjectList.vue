<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue'
import { store } from '../store.js'

export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: null,
            loading: true,//di base la pagina carica sempre
            error: null,//possibilità di salvare un messaggio dentro error
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
        prevPage(url) {
            this.getProjects(url)
        },
        nextPage(url) {
            this.getProjects(url)
        }
    },
    mounted() {
        this.getProjects(this.store.api_url + '/api/projects');
    }
}
</script>


<template>
    <section class="vue-home">
        <div class="container content pt-5">
            <template v-if="projects && !loading">
                <div class="row gy-5">
                    <ProjectCard :project="project" v-for="project in projects.data" />
                </div>

                <nav class="d-flex justify-content-center pt-5" aria-label="Page navigation ">
                    <ul class="pagination">
                        <li class="page-item" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span class="text-dark" aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link bg-dark" href="#">{{
                            projects.current_page
                        }}</a></li>
                        <li class="page-item" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span class="text-dark" aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- pagination -->
            </template>

            <template v-else-if="loading">
                <h3 class="text-muted text-center">
                    <div class="spinner-border m-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </h3>
            </template>
            <!-- finchè non arriva una risposta dalla chiamata mostra un loading -->

            <template v-else>No Projects yet</template>
            <!-- se non ci sono progetti nel db -->
        </div>
    </section>
</template>


<style lang="scss" scoped>

</style>